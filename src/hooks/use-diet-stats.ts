import { useEffect, useState } from 'react'
import { type Meal, useStore } from '../store/meal'

export function useDietStats() {
  const [meals, setMeals] = useState([] as Meal[])
  const [bestHealthyMealSequence, setBestHealthyMealSequence] = useState(0)
  const { fetchMeals, fetchBestHealthyMealSequence } = useStore()

  useEffect(() => {
    async function loadData() {
      const meals = await fetchMeals()
      setMeals(meals)

      const bestSequence = await fetchBestHealthyMealSequence()
      setBestHealthyMealSequence(bestSequence)
    }

    loadData()
  }, [fetchMeals, fetchBestHealthyMealSequence])

  const { healthyMealCount, unhealthyMealCount } = meals.reduce(
    (acc, meal) => ({
      healthyMealCount: acc.healthyMealCount + (meal.onDiet ? 1 : 0),
      unhealthyMealCount: acc.unhealthyMealCount + (meal.onDiet ? 0 : 1),
    }),
    { healthyMealCount: 0, unhealthyMealCount: 0 },
  )

  const healthyMealPercentage = (healthyMealCount * 100) / meals.length || 0
  const recordedMealCount = meals.length
  const isHealthyDiet = healthyMealPercentage > 50

  return {
    recordedMealCount,
    healthyMealCount,
    unhealthyMealCount,
    healthyMealPercentage,
    bestHealthyMealSequence,
    isHealthyDiet,
  }
}
