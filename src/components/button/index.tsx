import type { PressableProps } from 'react-native'
import type { IconProps } from 'phosphor-react-native'
import { useTheme } from 'styled-components'

import { Container, Title } from './styles'

export interface ButtonProps extends PressableProps {
  title: string
  icon?: React.FC<IconProps>
  variant?: 'solid' | 'outline'
}

export function Button({ title, icon: Icon, variant = 'solid' }: ButtonProps) {
  const { colors } = useTheme()

  return (
    <Container
      variant={variant}
      style={({ pressed }) => [
        {
          backgroundColor:
            variant === 'solid'
              ? pressed
                ? colors.gray[700]
                : colors.gray[600]
              : pressed
                ? colors.gray[300]
                : 'transparent',
        },
      ]}
    >
      {Icon && (
        <Icon color={variant === 'solid' ? colors.white : colors.gray[700]} />
      )}
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}
