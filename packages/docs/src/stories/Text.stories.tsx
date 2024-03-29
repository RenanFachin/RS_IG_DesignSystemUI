import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

// Configuração global
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example text',
    size: 'md',
  },
  argTypes: {
    // definindo as opções
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

// Variações
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    childen: 'Strong Text',
    as: 'strong',
  },
}
