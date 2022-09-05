import React from 'react'
import { Container } from './styles'
import Done from '../../assets/images/done.svg'

interface ResolutionsProps {
  type: 'registry' | 'payment' | 'getOut'
}

const resolutions = {
  registry: 'Registrado!',
  payment: 'Pago!',
  getOut: 'Saída Liberada',
}

export const Resolutions = ({ type }: ResolutionsProps): JSX.Element => {
  return (
    <Container>
      <img src={Done} />
      <span>{resolutions[type]}</span>
    </Container>
  )
}
