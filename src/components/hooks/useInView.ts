import { useState, useEffect, useRef } from 'react'

interface UseInViewOptions {
  rootMargin?: string
}

export function useInView(options: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsInView(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { ...options })

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref])

  return [ref, isInView]
}
