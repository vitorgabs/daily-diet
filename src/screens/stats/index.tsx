import { useNavigation } from '@react-navigation/native'

import { StatsCard } from '../../components/stats-card'
import { useDietStats } from '../../hooks/use-diet-stats'
import { formatToDecimalPercentage } from '../../utils/formatters'

import {
  Container,
  Content,
  Title,
  Header,
  HeaderButton,
  HeaderIcon,
  HeaderDescription,
  HeaderTitle,
  HorizontalWrapper,
  Wrapper,
} from './styles'

export function Stats() {
  const navigation = useNavigation()
  const {
    healthyMealPercentage,
    recordedMealCount,
    healthyMealCount,
    unhealthyMealCount,
    bestHealthyMealSequence,
    isHealthyDiet,
  } = useDietStats()

  return (
    <Container isHealthyDiet={isHealthyDiet}>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <HeaderIcon isHealthyDiet={isHealthyDiet} />
        </HeaderButton>
        <HeaderTitle>
          {formatToDecimalPercentage(healthyMealPercentage)}
        </HeaderTitle>
        <HeaderDescription>das refeições dentro da dieta</HeaderDescription>
      </Header>

      <Content>
        <Title>Estatíscas gerais</Title>

        <StatsCard
          title={`${bestHealthyMealSequence}`}
          description="melhor sequência de pratos dentro da dieta"
        />
        <StatsCard
          title={`${recordedMealCount}`}
          description="refeições registradas"
        />

        <HorizontalWrapper>
          <Wrapper>
            <StatsCard
              title={`${healthyMealCount}`}
              description="refeições dentro da dieta"
              status="success"
            />
          </Wrapper>

          <Wrapper>
            <StatsCard
              title={`${unhealthyMealCount}`}
              description="refeições fora da dieta"
              status="failure"
            />
          </Wrapper>
        </HorizontalWrapper>
      </Content>
    </Container>
  )
}
