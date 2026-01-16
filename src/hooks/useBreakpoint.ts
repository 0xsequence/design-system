import { useEffect, useState } from 'react'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const breakpoints: { name: Breakpoint; min: number }[] = [
  { name: 'xs', min: 0 },
  { name: 'sm', min: 640 },
  { name: 'md', min: 768 },
  { name: 'lg', min: 1024 },
  { name: 'xl', min: 1280 },
  { name: '2xl', min: 1536 },
]

function getBreakpoint(width: number): Breakpoint {
  for (let i = breakpoints.length - 1; i >= 0; i--) {
    if (width >= breakpoints[i].min) {
      return breakpoints[i].name
    }
  }

  return 'xs'
}

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    typeof window !== 'undefined' ? getBreakpoint(window.innerWidth) : 'xs'
  )

  useEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint(getBreakpoint(window.innerWidth))
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)

    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return breakpoint
}
