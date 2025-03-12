import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { format } from 'date-fns'

import type { Meal as MealType } from '../../store/meal'

import { Container, Time, Separator, Description, Status } from './styles'

type MealProps = MealType

export function Meal(props: MealProps) {
  const { name, onDiet, consumedAt } = props
  const { navigate } = useNavigation()
  const { colors } = useTheme()

  const formattedTime = format(consumedAt, 'HH:mm')

  return (
    <Container
      onPress={() => navigate('Details', { meal: props })}
      style={({ pressed }) => [
        { backgroundColor: pressed ? colors.gray[200] : 'transparent' },
      ]}
    >
      <Time>{formattedTime}</Time>
      <Separator />
      <Description>{name}</Description>
      <Status success={onDiet} />
    </Container>
  )
}
