import { Fragment } from 'react'

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

const generateGradient = (value: number) => {
  const hueA = value % 360
  const hueB = (value + 120) % 360
  const hueC = (value + 240) % 360

  return {
    a: `hsl(${hueA}deg 100% 50%)`,
    b: `hsl(${hueB}deg 100% 50%)`,
    c: `hsl(${hueC}deg 100% 50%)`,
  }
}

export const GradientAvatar = (props: GradientAvatarProps) => {
  const { address, size = 'md', complexity = 1, ...rest } = props

  const hashes = []
  for (let i = 0; i < complexity; i++) {
    const offset = i * 4

    hashes.push({
      a: cyrb53(address, offset),
      b: cyrb53(address, offset + 1),
      c: cyrb53(address, offset + 2),
      d: cyrb53(address, offset + 3),
    })
  }

  const gradients = hashes.map((hash, idx) => ({
    ...generateGradient(hash.a),
    x: hash.c % 1000,
    y: hash.d % 1000,
    r: hash.b % (1000 / (idx + 1)),
  }))

  gradients.map(gradient => {
    console.log('x', gradient.x, 'y', gradient.y)
  })

  return (
    <Box
      as="svg"
      className={styles.avatar({ size })}
      viewBox={`0 0 1000 1000`}
      version="1.1"
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
            stdDeviation="120"
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>

        {gradients.map((gradient, idx) => (
          <Fragment key={idx}>
            <radialGradient id={`gradient-a-${idx}`}>
              <stop offset="0" stopColor={gradient.a} />
              <stop offset="1" stopColor={gradient.b} />
            </radialGradient>

            <radialGradient id={`gradient-b-${idx}`}>
              <stop offset="0" stopColor={gradient.b} />
              <stop offset="1" stopColor={gradient.a} />
            </radialGradient>
          </Fragment>
        ))}

        <linearGradient id={`gradient-background`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={gradients[0].a} />
          <stop offset="1" stopColor={gradients[0].c} />
        </linearGradient>
      </defs>

      <g clipPath="url(#circle-clip)">
        <rect width="100%" height="100%" fill="url(#gradient-background)" />

        <g filter="url(#blur)">
          {gradients.map((gradient, idx) => (
            <Fragment key={idx}>
              <circle
                fill={`url(#gradient-a-${idx})`}
                cx={gradient.x}
                cy={gradient.y}
                r={gradient.r}
              />
              <circle
                key={idx}
                fill={`url(#gradient-b-${idx})`}
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
}
