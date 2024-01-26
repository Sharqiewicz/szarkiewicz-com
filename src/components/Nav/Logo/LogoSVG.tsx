import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const LogoSVG = ({ color }) => {
  const svgRef = useRef(null)

  useEffect(() => {
    gsap.from(svgRef.current.children, {
      duration: 1,
      autoAlpha: 0,
      stagger: 0.1,
      x: -100,
      ease: 'power3.out',
    })
  }, [])

  const handleMouseEnter = () => {
    gsap.to(svgRef.current.children, {
      x: -20,
      stagger: 0.1,
      ease: 'power3.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(svgRef.current.children, {
      x: 0,
      stagger: 0.1,
      ease: 'power3.out',
    })
  }

  return (
    <svg
      ref={svgRef}
      width='62'
      height='62'
      viewBox='0 0 280 270'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='pl-2 svgfix hover:scale-105 transition overflow-visible'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <rect x='25' y='164' width='200' height='24' rx='12' fill={color} />
      <rect x='45' y='123' width='160' height='24' rx='12' fill={color} />
      <rect x='79' y='82' width='147' height='24' rx='12' fill={color} />
      <rect x='114' y='41' width='144' height='24' rx='12' fill={color} />
      <rect x='206' width='74' height='24' rx='12' fill={color} />
      <rect x='174' width='25' height='24' rx='12' fill={color} />
      <rect y='246' width='280' height='24' rx='12' fill={color} />
      <rect y='205' width='250' height='24' rx='12' fill={color} />
    </svg>
  )
}
