import styled from 'styled-components/native'

import { mixins } from '../../styles/mixins'

export const Container = styled.Pressable`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  padding: 14px 16px 14px 12px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const Time = styled.Text`
  ${mixins.fonts.bodyXs}
  color: ${({ theme }) => theme.colors.gray[700]};
`

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
`

export const Description = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  ${mixins.fonts.bodyMd}
  color: ${({ theme }) => theme.colors.gray[600]};
  flex-shrink: 1;
`
type StatusProps = {
  success: boolean
}

export const Status = styled.View<StatusProps>`
  background-color: ${({ theme, success }) => (success ? theme.colors.green.mid : theme.colors.red.mid)};
  border-radius: 999px;
  width: 14px;
  height: 14px;
  margin-left: auto;
`
