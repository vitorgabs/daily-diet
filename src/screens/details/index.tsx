import { useEffect, useState } from 'react'
import { Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StaticScreenProps } from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { format } from 'date-fns'

import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { useStore, type Meal as MealType } from '../../store/meal'

import {
  Screen,
  Content,
  Info,
  Wrapper,
  Meal,
  DateAndTime,
  Description,
  Badge,
  Status,
  BadgeText,
  Footer,
  ModalBackground,
  ModalContent,
  ModalTitle,
  ModalFooter,
} from './styles'

type ScreenProps = StaticScreenProps<{ mealId: string }>

export function Details({ route }: ScreenProps) {
  const { mealId } = route.params
  const { navigate } = useNavigation()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [meal, setMeal] = useState<MealType>()
  const { deleteMeal, fetchMeal } = useStore()

  const isHealthy = meal?.isHealthy ?? false

  const formattedDateTime = meal
    ? format(meal?.consumedAt, "dd/MM/yyyy 'às' HH:mm")
    : 'Data indisponível'

  async function handleDeleteMeal() {
    await deleteMeal(mealId)
    setIsModalVisible(false)
    navigate('Home')
  }

  useEffect(() => {
    async function loadMealDetails() {
      const meal = await fetchMeal(mealId)
      setMeal(meal)
    }

    loadMealDetails()
  }, [fetchMeal, mealId])

  return (
    <Screen success={isHealthy}>
      <Header title="Refeição" />

      <Content>
        <Info>
          <Wrapper>
            <Meal>{meal?.name}</Meal>
            {meal?.description && <Description>{meal.description}</Description>}
          </Wrapper>

          <Wrapper>
            <DateAndTime>Data e hora</DateAndTime>
            <Description>{formattedDateTime}</Description>
          </Wrapper>

          <Badge>
            <Status success={isHealthy} />
            <BadgeText>
              {isHealthy ? 'dentro da dieta' : 'fora da dieta'}
            </BadgeText>
          </Badge>
        </Info>

        <Footer>
          <Button
            title="Editar refeição"
            icon={PencilSimpleLine}
            onPress={() => navigate('Management', { mealId })}
          />
          <Button
            title="Excluir refeição"
            icon={Trash}
            variant="outline"
            onPress={() => setIsModalVisible(true)}
          />
        </Footer>
      </Content>

      <Modal
        transparent
        statusBarTranslucent
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <ModalBackground>
          <ModalContent>
            <ModalTitle>
              Deseja realmente exluir o registro da refeição?
            </ModalTitle>

            <ModalFooter>
              <Button
                title="Cancelar"
                variant="outline"
                onPress={() => setIsModalVisible(false)}
              />
              <Button title="Sim, excluir" onPress={handleDeleteMeal} />
            </ModalFooter>
          </ModalContent>
        </ModalBackground>
      </Modal>
    </Screen>
  )
}
