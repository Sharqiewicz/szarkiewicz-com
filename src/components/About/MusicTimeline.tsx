export const MusicTimeline = () => {
  return (
    <ol className='items-center sm:flex'>
      <li className='relative mb-6 sm:mb-0'>
        <div className='flex items-center'>
          <div className='timeline-circle z-10 flex items-center justify-center w-10 sm:w-12 h-10 rounded-full'>
            <svg
              className='w-2.5 h-2.5 text-green-800 dark:text-green-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </div>
          <div className='hidden sm:flex w-full h-0.5 bg-green-700'></div>
        </div>
        <div className='mt-3 sm:pe-8'>
          <h3 className='text-lg font-semibold text-white'>
            Start learning music
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            2022
          </time>
        </div>
      </li>
      <li className='relative mb-6 sm:mb-0'>
        <div className='flex items-center'>
          <div className='timeline-circle z-10 flex items-center justify-center w-10 sm:w-12 h-10 rounded-full'>
            <svg
              className='w-2.5 h-2.5 text-green-800 dark:text-green-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </div>
          <div className='hidden sm:flex w-full h-0.5 bg-green-700'></div>
        </div>
        <div className='mt-3 sm:pe-8'>
          <h3 className='text-lg font-semibold text-white'>
            Release first song
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            2023
          </time>
        </div>
      </li>
      <li className='relative mb-6 sm:mb-0'>
        <div className='flex items-center'>
          <div className='bg-green-100 animate-pulse z-10 flex items-center justify-center w-10 h-10 rounded-full'>
            <svg
              className='w-2.5 h-2.5 text-green-800 dark:text-green-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </div>
        </div>
        <div className='mt-3 sm:pe-8'>
          <h3 className='text-lg font-semibold text-white'>
            Release first album
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            2024
          </time>
        </div>
      </li>
    </ol>
  )
}
