import { clsx } from 'clsx'
import { Fragment, memo } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type GradientAvatarProps = {
  address: string
  initials?: string
  complexity?: number
} & styles.AvatarVariants &
  BoxProps

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

const generateGradient = (a: number, b: number, c: number) => {
  const randID = Math.random().toString(36).slice(2, 12)

  const hueA = a % 360
  const hueB = (a + 120) % 360
  const hueC = c % 360

  return {
    id: cyrb53(randID),
    a: `hsl(${hueA}deg 100% 40%)`,
    b: `hsl(${hueB}deg 100% 50%)`,
    c: `hsl(${hueC}deg 100% 50%)`,
  }
}

interface HashState {
  a: number
  b: number
  c: number
  x: number
  y: number
  r: number
}

export const GradientAvatar = memo((props: GradientAvatarProps) => {
  const { className, address, size = 'md', complexity = 1, ...rest } = props

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

  const gradients = hashes.map((hash, idx) => ({
    ...generateGradient(hash.a, hash.b, hash.c),
    x: hash.x % 1000,
    y: hash.y % 1000,
    r: 100 + (hash.r % (1500 / (idx + 1))),
  }))

  return (
    <Box
      as="svg"
      className={clsx(className, styles.avatar({ size }))}
      viewBox={`0 0 1000 1000`}
      version="1.1"
      flexShrink="0"
      borderRadius="circle"
      overflow="hidden"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <clipPath id="circle-clip">
          <circle cx="500" cy="500" r="500" />
        </clipPath>

        <filter
          id="blur"
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
            stdDeviation="100"
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>

        {gradients.map(gradient => (
          <Fragment key={gradient.id}>
            <radialGradient id={`gradient-primary-${gradient.id}`}>
              <stop offset="0" stopColor={gradient.a} />
              <stop offset="1" stopColor={gradient.b} />
            </radialGradient>

            <radialGradient id={`gradient-secondary-${gradient.id}`}>
              <stop offset="0" stopColor={gradient.c} />
              <stop offset="1" stopColor={gradient.b} />
            </radialGradient>
          </Fragment>
        ))}

        <linearGradient
          id={`gradient-background-${gradients[0].id}`}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor={gradients[0].c} />
          <stop offset="1" stopColor={gradients[0].a} />
        </linearGradient>
      </defs>

      <g clipPath="url(#circle-clip)">
        <rect
          width="100%"
          height="100%"
          fill={`url(#gradient-background-${gradients[0].id})`}
        />

        <g filter="url(#blur)">
          {gradients.map(gradient => (
            <Fragment key={gradient.id}>
              <circle
                fill={`url(#gradient-primary-${gradient.id})`}
                cx={gradient.x}
                cy={gradient.y}
                r={gradient.r}
              />
              <circle
                fill={`url(#gradient-secondary-${gradient.id})`}
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
