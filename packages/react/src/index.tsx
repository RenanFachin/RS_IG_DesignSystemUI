import { ComponentProps } from 'react'

import { styled } from './styles'

export type ButtonProps = {
  size: 'small' | 'large'
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    // size vai ser a propriedade
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      large: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    // Definindo um size padrão
    size: 'small',
  },
})
