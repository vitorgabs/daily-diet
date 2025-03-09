import { useTheme } from 'styled-components'

import { Meal } from '../../components/meal'

import {
  Container,
  Header,
  DietInfoCard,
  CardTitle,
  CardDescription,
  CardIcon,
  Button,
  ButtonTitle,
  ButtonIcon,
  MealList,
  SectionHeader,
  MealsText,
} from './styles'

import Logo from '../../assets/logo.svg'
import UserProfilePic from '../../assets/user-profile-pic.svg'

export function Home() {
  const { colors } = useTheme()

  const meals = [
    { title: '12.08.22', data: ['x-tudo', 'salada', 'carne de sol', 'fritas'] },
    { title: '12.08.22', data: ['x-tudo', 'salada', 'carne de sol', 'fritas'] },
  ]

  return (
    <Container>
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

      <Button
        style={({ pressed }) => [
          { backgroundColor: pressed ? colors.gray[700] : colors.gray[600] },
        ]}
      >
        <ButtonIcon />
        <ButtonTitle>Nova refeição</ButtonTitle>
      </Button>

      <MealList
        sections={meals}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={() => <Meal />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
      />
    </Container>
  )
}
