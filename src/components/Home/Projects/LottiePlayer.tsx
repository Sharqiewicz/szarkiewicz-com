import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { LottieScrollTrigger } from './LottieScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface LottiePlayerProps {
  options: any
}

export const LottiePlayer: React.FC<LottiePlayerProps> = ({ options }) => {
  const container = useRef(null)

  useEffect(() => {
    LottieScrollTrigger({
      target: '#lottie-player',
      path: './src/assets/lottie/movie-lottie.json',
      speed: 'medium',
      startFrame: 10,
    })
  }, [])

  return <div ref={container} id='lottie-player' />
}
