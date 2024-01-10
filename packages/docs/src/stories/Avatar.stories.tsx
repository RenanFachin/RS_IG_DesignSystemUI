import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

// Configuração global
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/RenanFachin.png',
    alt: 'Renan Fachin',
  },
} as Meta<AvatarProps>

// Variações
export const Primary: StoryObj<AvatarProps> = {}

export const Secondary: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: undefined,
  },
}
