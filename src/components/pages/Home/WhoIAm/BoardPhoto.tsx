import React, { useRef } from 'react'
import createHoverAnimation from '../../../hooks/createHoverAnimation.tsx'
import mePhoto from '../../../../assets/explain.png'

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
          src={mePhoto.src}
          alt='Photo of Kacper Szarkiewicz'
        />
      </div>
    </div>
  )
}

export default BoardPhoto
