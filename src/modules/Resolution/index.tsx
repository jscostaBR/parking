import React from 'react'
import { Container } from './styles'
import Done from '../../assets/images/done.svg'
import { resolutions } from './mocks'
import { ResolutionsProps } from './types'

export const Resolutions = ({ type }: ResolutionsProps): JSX.Element => {
  return (
    <Container>
      <img src={Done} />
      <span>{resolutions[type]}</span>
    </Container>
  )
}
