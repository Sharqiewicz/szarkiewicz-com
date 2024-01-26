import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { LottieScrollTrigger } from './LottieScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface LottiePlayerProps {
  src: string
}

export const LottiePlayer: React.FC<LottiePlayerProps> = ({ src }) => {
  const container = useRef(null)

  useEffect(() => {
    LottieScrollTrigger({
      target: '#lottie-player',
      path: src,
      speed: 'medium',
      startFrame: 0,
    })
  }, [])

  return <div ref={container} id='lottie-player' className='w-full' />
}
