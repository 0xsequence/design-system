import * as styles from './styles.css'

type GradientAvatarProps = {
  address: string
  initials?: string
} & styles.AvatarVariants

export const djb2 = (str: string) => {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
  }
  return hash
}

const generateGradient = (value: string) => {
  const hash = djb2(value)

  const hue1 = hash % 360
  const hue2 = (hash + 120) % 360

  return {
    fromColor: `hsl(${hue1}, 95%, 50%)`,
    toColor: `hsl(${hue2}, 95%, 50%)`,
  }
}

export const GradientAvatar = (props: GradientAvatarProps) => {
  const { address, size = 'md' } = props
  const gradient = generateGradient(address)

  return (
    <svg
      className={styles.avatar({ size })}
      viewBox={`0 0 20 20`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={gradient.fromColor} />
            <stop offset="100%" stopColor={gradient.toColor} />
          </linearGradient>
        </defs>
        <rect fill="url(#gradient)" x="0" y="0" width="100%" height="100%" />

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
    </svg>
  )
}
