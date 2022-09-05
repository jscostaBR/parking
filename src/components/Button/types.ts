import { ReactNode } from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  type: 'primary' | 'secondary' | 'outlined'
  isValid: boolean
  disabled?: boolean
}
