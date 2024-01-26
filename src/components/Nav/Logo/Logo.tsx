import { LogoSVG } from './LogoSVG'

export const Logo = () => {
  return (
    <a href='/'>
      <div className='hidden dark:block'>
        <LogoSVG color='#17C3FA' />
      </div>
      <div className='block dark:hidden'>
        <LogoSVG color='#2A2A48' />
      </div>
    </a>
  )
}
