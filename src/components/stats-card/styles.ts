import styled from 'styled-components/native'

import { mixins } from '../../styles/mixins'

interface ContainerProps {
  status: 'success' | 'failure' | 'neutral'
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, status }) =>
    status === 'success'
      ? theme.colors.green.light
      : status === 'failure'
        ? theme.colors.red.light
        : theme.colors.gray[200]};
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  align-items: center;
  gap: 8px;
`

export const Title = styled.Text`
  ${mixins.fonts.titleMd}
  color: ${({ theme }) => theme.colors.gray[700]};
`

export const Description = styled.Text`
  ${mixins.fonts.bodySm}
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[600]};
`
