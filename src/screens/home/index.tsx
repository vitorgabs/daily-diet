import { Plus } from 'phosphor-react-native'

import { Button } from '../../components/button'
import { Meal } from '../../components/meal'

import Logo from '../../assets/logo.svg'
import UserProfilePic from '../../assets/user-profile-pic.svg'

import {
  Screen,
  Header,
  DietInfoCard,
  CardTitle,
  CardDescription,
  CardIcon,
  MealList,
  SectionHeader,
  MealsText,
} from './styles'

export function Home() {
  const meals = [
    { title: '12.08.22', data: ['x-tudo', 'salada', 'carne de sol', 'fritas'] },
    { title: '12.08.22', data: ['x-tudo', 'salada', 'carne de sol', 'fritas'] },
  ]

  return (
    <Screen>
      <Header>
        <Logo />
        <UserProfilePic />
      </Header>

      <DietInfoCard>
        <CardTitle>90,86%</CardTitle>
        <CardDescription>das refeições dentro da dieta</CardDescription>
        <CardIcon />
      </DietInfoCard>

      <MealsText>Refeições</MealsText>

      <Button title="Nova refeição" icon={Plus} />

      <MealList
        sections={meals}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={() => <Meal />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
      />
    </Screen>
  )
}
