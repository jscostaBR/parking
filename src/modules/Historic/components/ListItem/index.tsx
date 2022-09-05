import React from 'react'
import { Container } from './styles'
import { ListItemProps } from './types'

export const ListItem = ({
  time,
  payment,
  onClick,
}: ListItemProps): JSX.Element => {
  return (
    <Container onClick={onClick}>
      <section>
        <p>Tempo {payment ? 'total' : 'atual'}</p>
        <strong>{time}</strong>
      </section>
      <section>
        <p>Pagamento</p>
        <strong>{payment ? 'Pago' : '—'}</strong>
      </section>
    </Container>
  )
}
