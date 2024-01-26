import lottie, { type AnimationItem } from 'lottie-web'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface LottieScrollTriggerOptions {
  target: string | Element
  path: string
  speed?: 'slow' | 'medium' | 'fast'
  renderer?: 'svg' | 'canvas' | 'html'
  rendererSettings?: {
    preserveAspectRatio: string
  }
  timeline?: gsap.core.Timeline
  startFrame?: number
}

export function LottieScrollTrigger(
  options: LottieScrollTriggerOptions,
): AnimationItem {
  const target = gsap.utils.toArray(options.target)[0] as Element

  const defaultOptions = {
    trigger: target,
    start: 'top top',
    end: '+=2300',
    scrub: 0,
    ...options,
  }

  const animation = lottie.loadAnimation({
    container: target,
    renderer: options.renderer || 'svg',
    loop: false,
    autoplay: false,
    path: options.path,
  })

  const frameAnimation =
    options.timeline || gsap.timeline({ scrollTrigger: defaultOptions })

  animation.addEventListener('DOMLoaded', function () {
    const playhead = { frame: options.startFrame || 0 }
    animation.goToAndStop(options.startFrame || 0, true)

    frameAnimation.to(
      playhead,
      {
        frame: animation.totalFrames - 10,
        ease: 'power1.inOut',
        duration: frameAnimation.duration() || 1,
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
      },
      0,
    )

    ScrollTrigger.sort()
    ScrollTrigger.refresh()
  })

  return animation
}
