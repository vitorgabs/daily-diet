import { ArrowLeft } from 'phosphor-react-native'
import styled from 'styled-components/native'

import { mixins } from '../../styles/mixins'

export const Container = styled.View`
  position: relative;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  ${mixins.fonts.titleSm}
  color: ${({ theme }) => theme.colors.gray[700]};
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.colors.gray[600],
  size: 24,
}))``
