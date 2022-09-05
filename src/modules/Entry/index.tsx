/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react'
import { Container, Label } from './styles'
import { Button } from '../../components/Button'
import InputMask from 'react-input-mask'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { InputsProps } from './types'
import { Loading } from '../Loading'
import { Error } from '../Error'
import { Resolutions } from '../Resolution'

export const Entry = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [registrated, setRegistrated] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isValid, setIsValid] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<InputsProps>()

  const validatePlate = (plate: string): void => {
    const emptyValue = plate.length === 0
    const hasInvalidPlate = plate.includes('_')
    if (emptyValue || hasInvalidPlate) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }

  const onSubmit = (data: any): void => {
    setLoading(true)
    setErrorMessage('')

    axios({
      method: 'post',
      baseURL: 'https://parking-lot-to-pfz.herokuapp.com',
      url: '/parking',
      data: {
        plate: data?.entry,
      },
    })
      .then((response) => {
        if (response.status === 200 && Boolean(response.data.reservation)) {
          setLoading(false)
          setRegistrated(true)
          setIsValid(false)
        }
      })
      .catch((err) => {
        const errorMessage: string = err?.response?.data?.errors?.plate?.reduce(
          (error: { plate: string }) => error?.plate
        )
        if (errorMessage === 'already parked') {
          setLoading(false)
          setErrorMessage('Entrada já foi realizada')
        }
      })
  }

  useEffect(() => {
    if (registrated) {
      reset({
        entry: '',
      })
      setIsValid(false)
      setTimeout(() => {
        setRegistrated(false)
      }, 1500)
    }
  }, [registrated])

  if (registrated) {
    return <Resolutions type="registry" />
  }

  if (loading) {
    return <Loading type="registry" />
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>Número da placa:</span>
          <Controller
            render={({ field }) => (
              <InputMask
                {...field}
                placeholder="AAA-0000"
                mask={'aaa-9999'}
                alwaysShowMask={false}
                {...register('entry', {
                  required: {
                    value: true,
                    message: 'O campo é obrigatório',
                  },
                  validate: {
                    validateData: (v) =>
                      !v.includes('_') || 'O campo é inválido',
                  },
                  onChange: (e) => validatePlate(e.target.value),
                })}
              />
            )}
            name="entry"
            control={control}
            defaultValue=""
          />
          {errors?.entry?.message !== undefined && (
            <Error errorMessage={errors?.entry?.message} />
          )}
          {Boolean(errorMessage) && <Error errorMessage={errorMessage} />}
        </Label>
        <Button type="primary" isValid={isValid} disabled={!isValid}>
          CONFIRMAR ENTRADA
        </Button>
      </form>
    </Container>
  )
}
