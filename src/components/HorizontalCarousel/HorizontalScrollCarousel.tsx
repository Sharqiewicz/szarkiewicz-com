import { useRef, useEffect, forwardRef } from 'react'
import { VideoCard } from '../Home/VideoCard'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export enum ItemTypes {
  'VIDEO',
}

const Item: Record<ItemTypes, (itemInfo: any) => JSX.Element> = {
  [ItemTypes.VIDEO]: VideoCard,
}

export const HorizontalScrollCarousel = forwardRef(
  (
    {
      items,
      type,
    }: {
      items: any[]
      type: ItemTypes
      title?: string
      description?: string
    },
    ref,
  ) => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const targetRef = useRef(null)

    const ChosenItem = Item[type]

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: '-184vw',
          ease: 'none',
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: '2000 top',
            scrub: 0.6,
            pin: true,
          },
        },
      )
      return () => {
        pin.kill()
      }
    }, [])

    return (
      <section>
        <div ref={sectionRef} className='scroll-section-inner'>
          <div className='flex'>
            {items.map(item => {
              return <ChosenItem itemInfo={item} />
            })}
          </div>
        </div>
      </section>
    )
  },
)
