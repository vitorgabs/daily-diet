import { PencilSimpleLine, Trash } from 'phosphor-react-native'

import { Header } from '../../components/header'
import { Button } from '../../components/button'

import {
  Screen,
  Content,
  Info,
  Wrapper,
  Meal,
  DateAndTime,
  Description,
  Badge,
  BadgeIcon,
  BadgeText,
  Footer,
} from './styles'

export function Details() {
  return (
    <Screen>
      <Header />

      <Content>
        <Info>
          <Wrapper>
            <Meal>Sanduíche</Meal>
            <Description>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Description>
          </Wrapper>

          <Wrapper>
            <DateAndTime>Data e hora</DateAndTime>
            <Description>12/08/2022 às 16:00</Description>
          </Wrapper>

          <Badge>
            <BadgeIcon />
            <BadgeText>dentro da dieta</BadgeText>
          </Badge>
        </Info>

        <Footer>
          <Button title="Editar refeição" icon={PencilSimpleLine} />
          <Button title="Excluir refeição" icon={Trash} variant="outline" />
        </Footer>
      </Content>
    </Screen>
  )
}
