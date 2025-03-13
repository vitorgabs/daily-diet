import { useEffect, useRef, useState } from 'react'
import { Keyboard, type TextInput } from 'react-native'
import { useNavigation, type StaticScreenProps } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import DateTimePicker from '@react-native-community/datetimepicker'
import { format } from 'date-fns'

import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { type Meal, useStore } from '../../store/meal'

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
  isHealthy: boolean
  consumedAt: Date
}

type ScreenProps = StaticScreenProps<{ mealId?: string }>

export function Management({ route }: ScreenProps) {
  const [meal, setMeal] = useState<Meal>()
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>()
  const [showPicker, setShowPicker] = useState(false)
  const { mealId } = route.params
  const { navigate } = useNavigation()
  const { storeMeal, updateMeal, fetchMeal } = useStore()
  const {
    control,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: meal?.name ?? '',
      description: meal?.description ?? '',
      isHealthy: meal?.isHealthy,
      consumedAt: meal?.consumedAt,
    },
  })

  const consumedAt = watch('consumedAt')

  const currentDate = new Date()

  const formattedDate = consumedAt ? format(consumedAt, 'dd/MM/yyyy') : ''
  const formattedTime = consumedAt ? format(consumedAt, 'HH:mm') : ''

  const descriptionInputRef = useRef<TextInput>(null)

  function openDateTimePicker(mode: 'date' | 'time') {
    if (Keyboard.isVisible()) Keyboard.dismiss()

    setPickerMode(mode)
    setShowPicker(true)
  }

  async function handleSubmitForm(data: FormData) {
    if (meal) {
      await updateMeal({
        id: meal.id,
        ...data,
      })
    } else {
      await storeMeal({
        id: Date.now().toString(),
        ...data,
      })
    }

    navigate('Feedback', { withinTheDiet: data.isHealthy })
  }

  useEffect(() => {
    async function loadMealData() {
      if (!mealId) return

      const meal = await fetchMeal(mealId)
      setMeal(meal)

      reset({
        name: meal?.name,
        description: meal?.description,
        isHealthy: meal?.isHealthy,
        consumedAt: meal?.consumedAt,
      })
    }

    loadMealData()
  }, [mealId, fetchMeal, reset])

  return (
    <Screen>
      <Header title={meal ? 'Editar refeição' : 'Nova refeição'} />

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
          render={() => (
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
            name="isHealthy"
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

                {errors.isHealthy && (
                  <ErrorMessage>{errors.isHealthy.message}</ErrorMessage>
                )}
              </>
            )}
          />
        </Wrapper>

        <Footer>
          <Button
            title={meal ? 'Salvar alterações' : 'Cadastrar refeição'}
            onPress={handleSubmit(handleSubmitForm)}
          />
        </Footer>
      </Form>

      {showPicker && (
        <DateTimePicker
          is24Hour
          mode={pickerMode}
          maximumDate={currentDate}
          value={consumedAt ?? currentDate}
          onChange={(event, date) => {
            if (event.type === 'set' && date) {
              setValue('consumedAt', date, { shouldValidate: true })
            }
            setShowPicker(false)
          }}
        />
      )}
    </Screen>
  )
}
