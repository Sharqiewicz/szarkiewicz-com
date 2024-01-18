import { useRef, useEffect } from 'react'
import { VideoCard } from '../Home/VideoCard'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export enum ItemTypes {
  'VIDEO',
}

const Item: Record<ItemTypes, (itemInfo: any) => JSX.Element> = {
  [ItemTypes.VIDEO]: VideoCard,
}

export const HorizontalScrollCarousel = ({
  items,
  type,
  title,
  description,
}: {
  items: any[]
  type: ItemTypes
  title?: string
  description?: string
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)
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
          trigger: triggerRef.current,
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
    <section ref={triggerRef}>
      <div>
        <div className='flex flex-wrap justify-center align-items-center my-10 mx-8'>
          {title && (
            <h1 className='text-3xl md:text-4xl lg:text-5xl mx-12 md:mx-0 mx-auto w-full text-center'>
              {title}
            </h1>
          )}
          {description && (
            <p className='me-description my-8 text-xl'>{description}</p>
          )}
        </div>
        <div ref={sectionRef} className='scroll-section-inner'>
          <div className='flex'>
            {items.map(item => {
              return <ChosenItem itemInfo={item} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
