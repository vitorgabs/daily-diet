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

export const DietInfoCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green.light};
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
export const CardIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.green.dark,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const MealsText = styled.Text`
  ${mixins.fonts.bodyMd}
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 40px 0 8px;
`

export const MealList = styled.SectionList.attrs(() => ({
  contentContainerStyle: { gap: 8 },
}))`
  margin-top: 32px;
`

export const SectionHeader = styled.Text`
  ${mixins.fonts.titleSm}
  color: ${({ theme }) => theme.colors.gray[700]};
`
