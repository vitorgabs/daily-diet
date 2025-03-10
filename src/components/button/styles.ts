import styled from 'styled-components/native'

import type { ButtonProps } from '.'
import { mixins } from '../../styles/mixins'

type ContainerProps = Pick<ButtonProps, 'variant'>

export const Container = styled.Pressable<ContainerProps>`
  border: ${({ theme, variant }) => (variant === 'solid' ? 0 : theme.colors.gray[700])} solid 1px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

type TitleProps = Pick<ButtonProps, 'variant'>

export const Title = styled.Text<TitleProps>`
  ${mixins.fonts.titleXs}
  color: ${({ theme, variant }) => (variant === 'solid' ? theme.colors.white : theme.colors.gray[700])};
  padding-block: 16px;
`
