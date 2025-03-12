import { Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'

import { mixins } from '../../styles/mixins'

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

type ScreenProps = { success: boolean }

export const Screen = styled.View<ScreenProps>`
  background-color: ${({ theme: { colors }, success }) => (success ? colors.green.light : colors.red.light)};
  padding-top: ${statusBarHeight}px;
  flex: 1;
`

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px 24px;
  flex: 1;
`

export const Info = styled.View`
  gap: 24px;
`

export const Wrapper = styled.View`
  gap: 8px;
`

export const Meal = styled.Text`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-family: 'NunitoSans_700Bold';
  font-size: 20px;
`

export const DateAndTime = styled.Text`
  ${mixins.fonts.titleXs}
  color: ${({ theme }) => theme.colors.gray[700]};
`

export const Description = styled.Text`
  ${mixins.fonts.bodyMd}
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const Badge = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 999px;
  padding: 8px 16px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
export const BadgeText = styled.Text`
  ${mixins.fonts.bodySm}
  color: ${({ theme }) => theme.colors.gray[700]};
`

type StatusProps = {
  success: boolean
}
export const Status = styled.View<StatusProps>`
  height: 8px;
  width: 8px;
  border-radius: 999px;
  background-color: ${({ theme: { colors }, success }) => (success ? colors.green.dark : colors.red.dark)};
`
export const Footer = styled.View`
  margin-top: auto;
  gap: 8px;
`
