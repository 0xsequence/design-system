import { cva, type VariantProps } from 'class-variance-authority'
import { memo, useId } from 'react'

import { cn } from '../../utils/classnames.js'

const MOD = 1000
const SIZE = 64
const RADIUS = SIZE / 2

const prefix = 'gradient-avatar-'

const avatarVariants = cva(['shrink-0 rounded-full overflow-hidden'], {
  variants: {
    size: {
      xs: 'size-3',
      sm: 'size-5',
      md: 'size-8',
      lg: 'size-10',
      xl: 'size-13',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface GradientAvatarProps extends VariantProps<typeof avatarVariants> {
  address: string
  className?: string
}

interface HashState {
  a: number // color stop a
  b: number // color stop b
  c: number // color stop c
  x: number // x position
  y: number // y position
  r: number // radius
}

interface Gradient {
  id: string
  stopColor0: string
  stopColor1: string
  cx: number
  cy: number
  r: number
}

interface Gradients {
  background: Gradient
  primary: Gradient
  secondary: Gradient
}

// const clamp = (value: number, min: number, max: number) =>
//   Math.min(Math.max(value, min), max)

// const clampGradientPosition = (value: number, offset: number = 0) =>
//   clamp(value, 0 + offset, SIZE - offset)

const scaledMod = (value: number, mod: number = MOD) => {
  return (value % mod) / (MOD / SIZE)
}

const cyrb53 = (str: string, seed: number = 0): number => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed

  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }

  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909)

  return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}

const createId = (name: string, id: string) => `${prefix}${name}${id}`

const createHues = (a: number, b: number, c: number) => {
  const hueA = a % 360
  const hueB = (a + 120) % 360
  const hueC = c % 360

  return {
    hueA,
    hueB,
    hueC,
  }
}

const createGradients = (id: string, address: string): Gradients => {
  const hash: HashState = {
    a: cyrb53(address + 'a', 0),
    b: cyrb53(address + 'b', 1),
    c: cyrb53(address + 'c', 2),
    x: cyrb53(address + 'd', 3),
    y: cyrb53(address + 'e', 4),
    r: cyrb53(address + 'f', 5),
  }

  const { hueA, hueB, hueC } = createHues(hash.a, hash.b, hash.c)

  const cx = scaledMod(hash.x)
  const cy = scaledMod(hash.y)
  const r = SIZE / 10 + scaledMod(hash.r, MOD * 1.5)

  return {
    background: {
      id: createId('background', id),
      stopColor0: `hsl(${hueC}deg 100% 50% / 1)`,
      stopColor1: `hsl(${hueA}deg 100% 50% / 1)`,
      cx,
      cy,
      r,
    },

    primary: {
      id: createId('primary', id),
      stopColor0: `hsl(${hueA}deg 100% 50% / 1)`,
      stopColor1: `hsl(${hueB}deg 100% 50% / 1)`,
      cx,
      cy,
      r,
    },

    secondary: {
      id: createId('secondary', id),
      stopColor0: `hsl(${hueC}deg 100% 50% / 1)`,
      stopColor1: `hsl(${hueB}deg 100% 50% / 1)`,
      cx: cy,
      cy: cx,
      r: r / 2,
    },
  }
}

export const GradientAvatar = memo((props: GradientAvatarProps) => {
  const { className, address, size = 'md', ...rest } = props
  const id = useId()
  const gradients = createGradients(id, address.toLowerCase())

  const getId = (name: string) => createId(name, id)

  return (
    <svg
      className={cn(avatarVariants({ size }), className)}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <clipPath id={getId('circle-clip')}>
          <circle cx={RADIUS} cy={RADIUS} r={RADIUS} />
        </clipPath>

        <filter
          id={getId('blur-xs')}
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation={SIZE / 10}
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>

        <linearGradient
          id={gradients.background.id}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor={gradients.background.stopColor0} />
          <stop offset="1" stopColor={gradients.background.stopColor1} />
        </linearGradient>

        <radialGradient id={gradients.primary.id}>
          <stop offset="0" stopColor={gradients.primary.stopColor0} />
          <stop offset="1" stopColor={gradients.primary.stopColor1} />
        </radialGradient>

        <radialGradient id={gradients.secondary.id}>
          <stop offset="0" stopColor={gradients.secondary.stopColor0} />
          <stop offset="1" stopColor={gradients.secondary.stopColor1} />
        </radialGradient>
      </defs>

      <g clipPath={`url(#${getId('circle-clip')})`}>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${gradients.background.id})`}
        />

        <g filter={`url(#${getId('blur-xs')})`}>
          <circle
            fill={`url(#${gradients.primary.id})`}
            cx={gradients.primary.cx}
            cy={gradients.primary.cy}
            r={gradients.primary.r}
          />
          <circle
            fill={`url(#${gradients.secondary.id})`}
            cx={gradients.secondary.cx}
            cy={gradients.secondary.cy}
            r={gradients.secondary.r}
          />
        </g>
      </g>
    </svg>
  )
})
