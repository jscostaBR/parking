import React from 'react'
import { Container } from './styles'
import LoadingIcon from '../../assets/images/loading.svg'
import { LoadingProps } from './types'

export const Loading = ({ type }: LoadingProps): JSX.Element => {
  return (
    <Container>
      <img src={LoadingIcon} />
      <span>{type === 'registry' ? 'Registrando...' : 'Confirmando...'}</span>
    </Container>
  )
}
