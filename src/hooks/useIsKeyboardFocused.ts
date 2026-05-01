import { useEffect, useState } from "react"

export const useIsKeyboardFocused = () => {
const [isKeyboardFocused, setIsKeyboardFocused] = useState(false)

useEffect(() => {
  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === 'Tab') {
      setIsKeyboardFocused(true)
    }
  }
  const handleMouseDown = () => setIsKeyboardFocused(false)

  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('mousedown', handleMouseDown)

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('mousedown', handleMouseDown)
  }
}, [])

return isKeyboardFocused
}