export const VideoCard = ({ itemInfo }: { itemInfo: VideoInfoType }) => (
  <article className='relative mb-20 ml-[10vw]'>
    <div className=' w-[60vw] lg:w-[60vw] relative z-30 rounded'>
      <a
        key={itemInfo.id}
        className='group relative overflow-hidden cursor-pointer z-40'
        href={itemInfo.url}
        target='_blank'
      >
        <img
          src={itemInfo.photo}
          className='transition-transform duration-300 group-hover:scale-110 w-full'
        ></img>
      </a>
    </div>
    <div className='absolute bg-black w-full h-full -top-5 -right-5 z-20 rounded'></div>
    <span className='absolute top-5 right-5 z-50 rounded text-xl md:text-4xl'>
      {itemInfo.lang}
    </span>
  </article>
)

export type VideoInfoType = {
  url: string
  lang: string
  id: number
  photo: string
}
