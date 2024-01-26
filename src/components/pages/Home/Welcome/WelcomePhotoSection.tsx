import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import MyPhoto from '../../../../assets/my-photo.png'
import { WelcomeMagneticSplashes } from './WelcomeMagneticSplashes'

export const WelcomePhotoSection = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(imgRef.current, { autoAlpha: 0, duration: 0.5, y: 900 })
  }, [])

  return (
    <>
      <div>
        <WelcomeMagneticSplashes />
      </div>
      <img
        ref={imgRef}
        className='absolute z-50 bottom-0 left-1/2 -translate-x-1/2'
        src={MyPhoto.src}
        alt='Photo of Kacper Szarkiewicz'
        style={{ pointerEvents: 'none' }}
      />
    </>
  )
}
