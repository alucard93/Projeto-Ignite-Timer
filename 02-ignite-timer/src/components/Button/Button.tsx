import React from 'react'

import { ButtonProps } from '../../interfaces/interface'
import { ButtonContainer } from './Button.styles'


export const Button = ({variant= 'primary'}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant}>Enviar</ButtonContainer>
  )
}
