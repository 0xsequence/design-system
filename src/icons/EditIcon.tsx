import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const EditIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M12.248 5.49266L9.50195 2.74658L2.44061 9.80793L2.39709 9.85144L1.37284 13.6218L5.14317 12.5975L5.18668 12.554L12.248 5.49266Z"
        fill="currentcolor"
      />
      <path
        d="M10.876 1.37353C11.6343 0.615219 12.8638 0.615219 13.6221 1.37353C14.3804 2.13184 14.3804 3.3613 13.6221 4.11961L13.0336 4.70805L10.2875 1.96197L10.876 1.37353Z"
        fill="currentcolor"
      />
    </svg>
  )
})
