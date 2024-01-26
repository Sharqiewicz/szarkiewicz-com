import { useState, useRef, useEffect, type FC } from 'react'
import { useCreateHoverAnimation } from '../../../hooks/useCreateHoverAnimation.tsx'
import mePhoto from '../../../../assets/explain.png'

interface BoardPhotoProps {
  customClass?: string
  customRefClass?: string
}

export const BoardPhoto: FC<BoardPhotoProps> = ({ customClass }) => {
  const imageRef = useRef<HTMLDivElement>(null)

  const imageHover = useCreateHoverAnimation(imageRef, {
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
            transition: imageHover.transition,
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
