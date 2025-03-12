import { useNavigation } from '@react-navigation/native'

import { ArrowLeftIcon, BackButton, Container, Title } from './styles'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation()

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  )
}
