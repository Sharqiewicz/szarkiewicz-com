import { useState, useEffect } from 'react'

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches)
    }
  }, [])

  return isDesktop
}
