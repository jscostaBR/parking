import React, { useEffect, useState } from 'react'
import { Container, Label } from './styles'
import { Button } from '../../components/Button'
import InputMask from 'react-input-mask'
import { useForm, Controller } from 'react-hook-form'
import { useModal } from '../../hooks/Modal'
import { Transactions } from '../Transactions'
import { useAtom, useSetAtom } from 'jotai'
import { InputsProps, TransactionTypeProps } from './types'
import { useNavigate } from 'react-router-dom'
import { plateAtom } from './state'
import { closeModalbyTransactions } from '../Transactions/state'
import { Error } from '../Error'

export const Leave = (): JSX.Element => {
  const [registrated, setRegistrated] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const { Modal, show, close } = useModal()
  const [closeModal, setCloseModal] = useAtom(closeModalbyTransactions)
  const [transaction, setTransaction] =
    useState<TransactionTypeProps>('payment')
  const setPlate = useSetAtom(plateAtom)
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    reset,
    getValues,
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

  useEffect(() => {
    if (registrated) {
      reset({
        leave: '',
      })
      setIsValid(false)
      setTimeout(() => {
        setRegistrated(false)
      }, 1500)
    }
  }, [registrated])

  useEffect(() => {
    if (closeModal) {
      close()
      setCloseModal(false)
    }
  }, [closeModal])

  const getTransactionType = (transaction: TransactionTypeProps): void => {
    setTransaction(transaction)
  }

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <Label>
          <span>Número da placa:</span>
          <Controller
            render={({ field }) => (
              <InputMask
                {...field}
                placeholder="AAA-0000"
                mask={'aaa-9999'}
                alwaysShowMask={false}
                {...register('leave', {
                  required: {
                    value: true,
                    message: 'O campo é obrigatório',
                  },
                  validate: {
                    validateData: (v) =>
                      !v.includes('_') || 'O campo é inválido',
                  },
                  onChange: (e: React.FormEvent<HTMLInputElement>) =>
                    validatePlate(e?.currentTarget?.value),
                })}
              />
            )}
            name="leave"
            control={control}
            defaultValue=""
          />
          {errors?.leave?.message !== undefined && (
            <Error errorMessage={errors?.leave?.message} />
          )}
        </Label>
        <Button
          type="secondary"
          isValid={isValid}
          disabled={!isValid}
          onClick={() => {
            getTransactionType('payment')
            show()
          }}
        >
          Pagamento
        </Button>
        <Button
          type="outlined"
          isValid={isValid}
          disabled={!isValid}
          onClick={() => {
            getTransactionType('getOut')
            show()
          }}
        >
          Saída
        </Button>
        <button
          className="go-to-historic"
          onClick={() => {
            setPlate(getValues('leave'))
            navigate('/historic')
          }}
          disabled={!isValid}
        >
          Ver Histórico
        </button>
      </form>
      {Boolean(Modal) && (
        <Modal>
          <Transactions type={transaction} plate={getValues('leave')} />
        </Modal>
      )}
    </Container>
  )
}
