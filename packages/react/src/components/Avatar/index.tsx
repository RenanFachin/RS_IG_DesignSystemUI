import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

export type AvatarProps = ComponentProps<typeof AvatarImage> & {
  size: 'sm' | 'md' | 'lg'
}

export function Avatar({ size = 'md', ...props }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
