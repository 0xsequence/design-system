import classNames from 'classnames'
import { memo } from 'react'

import { tokenImages } from '~/assets/images/coins'
import { CSS, styled, typography } from '~/style'

type TokenIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface TokenIconProps {
  className?: string
  style?: any
  css?: CSS
  src?: string
  symbol?: string
  size?: TokenIconSize
}

export const TokenIcon = memo((props: TokenIconProps) => {
  const { className, style, css, symbol, size = 'md' } = props

  const src = props.src || tokenImages[symbol!]

  return (
    <TokenIconContainer className={classNames(className, size)} style={style} css={css}>
      {src ? (
        <TokenIconImage src={src} />
      ) : (
        <TokenIconFallback className={size}>{symbol?.replace(/\s/, '').slice(0, 4)}</TokenIconFallback>
      )}
    </TokenIconContainer>
  )
})

const TokenIconContainer = styled('div', {
  borderRadius: '$circle',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$scale7',

  '&.xs': {
    width: '16px',
    height: '16px',

    '& > img': {
      maxWidth: '16px',
      maxHeight: '16px'
    }
  },

  '&.sm': {
    width: '24px',
    height: '24px',

    '& > img': {
      maxWidth: '24px',
      maxHeight: '24px'
    }
  },

  '&.md': {
    width: '32px',
    height: '32px',

    '& > img': {
      maxWidth: '32px',
      maxHeight: '32px'
    }
  },

  '&.lg': {
    width: '64px',
    height: '64px',

    '& > img': {
      maxWidth: '64px',
      maxHeight: '64px'
    }
  },

  '&.xl': {
    width: '128px',
    height: '128px',

    '& > img': {
      maxWidth: '128px',
      maxHeight: '128px'
    }
  }
})

const TokenIconImage = styled('img', {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  width: '100%'
})

const TokenIconFallback = styled('div', typography.b4, {
  background: '$scale7',
  color: '$scale9',
  fontWeight: 'bold',
  borderRadius: '$circle',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&.xs': {
    fontSize: '4px'
  },

  '&.sm': {
    fontSize: '8px'
  },

  '&.md': {
    fontSize: '10px'
  },

  '&.lg': {
    fontSize: '16px'
  },

  '&.xl': {
    fontSize: '32px'
  }
})
