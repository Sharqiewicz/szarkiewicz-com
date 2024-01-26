import { useRef } from 'react'
import {
  HorizontalScrollCarousel,
  ItemTypes,
} from '../../HorizontalCarousel/HorizontalScrollCarousel'

import { type VideoInfoType } from '../../Cards/VideoCard'

import Technikum from '../../../assets/youtube/technikum.png'
import Rekrutacja from '../../../assets/youtube/rekrutacja.png'
import Hackyeah from '../../../assets/youtube/hackyeah.png'
import Programista from '../../../assets/youtube/programista.png'
import { LottiePlayer } from '../../LottiePlayer/LottieScrollPlayer'

const Videos = () => {
  const videos: VideoInfoType[] = [
    {
      id: 1,
      photo: Hackyeah.src,
      lang: '🇵🇱',
      url: 'https://www.youtube.com/watch?v=cmUkO7TBr6Q&t=74s',
    },
    {
      id: 2,
      photo: Technikum.src,
      lang: '🇵🇱',
      url: 'https://www.youtube.com/watch?v=eb0fM2ascic',
    },
    {
      id: 3,
      photo: Rekrutacja.src,
      lang: '🇵🇱',
      url: 'https://www.youtube.com/watch?v=W_jP5KAs52s',
    },
    {
      id: 4,
      photo: Programista.src,
      lang: '🇵🇱',
      url: 'https://www.youtube.com/watch?v=IbmTyft6fWA&t=224s',
    },
  ]

  const description = `I make videos about my life as a programmer. I show my personality. Videos in Polish 🇵🇱`

  const title = 'Check out my latest vlogs'

  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <section className='overflow-hidden' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex w-full flex-wrap justify-center items-center pt-8'>
          <div className='flex mx-auto w-1/2 md:w-1/3 lg:w-1/4 justify-center items-center'>
            <LottiePlayer src='./lottie/movie-lottie.json' />
          </div>
          <div className='w-full sm:w-1/2 mx-4 sm:mx-auto'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl  lg:mx-auto w-full '>
              {title}
            </h2>
            <p className='me-description mb-12 text-xl mx-auto '>
              {description}
            </p>
          </div>
        </div>
      </div>
      <HorizontalScrollCarousel
        ref={ref}
        items={videos}
        type={ItemTypes.VIDEO}
        description={description}
        title={title}
      />
    </section>
  )
}

export default Videos
