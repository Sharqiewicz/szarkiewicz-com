interface BlogpostPreviewProps {
  title: string
  description: string
  image: string
  css?: string
}

export const BlogpostPreview: React.FC<BlogpostPreviewProps> = ({
  description,
  image,
  title,
  css,
}) => {
  return (
    <article
      className={`w-[360px] rounded-lg relative z-50 bg-white dark:bg-color-main  overflow-hidden cursor-pointer ${css}`}
    >
      <div className='relative z-50'>
        <img src={image} className='rounded-lg hover:scale-110 transition' />
        <div className='px-5 py-8'>
          <h3 className='text-lg'>{title}</h3>
          <p className='me-description'>{description}</p>
        </div>
      </div>
      <span className='absolute -right-10 -bottom-10 bg-black z-10'></span>
    </article>
  )
}
