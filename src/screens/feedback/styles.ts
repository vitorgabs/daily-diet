import styled from 'styled-components/native'

import { mixins } from '../../styles/mixins'

export const Screen = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  padding: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  align-items: center;
  gap: 8px;
`

interface TitleProps {
  onDiet: boolean
}

export const Title = styled.Text<TitleProps>`
  ${mixins.fonts.titleMd}
  color: ${({ theme, onDiet }) => (onDiet ? theme.colors.green.dark : theme.colors.red.dark)};
`

export const Description = styled.Text`
  ${mixins.fonts.bodyMd}
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
`

export const Highlight = styled.Text`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-family: 'NunitoSans_700Bold';
  font-size: 16px;
`

export const FeedbackImage = styled.Image`
  margin: 40px 0 32px;
`
