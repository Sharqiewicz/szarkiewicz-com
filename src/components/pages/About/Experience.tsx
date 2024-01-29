import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useInView } from '../../hooks/useInView'

interface ExperienceItem {
  date: string
  title: string
  description: string
  links?: {
    title: string
    url: string
  }[]
  technologies: string[]
}

const lemonova: ExperienceItem = {
  title: 'Frontend Developer at Lemonova',
  description:
    'Creating websites from simple landpages to more complicated services. Add functionalities to existing websites.',
  date: 'Apr 2019 - May 2020',
  technologies: ['Javascript', 'Wordpress', 'SASS', 'JQuery', 'PHP'],
}

const dige: ExperienceItem = {
  title: 'Intern Frontend Developer at Dige',
  description:
    'Creating mobile/web application for shopping on streams (live). Sell your clothes on a stream, build your community where you can sell things in a trusted way.',
  date: 'Jul 2020 - Sep 2020',
  technologies: [
    'React.js',
    'Redux',
    'Typescript',
    'Flutter',
    'Bootstrap',
    'SCSS(BEM)',
    'Firebase',
  ],
}

const qvistorp: ExperienceItem = {
  title: 'Fullstack Developer at Qvistorp',
  description: 'Develop Qvistorp Growth Application.',
  date: 'Sep 2020 - Sep 2021',
  technologies: [
    'React.js',
    'Redux',
    'Redux-Saga',
    'Javascript',
    'Lodash',
    'Python',
    'Django',
    'D3.js',
    'Webpack',
  ],
  links: [
    {
      title: 'See Qvistorp Growth Application',
      url: 'https://qvistorp.com/',
    },
  ],
}

const apptension: ExperienceItem = {
  title: 'Frontend Developer at Apptension',
  description:
    'Responsible for creating mobile and web apps. I was involved in the mobile app development of Home+, Vowel Mobile App and many more...',
  date: 'Oct 2021 - Sep 2022',
  technologies: [
    'React Native',
    'Kotlin',
    'React.js',
    'Next.js',
    'Redux',
    'Typescript',
    'Lodash',
    'SCSS',
    'Webpack',
  ],
  links: [
    {
      title: 'See BLKBX',
      url: 'https://www.apptension.com/case-studies/blkbx-case-study',
    },
    {
      title: 'See Home+',
      url: 'https://www.homeplus.africa/',
    },
    {
      title: 'See Home+ Case Study',
      url: 'https://www.apptension.com/case-studies/home-app-case-study',
    },
    {
      title: 'See Vowel',
      url: 'https://www.vowel.com/download',
    },
  ],
}

const deloitte: ExperienceItem = {
  title: 'Software Engineer as Deloitte Switzerland Assosiate',
  description:
    'Development of Deloitte Credentials Wallet and Kyc-credentials dApp based on KILT Protocol.',
  date: 'Oct 2022 - Nov 2023',
  technologies: [
    'Polkadot',
    'Web3',
    'Blockchain',
    'Angular',
    'Prisma',
    'Node.js',
    'MySQL',
    'React.js',
    'Typescript',
  ],
  links: [
    {
      title: 'See Deloitte Credentials Wallet',
      url: 'https://chromewebstore.google.com/detail/deloitte-credentials-wall/bflldjbbpcjgooclhpmhdhioebmnnkcm?hl=pl',
    },
    {
      title: 'See Kyc-credentials dApp',
      url: 'https://kyc-credentials.com/home',
    },
  ],
}

const experienceItems: ExperienceItem[] = [
  deloitte,
  apptension,
  qvistorp,
  dige,
  lemonova,
]

export const Experience = () => {
  const [ref, isInView] = useInView({ rootMargin: '-220px' })
  const liRefs = useRef([])

  useEffect(() => {
    if (isInView) {
      const tl = gsap.timeline()
      tl.to(liRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power1.out',
      })
    }
  }, [isInView])

  return (
    <div className='mx-20 max-w-1/2 flex justify-center items-center flex-col'>
      <h1 className='text-5xl mb-10'>My Experience.</h1>
      <ol
        className='relative border-s border-gray-200 dark:border-gray-700 mb-20'
        ref={ref}
      >
        {experienceItems.map((item, index) => (
          <li
            className='opacity-0'
            ref={el => (liRefs.current[index] = el)}
            key={`${item.title}-${item.date}`}
          >
            <div className='mb-10 ms-4'>
              <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                {item.date}
              </time>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                {item.title}
              </h3>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                {item.description}
              </p>
              <div className='w-full flex flex-wrap'>
                {item.technologies.map(technology => (
                  <span className='mt-2 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
                    {technology}
                  </span>
                ))}
              </div>
              <div className='w-full mt-5'>
                {item.links &&
                  item.links.map(link => (
                    <a
                      key={link.title}
                      target='_blank'
                      href={link.url}
                      className='mr-3 mt-3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                    >
                      {link.title}
                      <svg
                        className='w-3 h-3 ms-2 rtl:rotate-180'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                      </svg>
                    </a>
                  ))}
              </div>
            </div>
          </li>
        ))}
        <li className='ms-4' key='start-of-journey'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            August 2018
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Start of my programming journey...
          </h3>
        </li>
      </ol>
    </div>
  )
}
