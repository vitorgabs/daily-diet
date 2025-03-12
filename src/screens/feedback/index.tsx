import {
  CommonActions,
  useNavigation,
  type StaticScreenProps,
} from '@react-navigation/native'

import { Button } from '../../components/button'

import happyFeedbackImage from '../../assets/images/keep-it-up.png'
import sadFeedbackImage from '../../assets/images/what-a-shame.png'

import {
  Screen,
  Header,
  Title,
  Description,
  Highlight,
  FeedbackImage,
} from './styles'

type ScreenProps = StaticScreenProps<{ onDiet: boolean }>

export function Feedback({ route }: ScreenProps) {
  const navigation = useNavigation()
  const { onDiet } = route.params

  const feedbackImage = onDiet ? happyFeedbackImage : sadFeedbackImage
  const title = onDiet ? 'Continue assim!' : 'Que pena!'
  const dietStatusText = onDiet ? 'dentro da dieta.' : 'saiu da dieta'
  const [initial, final] = onDiet
    ? ['Você continua', 'Muito bem!']
    : ['Você', 'dessa vez, mas continue se esforçando e não desista!']

  function goToHome() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }),
    )
  }

  return (
    <Screen>
      <Header>
        <Title onDiet={onDiet}>{title}</Title>

        <Description>
          {initial} <Highlight>{dietStatusText}</Highlight> {final}
        </Description>
      </Header>

      <FeedbackImage source={feedbackImage} />

      <Button title="Ir para a página inicial" onPress={goToHome} />
    </Screen>
  )
}
