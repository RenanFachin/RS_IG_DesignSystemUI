import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

// Configuração global
export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

// Variações
export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    childen: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas é possível alterar com a propriedade as',
      },
    },
  },
}
