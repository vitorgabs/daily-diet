import { Platform, StatusBar } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import styled from 'styled-components/native'

import { mixins } from '../../styles/mixins'

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

export const Container = styled.View`
  padding-top: ${statusBarHeight};
  background-color: ${({ theme }) => theme.colors.green.light};
  flex: 1;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.green.light};
  position: relative;
  padding: 28px 0 34px;
  align-items: center;
`

export const HeaderButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 24px;
`

export const HeaderIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.colors.green.dark,
  size: 24,
}))`
`

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
