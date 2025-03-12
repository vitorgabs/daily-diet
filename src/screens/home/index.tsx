import { useEffect, useState } from 'react'
import { SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Plus } from 'phosphor-react-native'
import { format } from 'date-fns'

import { Button } from '../../components/button'
import { Meal } from '../../components/meal'
import { type Meal as MealType, useStore } from '../../store/meal'

import { useDietStats } from '../../hooks/use-diet-stats'
import { formatToDecimalPercentage } from '../../utils/formatters'

import Logo from '../../assets/logo.svg'
import UserProfilePic from '../../assets/user-profile-pic.svg'

import {
  Screen,
  Header,
  DietInfoCard,
  CardTitle,
  CardDescription,
  CardIcon,
  SectionHeader,
  MealsText,
} from './styles'

export function Home() {
  const [meals, setMeals] = useState([] as MealType[])
  const { navigate } = useNavigation()
  const { fetchMeals } = useStore()
  const { healthyMealPercentage, isHealthyDiet } = useDietStats()

  const sections = meals.reduce<{ title: string; data: MealType[] }[]>(
    (acc, meal) => {
      const sectionTitle = format(meal.consumedAt, 'dd.MM.yy')

      const existingSection = acc.find(
        (section) => section.title === sectionTitle,
      )

      if (existingSection) {
        existingSection.data.push(meal)
      } else {
        acc.push({ title: sectionTitle, data: [meal] })
      }

      return acc
    },
    [],
  )

  useEffect(() => {
    async function loadMealData() {
      const meals = await fetchMeals()

      const sortedMeals = meals.sort(
        (a, b) => b.consumedAt.getTime() - a.consumedAt.getTime(),
      )

      setMeals(sortedMeals)
    }

    loadMealData()
  }, [fetchMeals])

  return (
    <Screen>
      <Header>
        <Logo />
        <UserProfilePic />
      </Header>

      <DietInfoCard success={isHealthyDiet} onPress={() => navigate('Stats')}>
        <CardTitle>
          {formatToDecimalPercentage(healthyMealPercentage)}
        </CardTitle>
        <CardDescription>das refeições dentro da dieta</CardDescription>
        <CardIcon success={isHealthyDiet} />
      </DietInfoCard>

      <MealsText>Refeições</MealsText>

      <Button
        onPress={() => navigate('Management', { meal: undefined })}
        title="Nova refeição"
        icon={Plus}
      />

      <SectionList
        sections={sections}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Meal {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
        contentContainerStyle={{ gap: 8 }}
        style={{ marginTop: 32 }}
      />
    </Screen>
  )
}
