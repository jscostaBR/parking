import React from 'react'
import { Container } from './styles'
import IconError from '../../assets/images/error-icon.svg'
import { ErrorProps } from './type'

export const Error = ({ errorMessage }: ErrorProps): JSX.Element => {
  return (
    <Container>
      <img src={IconError} />
      <span>{errorMessage}</span>
    </Container>
  )
}
