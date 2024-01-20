import Photo from '../../../assets/posts/first.png'

export const BlogpostPreview = () => {
  return (
    <article className='w-[360px] rounded-lg relative z-50 bg-white dark:bg-color-main  overflow-hidden cursor-pointer'>
      <div className='relative z-50'>
        <img
          src={Photo.src}
          className='rounded-lg hover:scale-110 transition'
        />
        <div className='px-5 py-8'>
          <h3 className='text-lg'>Creating own CSS library...</h3>
          <p className='me-description'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s
          </p>
        </div>
      </div>
      <span className='absolute -right-10 -bottom-10 bg-black z-10'></span>
    </article>
  )
}
