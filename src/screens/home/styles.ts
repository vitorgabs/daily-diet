import { StatusBar, Platform } from 'react-native'
import styled, { css } from 'styled-components/native'
import { ArrowUpRight, Plus } from 'phosphor-react-native'

import { mixins } from '../../styles/mixins'

const statusBarHeight =
  Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0

export const Screen = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  padding: 24px;
  padding-top: ${24 + statusBarHeight}px;
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

type DietInfoCardProps = {
  success: boolean
}

export const DietInfoCard = styled.TouchableOpacity<DietInfoCardProps>`
  background-color: ${({ theme: { colors }, success }) => (success ? colors.green.light : colors.red.light)};
  border-radius: 8px;
  margin-top: 32px;
  padding: 20px 16px;
  align-items: center;
  position: relative;
`

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    ${mixins.fonts.titleLg}
    color: ${theme.colors.gray[700]};
  `}
`

export const CardDescription = styled.Text`
  ${({ theme }) => css`
    ${mixins.fonts.bodySm}
    color: ${theme.colors.gray[600]};
  `}
`

type CardIconProps = { success: boolean }

export const CardIcon = styled(ArrowUpRight).attrs<CardIconProps>(
  ({ theme: { colors }, success }) => ({
    color: success ? colors.green.dark : colors.red.dark,
    size: 24,
  }),
)<CardIconProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const MealsText = styled.Text`
  ${mixins.fonts.bodyMd}
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 40px 0 8px;
`

export const SectionHeader = styled.Text`
  ${mixins.fonts.titleSm}
  color: ${({ theme }) => theme.colors.gray[700]};
`
