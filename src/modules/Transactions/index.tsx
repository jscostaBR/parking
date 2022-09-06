import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { useSetAtom } from 'jotai'
import axios from 'axios'
import { TransactionsProps } from './types'
import { typeData } from './mocks'
import { closeModalbyTransactions } from './state'
import { Loading } from '../Loading'
import { Resolutions } from '../Resolution'
import { Error } from '../Error'

export const Transactions = ({
  type,
  plate,
}: TransactionsProps): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const closeModal = useSetAtom(closeModalbyTransactions)
  const [errorMessage, setErrorMessage] = useState('')
  const [registrated, setRegistrated] = useState(false)

  const handlePayment = (plate: string): void => {
    setLoading(true)
    setErrorMessage('')

    axios({
      method: 'post',
      baseURL: 'https://parking-lot-to-pfz.herokuapp.com/parking',
      url: `${plate}/pay`,
      params: {
        plate,
      },
    })
      .then((response) => {
        console.log(response)
        if (response.data === '' && response.status === 204) {
          setLoading(false)
          setRegistrated(true)
        }
      })
      .catch((err) => {
        const errorMessage: string = err?.response?.data?.errors?.plate?.reduce(
          (error: { plate: string }) => error?.plate
        )
        if (errorMessage === 'not found') {
          setLoading(false)
          setErrorMessage('Verifique se o pagamento já foi realizado')
        }
      })
  }
  const handleGetOut = (plate: string): void => {
    setLoading(true)
    setErrorMessage('')

    axios({
      method: 'post',
      baseURL: 'https://parking-lot-to-pfz.herokuapp.com/parking',
      url: `${plate}/out`,
      params: {
        plate,
      },
    })
      .then((response) => {
        if (response.data === '' && response.status === 204) {
          setLoading(false)
          setRegistrated(true)
        }
      })
      .catch((err) => {
        const errorMessage: string = err?.response?.data?.errors?.plate?.reduce(
          (error: { plate: string }) => error?.plate
        )
        if (errorMessage === 'not found') {
          setLoading(false)
          setErrorMessage('Verifique se a saída já foi realizada')
        }
      })
  }

  const getTransactionByType = ({ type, plate }: TransactionsProps): void => {
    if (type === 'payment') {
      handlePayment(plate)
    }
    if (type === 'getOut') {
      handleGetOut(plate)
    }
  }

  useEffect(() => {
    if (registrated) {
      setTimeout(() => {
        setRegistrated(false)
      }, 1500)
    }
  }, [registrated])

  if (registrated) {
    return <Resolutions type={type} />
  }
  if (loading) {
    return <Loading type="confirmation" />
  }
  return (
    <Container>
      <p className="transaction-question">
        Confirma {typeData[type]} da placa abaixo?
      </p>
      <p className="plate">{plate.toUpperCase()}</p>
      <Button
        isValid
        type="secondary"
        onClick={() => getTransactionByType({ type, plate })}
      >
        Confirmar
      </Button>
      {Boolean(errorMessage) && <Error errorMessage={errorMessage} />}
      <button className="go-back" onClick={() => closeModal(true)}>
        Voltar
      </button>
    </Container>
  )
}
