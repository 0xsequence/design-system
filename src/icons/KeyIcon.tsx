import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const KeyIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="9"
      height="18"
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M4.5 0.683594C3.88932 0.683594 3.31966 0.795247 2.79102 1.01855C2.26693 1.24186 1.80436 1.55404 1.40332 1.95508C1.00684 2.35156 0.694661 2.81413 0.466797 3.34277C0.24349 3.86686 0.131836 4.43197 0.131836 5.03809C0.131836 5.64876 0.245768 6.22526 0.473633 6.76758C0.706055 7.30534 1.0319 7.7793 1.45117 8.18945C1.87044 8.59505 2.36491 8.90723 2.93457 9.12598V15.873C2.93457 15.9596 2.94824 16.0371 2.97559 16.1055C3.00749 16.1738 3.05306 16.2399 3.1123 16.3037L4.25391 17.4521C4.31315 17.5114 4.39062 17.5456 4.48633 17.5547C4.58659 17.5638 4.67318 17.5319 4.74609 17.459L6.91309 15.292C6.986 15.2191 7.02018 15.137 7.01562 15.0459C7.01562 14.9548 6.98145 14.8727 6.91309 14.7998L5.56641 13.4736L7.41211 11.6348C7.48047 11.5664 7.51237 11.4867 7.50781 11.3955C7.50781 11.3044 7.47135 11.2223 7.39844 11.1494L5.57324 9.31055C6.63053 8.89128 7.44173 8.30794 8.00684 7.56055C8.5765 6.81315 8.86133 5.97233 8.86133 5.03809C8.86133 4.43652 8.7474 3.8737 8.51953 3.34961C8.29622 2.82096 7.98405 2.3584 7.58301 1.96191C7.18652 1.56087 6.72396 1.2487 6.19531 1.02539C5.66667 0.797526 5.10156 0.683594 4.5 0.683594ZM4.5 4.86035C4.16276 4.86035 3.87565 4.74186 3.63867 4.50488C3.40169 4.2679 3.2832 3.98079 3.2832 3.64355C3.2832 3.30632 3.39941 3.01921 3.63184 2.78223C3.86882 2.54525 4.1582 2.42676 4.5 2.42676C4.83268 2.42676 5.11751 2.54753 5.35449 2.78906C5.59603 3.02604 5.7168 3.31087 5.7168 3.64355C5.7168 3.98079 5.59603 4.2679 5.35449 4.50488C5.11751 4.74186 4.83268 4.86035 4.5 4.86035Z"
        fill="currentcolor"
      />
    </svg>
  )
})
