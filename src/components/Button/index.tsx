import React from 'react'
import { Primary, Secondary, SecondaryOutlined } from './styles'
import { ButtonProps } from './types'

export const Button = ({
  children,
  type,
  isValid,
  disabled,
  onClick,
}: ButtonProps): JSX.Element => {
  if (type === 'primary') {
    return (
      <Primary isValid={isValid} disabled={disabled} onClick={onClick}>
        {typeof children === 'string' ? children.toUpperCase() : children}
      </Primary>
    )
  }
  if (type === 'secondary') {
    return (
      <Secondary isValid={isValid} disabled={disabled} onClick={onClick}>
        {typeof children === 'string' ? children.toUpperCase() : children}
      </Secondary>
    )
  }
  if (type === 'outlined') {
    return (
      <SecondaryOutlined
        isValid={isValid}
        disabled={disabled}
        onClick={onClick}
      >
        {typeof children === 'string' ? children.toUpperCase() : children}
      </SecondaryOutlined>
    )
  }
  return <></>
}
