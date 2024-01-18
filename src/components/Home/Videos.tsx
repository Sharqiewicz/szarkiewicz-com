import {
  HorizontalScrollCarousel,
  ItemTypes,
} from '../HorizontalCarousel/HorizontalScrollCarousel'

import { type VideoInfoType } from './VideoCard'

const Videos = () => {
  const videos: VideoInfoType[] = [
    {
      id: 1,
      photo: './src/assets/youtube/hackyeah.png',
      lang: '🇵🇱',
      url: 'https://www.youtube.com/watch?v=cmUkO7TBr6Q&t=74s&ab_channel=KacperSzarkiewicz',
    },
    {
      id: 2,
      photo: './src/assets/youtube/technikum.png',
      lang: '🇵🇱',
      url: '',
    },
    {
      id: 3,
      photo: './src/assets/youtube/rekrutacja.png',
      lang: '🇵🇱',
      url: '',
    },
    {
      id: 4,
      photo: './src/assets/youtube/programista.png',
      lang: '🇵🇱',
      url: '',
    },
  ]

  const description = `I make videos about my life as a programmer. I show what I learn, what
  I do and what I plan to do. I show my personality and my sense of
  humor. Videos in Polish 🇵🇱`

  const title = 'Check my latest vlogs 🎥'
  return (
    <section className='my-20'>
      <HorizontalScrollCarousel
        items={videos}
        type={ItemTypes.VIDEO}
        description={description}
        title={title}
      />
    </section>
  )
}

export default Videos
