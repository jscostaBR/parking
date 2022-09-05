import { ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
}
export interface UseModalProps {
  Modal: any
  show: () => void
  close: () => void
}
