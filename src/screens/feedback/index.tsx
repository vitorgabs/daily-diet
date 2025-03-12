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

type ScreenProps = StaticScreenProps<{ withinTheDiet: boolean }>

export function Feedback({ route }: ScreenProps) {
  const navigation = useNavigation()
  const { withinTheDiet } = route.params

  const feedbackImage = withinTheDiet ? happyFeedbackImage : sadFeedbackImage
  const title = withinTheDiet ? 'Continue assim!' : 'Que pena!'
  const dietStatusText = withinTheDiet ? 'dentro da dieta.' : 'saiu da dieta'
  const [initial, final] = withinTheDiet
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
        <Title success={withinTheDiet}>{title}</Title>

        <Description>
          {initial} <Highlight>{dietStatusText}</Highlight> {final}
        </Description>
      </Header>

      <FeedbackImage source={feedbackImage} />

      <Button title="Ir para a página inicial" onPress={goToHome} />
    </Screen>
  )
}
