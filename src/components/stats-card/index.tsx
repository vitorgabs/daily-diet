import { Container, Description, Title } from './styles'

interface StatsCardProps {
  title: string
  description: string
  status?: 'success' | 'failure' | 'neutral'
}

export function StatsCard({
  title,
  description,
  status = 'neutral',
}: StatsCardProps) {
  return (
    <Container status={status}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
