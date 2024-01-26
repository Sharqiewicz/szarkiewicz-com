import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

interface LottiePlayerProps {
  src: string
}

export const LottiePlayer: React.FC<LottiePlayerProps> = ({ src }) => {
  const container = useRef(null)

  useEffect(() => {
    if (container.current === null) return

    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: src,
    })

    return () => {
      animation.destroy()
    }
  }, [src])

  return <div ref={container} />
}
