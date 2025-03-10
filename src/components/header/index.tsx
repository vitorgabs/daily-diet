import { ArrowLeftIcon, BackButton, Container, Title } from './styles'

export function Header() {
  return (
    <Container>
      <BackButton>
        <ArrowLeftIcon />
      </BackButton>

      <Title>Refeição</Title>
    </Container>
  )
}
