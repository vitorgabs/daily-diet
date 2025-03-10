import { useRef, useState } from 'react'
import { Keyboard, type TextInput } from 'react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { format } from 'date-fns'

import { Button } from '../../components/button'
import { Header } from '../../components/header'

import {
  Screen,
  Form,
  Wrapper,
  Label,
  Input,
  HorizontalWrapper,
  DateTimeWrapper,
  DateTimeButton,
  Textarea,
  RadioButton,
  RadioLabel,
  StatusIndicator,
  Footer,
} from './styles'

export function Management() {
  const [onDiet, setOnDiet] = useState<boolean | undefined>(undefined)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const currentDate = new Date()

  const formattedDate = date ? format(date, 'dd/MM/yyyy') : ''
  const formattedTime = date ? format(date, 'HH:mm') : ''

  const descriptionInputRef = useRef<TextInput>(null)

  function openDateTimePicker(mode: 'date' | 'time') {
    Keyboard.dismiss()

    DateTimePickerAndroid.open({
      mode,
      is24Hour: true,
      maximumDate: currentDate,
      value: date ?? currentDate,
      onChange: (event, date) => {
        if (event.type === 'set' && date) {
          setDate(date)
        }
      },
    })
  }

  return (
    <Screen>
      <Header />

      <Form keyboardShouldPersistTaps="handled">
        <Wrapper>
          <Label>Nome</Label>
          <Input
            returnKeyType="next"
            onSubmitEditing={() => descriptionInputRef.current?.focus()}
          />
        </Wrapper>

        <Wrapper>
          <Label>Descrição</Label>
          <Textarea
            ref={descriptionInputRef}
            multiline
            style={{ textAlignVertical: 'top' }}
          />
        </Wrapper>

        <HorizontalWrapper>
          <DateTimeWrapper>
            <Label>Data</Label>
            <DateTimeButton onPress={() => openDateTimePicker('date')}>
              <Input readOnly value={formattedDate} />
            </DateTimeButton>
          </DateTimeWrapper>

          <DateTimeWrapper>
            <Label>Hora</Label>
            <DateTimeButton onPress={() => openDateTimePicker('time')}>
              <Input readOnly value={formattedTime} />
            </DateTimeButton>
          </DateTimeWrapper>
        </HorizontalWrapper>

        <Wrapper>
          <Label>Está dentro da dieta?</Label>

          <HorizontalWrapper style={{ gap: 8, marginBottom: 16 }}>
            <RadioButton
              success
              isChecked={onDiet}
              onPress={() => setOnDiet(true)}
            >
              <StatusIndicator success />
              <RadioLabel>Sim</RadioLabel>
            </RadioButton>

            <RadioButton
              success={false}
              isChecked={onDiet === false}
              onPress={() => setOnDiet(false)}
            >
              <StatusIndicator success={false} />
              <RadioLabel>Não</RadioLabel>
            </RadioButton>
          </HorizontalWrapper>
        </Wrapper>

        <Footer>
          <Button title="Cadastrar refeição" />
        </Footer>
      </Form>
    </Screen>
  )
}
