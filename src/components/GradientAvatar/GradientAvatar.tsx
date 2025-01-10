import { cva, VariantProps } from 'class-variance-authority'
import { Fragment, memo, useId } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { cn } from '~/utils'

const MOD = 1000
const SIZE = 64
const RADIUS = SIZE / 2

const prefix = 'gradient-avatar-'

const avatarVariants = cva(['flex-shrink-0 rounded-full overflow-hidden'], {
  variants: {
    size: {
      xs: 'w-3 h-3',
      sm: 'w-5 h-5',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
      xl: 'w-[52px] h-[52px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type GradientAvatarProps = {
  address: string
  initials?: string
  complexity?: number
} & VariantProps<typeof avatarVariants> &
  BoxProps

interface HashState {
  a: number
  b: number
  c: number
  x: number
  y: number
  r: number
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

const createGradient = (a: number, b: number, c: number) => {
  const hueA = a % 360
  const hueB = (a + 120) % 360
  const hueC = c % 360

  return {
    a: `hsl(${hueA}deg 100% 40%)`,
    b: `hsl(${hueB}deg 100% 50%)`,
    c: `hsl(${hueC}deg 100% 50%)`,
  }
}

const createGradients = (address: string, complexity: number) => {
  const hashes: HashState[] = []
  for (let i = 0; i < complexity; i++) {
    const offset = i * 6

    hashes.push({
      a: cyrb53(address + 'a', offset),
      b: cyrb53(address + 'b', offset + 1),
      c: cyrb53(address + 'c', offset + 2),
      x: cyrb53(address + 'd', offset + 3),
      y: cyrb53(address + 'e', offset + 4),
      r: cyrb53(address + 'f', offset + 5),
    })
  }

  return hashes.map((hash, idx) => {
    const r = SIZE / 10 + scaledMod(hash.r, (MOD * 1.5) / (idx + 1))

    return {
      ...createGradient(hash.a, hash.b, hash.c),
      x: scaledMod(hash.x), //clampGradientPosition(hash.x % SIZE, -r / 3),
      y: scaledMod(hash.y), //clampGradientPosition(hash.y % SIZE, -r / 3),
      r,
    }
  })
}

export const GradientAvatar = memo((props: GradientAvatarProps) => {
  const { className, address, size = 'md', complexity = 1, ...rest } = props
  const gradients = createGradients(address, complexity)

  const id = useId()

  return (
    <Box
      as="svg"
      className={cn(avatarVariants({ size }), className)}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <clipPath id={`${prefix}circle-clip${id}`}>
          <circle cx={RADIUS} cy={RADIUS} r={RADIUS} />
        </clipPath>

        <filter
          id={`${prefix}blur${id}`}
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
          id={`${prefix}background${id}`}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor={gradients[0].c} />
          <stop offset="1" stopColor={gradients[0].a} />
        </linearGradient>

        {gradients.map((gradient, idx) => (
          <Fragment key={idx}>
            <radialGradient id={`${prefix}primary${id}${idx}`}>
              <stop offset="0" stopColor={gradient.a} />
              <stop offset="1" stopColor={gradient.b} />
            </radialGradient>

            <radialGradient id={`${prefix}secondary${id}${idx}`}>
              <stop offset="0" stopColor={gradient.c} />
              <stop offset="1" stopColor={gradient.b} />
            </radialGradient>
          </Fragment>
        ))}
      </defs>

      <g clipPath={`url(#${prefix}circle-clip${id})`}>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${prefix}background${id})`}
        />

        <g filter={`url(#${prefix}blur${id})`}>
          {gradients.map((gradient, idx) => (
            <Fragment key={idx}>
              <circle
                fill={`url(#${prefix}primary${id}${idx})`}
                cx={gradient.x}
                cy={gradient.y}
                r={gradient.r}
              />
              <circle
                fill={`url(#${prefix}secondary${id}${idx})`}
                cx={gradient.y}
                cy={gradient.x}
                r={gradient.r / 2}
              />
            </Fragment>
          ))}
        </g>

        {/* {initials && (
          <text
            x="50%"
            y="50%"
            alignmentBaseline="central"
            dominantBaseline="central"
            textAnchor="middle"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize={(size * 0.9) / text.length}
          >
            {initials}
          </text>
        )} */}
      </g>
    </Box>
  )
})
