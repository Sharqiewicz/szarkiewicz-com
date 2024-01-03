import { motion } from 'framer-motion'
import { useRef } from 'react'

const SVG_YELLOW = () => (
  <motion.svg
    width='329'
    height='564'
    viewBox='0 0 329 564'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <motion.path
      d='M91.6757 154.057C63.5991 75.154 126.81 -6.25913 210.209 1.39086L230.443 3.24683C252.758 5.29369 273.469 15.7176 288.407 32.4202C318.176 65.7053 318.531 115.94 289.236 149.643L262.205 180.741C226.29 222.059 218.8 280.943 243.228 329.936L256.213 355.981C262.156 367.9 269.589 379.016 278.333 389.062L308.695 423.944C328.262 446.424 333.801 477.878 323.089 505.689C312.37 533.52 287.136 553.138 257.521 556.666L212.951 561.974C189.875 564.722 166.476 562.245 144.487 554.725L101.327 539.965C-4.55796 503.754 -34.3388 368.17 46.6245 290.918L62.7955 275.488C95.5328 244.252 106.845 196.687 91.6757 154.057Z'
      fill='#FFD705'
    />
  </motion.svg>
)

const SVG_BLUE = () => (
  <motion.svg
    width='246'
    height='240'
    viewBox='0 0 246 240'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <motion.path
      d='M87.244 204.269C80.5671 236.146 42.6085 249.782 17.1298 229.496C3.39409 218.559 -2.4981 200.464 2.18457 183.542L17.5987 127.839C25.9558 97.6385 44.8448 71.4259 70.8492 53.9422L131.941 12.868C158.378 -4.9063 193.285 -3.50027 218.206 16.3428C240.397 34.0117 250.354 62.9292 243.745 90.5145L243.127 93.0911C236.756 119.686 216.792 140.927 190.643 148.933L117.257 171.404C102.012 176.072 90.5127 188.663 87.244 204.269Z'
      fill='#17C3FA'
    />
  </motion.svg>
)

const SVG_PINK = () => (
  <motion.svg
    width='335'
    height='338'
    viewBox='0 0 335 338'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <motion.path
      d='M81.8158 13.608C104.24 -10.4286 144.268 -1.24453 153.97 30.1631C158.773 45.7105 171.981 57.1867 188.046 59.7722L237.862 67.7893C267.394 72.5421 283.505 104.917 269.489 131.342C259.216 150.71 264.902 174.694 282.778 187.388L303.855 202.355C342.187 229.575 345.226 285.38 310.078 316.602L307.998 318.45C291.094 333.465 268.34 340.091 246.018 336.499L163.437 323.209C108.463 314.361 61.0465 279.729 35.8933 230.053L9.85333 178.624C-7.47082 144.41 -1.59582 103.019 24.565 74.9764L81.8158 13.608Z'
      fill='#FA1DFF'
    />
  </motion.svg>
)

function DraggableImages() {
  const constraintsRef = useRef(null)

  return (
    <>
      <motion.div ref={constraintsRef}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className='absolute left-0 md:left-16 top-0 z-20 cursor-pointer'
        >
          <SVG_BLUE />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className='absolute left-0 md:left-20 bottom-0 z-30 cursor-pointer'
        >
          <SVG_PINK />
        </motion.div>

        <motion.div
          drag
          dragConstraints={constraintsRef}
          className='absolute right-0 top-0 z-40 cursor-pointer'
        >
          <SVG_YELLOW />
        </motion.div>
      </motion.div>
    </>
  )
}

export default DraggableImages
