import AsyncStorage from '@react-native-async-storage/async-storage'

export interface Meal {
  id: string
  name: string
  description: string
  consumedAt: Date
  onDiet: boolean
}

const RECORDED_MEALS_KEY = '@daily-diet:meals'
const BEST_HEALTHY_MEAL_SEQUENCE_KEY = '@daily-diet:meals:best-sequence'
const CURRENT_HEALTHY_MEAL_SEQUENCE_KEY = '@daily-diet:meals:current-sequence'

async function fetchMeals() {
  try {
    const data = await AsyncStorage.getItem(RECORDED_MEALS_KEY)
    const meals: Meal[] = data ? JSON.parse(data) : []

    return meals.map((meal) => ({
      ...meal,
      consumedAt: new Date(meal.consumedAt),
    }))
  } catch (error) {
    console.log('Erro ao buscar refeições')
    return []
  }
}

async function storeMeal(newMeal: Meal) {
  try {
    const meals = await fetchMeals()
    await AsyncStorage.setItem(
      RECORDED_MEALS_KEY,
      JSON.stringify([newMeal, ...meals]),
    )

    await storeHealthyMealSequences(newMeal.onDiet)
  } catch {
    console.log('Erro ao salvar refeição')
  }
}

async function storeHealthyMealSequences(isHealthyMeal: boolean) {
  try {
    const storedBestSequence = await AsyncStorage.getItem(
      BEST_HEALTHY_MEAL_SEQUENCE_KEY,
    )

    const storedCurrentSequence = await AsyncStorage.getItem(
      CURRENT_HEALTHY_MEAL_SEQUENCE_KEY,
    )

    const bestSequence: number = storedBestSequence
      ? JSON.parse(storedBestSequence)
      : 0

    const currentSequence: number = storedCurrentSequence
      ? JSON.parse(storedCurrentSequence) + 1
      : 0

    if (isHealthyMeal) {
      await AsyncStorage.setItem(
        CURRENT_HEALTHY_MEAL_SEQUENCE_KEY,
        JSON.stringify(currentSequence),
      )

      if (currentSequence > bestSequence)
        await AsyncStorage.setItem(
          BEST_HEALTHY_MEAL_SEQUENCE_KEY,
          JSON.stringify(currentSequence),
        )
    } else {
      await AsyncStorage.setItem(
        CURRENT_HEALTHY_MEAL_SEQUENCE_KEY,
        JSON.stringify(0),
      )
    }
  } catch (error) {
    console.log('Erro ao salvar sequências de pratos dentro da dieta')
  }
}

export async function fetchBestHealthyMealSequence() {
  try {
    const bestHealthyMealSequence = await AsyncStorage.getItem(
      BEST_HEALTHY_MEAL_SEQUENCE_KEY,
    )

    return (
      bestHealthyMealSequence ? JSON.parse(bestHealthyMealSequence) : 0
    ) as number
  } catch (error) {
    console.log('Erro ao buscar melhor sequência de reifeções dentro da dieta')
    return 0
  }
}

async function updateMeal(data: Meal) {
  try {
    const meals = await fetchMeals()
    const mealsUpdated = meals.map((meal) =>
      meal.id === data.id ? data : meal,
    )

    await AsyncStorage.setItem(RECORDED_MEALS_KEY, JSON.stringify(mealsUpdated))
  } catch (error) {
    console.log('Erro ao atualizar dados da refeição')
  }
}

export const useStore = () => ({
  storeMeal,
  fetchMeals,
  updateMeal,
  fetchBestHealthyMealSequence,
})
