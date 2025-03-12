import { useNavigation } from '@react-navigation/native'
import type { StaticScreenProps } from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { format } from 'date-fns'

import { Header } from '../../components/header'
import { Button } from '../../components/button'
import type { Meal as MealType } from '../../store/meal'

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
} from './styles'

type ScreenProps = StaticScreenProps<{ meal: MealType }>

export function Details({ route }: ScreenProps) {
  const meal = route.params.meal
  const { name, description, consumedAt, onDiet } = meal
  const { navigate } = useNavigation()

  const formattedDateTime = format(consumedAt, "dd/MM/yyyy 'às' HH:mm")

  return (
    <Screen success={onDiet}>
      <Header title="Refeição" />

      <Content>
        <Info>
          <Wrapper>
            <Meal>{name}</Meal>
            {description && <Description>{description}</Description>}
          </Wrapper>

          <Wrapper>
            <DateAndTime>Data e hora</DateAndTime>
            <Description>{formattedDateTime}</Description>
          </Wrapper>

          <Badge>
            <Status success={onDiet} />
            <BadgeText>
              {onDiet ? 'dentro da dieta' : 'fora da dieta'}
            </BadgeText>
          </Badge>
        </Info>

        <Footer>
          <Button
            title="Editar refeição"
            icon={PencilSimpleLine}
            onPress={() => navigate('Management', { meal })}
          />
          <Button title="Excluir refeição" icon={Trash} variant="outline" />
        </Footer>
      </Content>
    </Screen>
  )
}
