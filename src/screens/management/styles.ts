import { Platform, StatusBar } from 'react-native'
import styled, { css } from 'styled-components/native'

import { mixins } from '../../styles/mixins'

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

export const Screen = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  padding-top: ${statusBarHeight}px;
  flex: 1;
`

export const Form = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexGrow: 1,
    gap: 24,
  },
}))`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Label = styled.Text`
  ${mixins.fonts.titleXs}
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const Input = styled.TextInput`
  ${mixins.fonts.bodyMd}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[700]};
  border: ${({ theme }) => theme.colors.gray[300]} solid 1px;
  border-radius: 6px;
  height: 48px;
  padding: 0 14px;
`

export const Wrapper = styled.View`
  gap: 4px;
`

export const HorizontalWrapper = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const DateTimeWrapper = styled(Wrapper)`
  flex: 1;
`

export const DateTimeButton = styled.TouchableOpacity``

export const Textarea = styled(Input)`
  height: 120px;
  padding: 14px;
`

type RadioButtonProps = {
  isChecked?: boolean
  success: boolean
}

export const RadioButton = styled.TouchableOpacity<RadioButtonProps>`
  ${({ theme: { colors }, isChecked, success }) => css` 
    background-color: ${isChecked ? (success ? colors.green.light : colors.red.light) : colors.gray[200]};
    border: ${isChecked ? (success ? colors.green.dark : colors.red.dark) : colors.gray[200]};
    height: 50px;
    border-radius: 6px;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `}
`

export const RadioLabel = styled.Text`
  ${mixins.fonts.titleXs}
  color: ${({ theme }) => theme.colors.gray[700]};
`

type StatusIndicatorProps = { success: boolean }

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  background-color: ${({ theme: { colors }, success }) => (success ? colors.green.dark : colors.red.dark)};
  border-radius: 999px;
  height: 8px;
  width: 8px;
`

export const Footer = styled.View`
  margin-top: auto;
`
