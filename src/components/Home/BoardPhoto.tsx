import React, { useRef } from 'react'
import createHoverAnimation from '../hooks/createHoverAnimation.tsx'

interface BoardPhotoProps {
  customClass: string
}

const BoardPhoto: React.FC<BoardPhotoProps> = ({ customClass }) => {
  const imageRef = useRef<HTMLDivElement>(null)

  const imageHover = createHoverAnimation(imageRef, {
    x: 12,
    y: -8,
    z: 12,
  })

  return (
    <div ref={imageRef} className='absolute w-full h-full z-50 top-0 left-0'>
      <div className={customClass}>
        <img
          style={{
            transform: imageHover.transform,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          src='./src/assets/explain.png'
          alt='Photo of Kacper Szarkiewicz'
        />
      </div>
    </div>
  )
}

export default BoardPhoto
