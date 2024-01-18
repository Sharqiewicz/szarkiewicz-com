import {
  HorizontalScrollCarousel,
  ItemTypes,
} from '../HorizontalCarousel/HorizontalScrollCarousel'

import { type VideoInfoType } from './VideoCard'

import Technikum from '../../assets/youtube/technikum.png'
import Rekrutacja from '../../assets/youtube/rekrutacja.png'
import Hackyeah from '../../assets/youtube/hackyeah.png'
import Programista from '../../assets/youtube/programista.png'

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

  const title = 'Check my latest vlogs 🎥'
  return (
    <section className='overflow-hidden'>
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
