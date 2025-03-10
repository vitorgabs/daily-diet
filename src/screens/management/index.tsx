import { useRef } from 'react'
import { Keyboard, type TextInput } from 'react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { useForm, Controller } from 'react-hook-form'
import { format } from 'date-fns'

import { Button } from '../../components/button'
import { Header } from '../../components/header'

import {
  Screen,
  Form,
  Wrapper,
  Label,
  Input,
  ErrorMessage,
  HorizontalWrapper,
  DateTimeWrapper,
  DateTimeButton,
  Textarea,
  RadioButton,
  RadioLabel,
  StatusIndicator,
  Footer,
} from './styles'

interface FormData {
  name: string
  description: string
  onDiet: boolean | undefined
  consumedAt: Date | undefined
}

export function Management() {
  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      description: '',
      onDiet: undefined,
      consumedAt: undefined,
    },
  })

  const consumedAt = watch('consumedAt')

  const currentDate = new Date()

  const formattedDate = consumedAt ? format(consumedAt, 'dd/MM/yyyy') : ''
  const formattedTime = consumedAt ? format(consumedAt, 'HH:mm') : ''

  const descriptionInputRef = useRef<TextInput>(null)

  function openDateTimePicker(mode: 'date' | 'time') {
    Keyboard.dismiss()

    DateTimePickerAndroid.open({
      mode,
      is24Hour: true,
      maximumDate: currentDate,
      value: consumedAt ?? currentDate,
      onChange: (event, date) => {
        if (event.type === 'set' && date) {
          setValue('consumedAt', date, { shouldValidate: true })
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
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Campo obrigatório' }}
            render={({ field: { value, onChange } }) => (
              <Input
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
                onSubmitEditing={() => descriptionInputRef.current?.focus()}
              />
            )}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Wrapper>

        <Wrapper>
          <Label>Descrição</Label>
          <Controller
            name="description"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Textarea
                multiline
                ref={descriptionInputRef}
                value={value}
                onChangeText={onChange}
                style={{ textAlignVertical: 'top' }}
              />
            )}
          />
        </Wrapper>

        <Controller
          name="consumedAt"
          control={control}
          rules={{ required: 'Campo obrigatório' }}
          render={({ field: { value } }) => (
            <HorizontalWrapper>
              <DateTimeWrapper>
                <Label>Data</Label>
                <DateTimeButton onPress={() => openDateTimePicker('date')}>
                  <Input readOnly value={formattedDate} />
                </DateTimeButton>
                {errors.consumedAt && (
                  <ErrorMessage>{errors.consumedAt.message}</ErrorMessage>
                )}
              </DateTimeWrapper>

              <DateTimeWrapper>
                <Label>Hora</Label>
                <DateTimeButton onPress={() => openDateTimePicker('time')}>
                  <Input readOnly value={formattedTime} />
                </DateTimeButton>
                {errors.consumedAt && (
                  <ErrorMessage>{errors.consumedAt.message}</ErrorMessage>
                )}
              </DateTimeWrapper>
            </HorizontalWrapper>
          )}
        />

        <Wrapper>
          <Label>Está dentro da dieta?</Label>

          <Controller
            name="onDiet"
            control={control}
            rules={{
              validate: (value) =>
                value !== undefined || 'Selecione uma das opções',
            }}
            render={({ field: { value, onChange } }) => (
              <>
                <HorizontalWrapper style={{ gap: 8 }}>
                  <RadioButton
                    success
                    isChecked={value === true}
                    onPress={() => onChange(true)}
                  >
                    <StatusIndicator success />
                    <RadioLabel>Sim</RadioLabel>
                  </RadioButton>

                  <RadioButton
                    success={false}
                    isChecked={value === false}
                    onPress={() => onChange(false)}
                  >
                    <StatusIndicator success={false} />
                    <RadioLabel>Não</RadioLabel>
                  </RadioButton>
                </HorizontalWrapper>

                {errors.onDiet && (
                  <ErrorMessage>{errors.onDiet.message}</ErrorMessage>
                )}
              </>
            )}
          />
        </Wrapper>

        <Footer>
          <Button
            title="Cadastrar refeição"
            onPress={handleSubmit((data) => console.log(data))}
          />
        </Footer>
      </Form>
    </Screen>
  )
}
