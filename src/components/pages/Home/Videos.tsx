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

  const description = `I make videos about my life as a programmer. I show what I learn, what
  I do and what I plan to do. I show my personality and my sense of
  humor. Videos in Polish 🇵🇱`

  const title = 'Check out my latest vlogs'

  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <section className='overflow-hidden' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex w-full justify-center items-center flex-wrap'>
          <LottiePlayer src='./lottie/movie-lottie.json' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl mx-4 lg:mx-auto w-full md:w-1/2'>
            {title}
          </h2>
        </div>
        <p className='me-description mb-12 text-xl mx-4'>{description}</p>
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
