import { StatsCard } from '../../components/stats-card'
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
  return (
    <Container>
      <Header>
        <HeaderButton>
          <HeaderIcon />
        </HeaderButton>
        <HeaderTitle>90,86%</HeaderTitle>
        <HeaderDescription>das refeições dentro da dieta</HeaderDescription>
      </Header>

      <Content>
        <Title>Estatíscas gerais</Title>

        <StatsCard
          title="22"
          description="melhor sequência de pratos dentro da dieta"
        />
        <StatsCard title="109" description="refeições registradas" />

        <HorizontalWrapper>
          <Wrapper>
            <StatsCard
              title="99"
              description="refeições dentro da dieta"
              status="success"
            />
          </Wrapper>

          <Wrapper>
            <StatsCard
              title="10"
              description="refeições fora da dieta"
              status="failure"
            />
          </Wrapper>
        </HorizontalWrapper>
      </Content>
    </Container>
  )
}
