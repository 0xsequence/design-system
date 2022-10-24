import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const ZoomIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg version="1.1" viewBox="0 0 256 256" className={className} style={style}>
      <g>
        <path
          d="M256,229.484l-81.427-81.427c9.903-14.981,15.679-32.917,15.679-52.181C190.253,43.562,147.691,1,95.376,1
	S0.5,43.562,0.5,95.876s42.562,94.876,94.876,94.876c19.521,0,37.683-5.929,52.783-16.077L229.484,256L256,229.484z M20.5,95.876
	C20.5,54.589,54.089,21,95.376,21c41.287,0,74.876,33.589,74.876,74.876c0,41.287-33.59,74.876-74.876,74.876
	C54.089,170.753,20.5,137.163,20.5,95.876z"
          fill="currentcolor"
        />
      </g>
    </svg>
  )
})
