import { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import * as animationData from '../../assets/lottie/movie-lottie.json'

export const MovieLottie = () => {
  const container = useRef(null)

  const defaultOptions = {
    loop: false,
    autoplay: false,
    path: './src/assets/lottie/movie-lottie.json',
    renderer: 'svg',
    container: container.current,
    width: 40,
    height: 40,
  }

  useEffect(() => {
    const animDuration = 3000
    const animation = lottie.loadAnimation(defaultOptions)

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY - 770
      const maxFrames = animation.totalFrames

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100))

      animation.goToAndStop(frame, true)
    }

    const onScroll = () => {
      animatebodymovin(animDuration)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      animation.destroy()
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <div ref={container} id='lottie-player' />
}
