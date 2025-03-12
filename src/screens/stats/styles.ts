import { Platform, StatusBar } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import styled from 'styled-components/native'

import { mixins } from '../../styles/mixins'

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

type ContainerProps = { isHealthyDiet: boolean }

export const Container = styled.View<ContainerProps>`
  padding-top: ${statusBarHeight}px;
  background-color: ${({ theme: { colors }, isHealthyDiet }) => (isHealthyDiet ? colors.green.light : colors.red.light)};
  flex: 1;
`

export const Header = styled.View`
  position: relative;
  padding: 28px 0 34px;
  align-items: center;
`

export const HeaderButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 24px;
`

type HeaderIconProps = { isHealthyDiet: boolean }

export const HeaderIcon = styled(ArrowLeft).attrs<HeaderIconProps>(
  ({ theme: { colors }, isHealthyDiet }) => ({
    color: isHealthyDiet ? colors.green.dark : colors.red.dark,
    size: 24,
  }),
)<HeaderIconProps>``

export const HeaderTitle = styled.Text`
  ${mixins.fonts.titleLg}
  color: ${({ theme }) => theme.colors.gray[700]};
`

export const HeaderDescription = styled.Text`
  ${mixins.fonts.bodySm}
  color: ${({ theme }) => theme.colors.gray[600]};
`

export const Content = styled.View`
  background: ${({ theme }) => theme.colors.gray[100]};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 32px 24px;
  flex: 1;
  align-items: center;
  gap: 12px;
`

export const Title = styled.Text`
  ${mixins.fonts.titleXs}
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 12px;
`

export const HorizontalWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const Wrapper = styled.View`
  flex: 1;
`
