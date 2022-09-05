import React, { useState } from 'react'
import { Container } from './styles'
import { ModalProps, UseModalProps } from './types'

export const useModal = (): UseModalProps => {
  const [visible, setVisible] = useState(false)

  const handleOpenModal = (): void => {
    setVisible(true)
  }
  const handleCloseModal = (): void => {
    setVisible(false)
  }

  const Modal = ({ children }: ModalProps): JSX.Element => {
    return (
      <Container>
        <div className="modal-content">
          <div className="modal-inner-content">{children}</div>
        </div>
      </Container>
    )
  }

  return {
    Modal: visible ? Modal : null,
    show: handleOpenModal,
    close: handleCloseModal,
  }
}
