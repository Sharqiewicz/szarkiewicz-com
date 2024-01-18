const animationConfig = {
  open: {
    one: { transform: 'none', transformOrigin: '0px 0px' },
    two: { opacity: '1' },
    three: { transform: 'none', transformOrigin: '0px 0px' },
  },
  closed: {
    one: {
      transform: 'translateY(7px) rotate(45deg)',
      transformOrigin: '16px 10px',
    },
    two: { opacity: '0' },
    three: {
      transform: 'translateY(-5px) rotate(-45deg)',
      transformOrigin: '16px 22px',
    },
  },
}

function animateMenu(
  menuButton: HTMLButtonElement,
  one: HTMLElement,
  two: HTMLElement,
  three: HTMLElement,
  config: any,
) {
  menuButton.disabled = true
  one.style.transform = config.one.transform
  one.style.transformOrigin = config.one.transformOrigin
  two.style.opacity = config.two.opacity
  three.style.transform = config.three.transform
  three.style.transformOrigin = config.three.transformOrigin

  setTimeout(() => {
    menuButton.disabled = false
  }, 300)
}

function getMenuElements() {
  const one = document.getElementById('rect-one')
  const two = document.getElementById('rect-two')
  const three = document.getElementById('rect-three')
  const menuButton = document.getElementById('menu-button') as HTMLButtonElement

  return { one, two, three, menuButton }
}

export function toggleMenu(isOpen: boolean) {
  const { one, two, three, menuButton } = getMenuElements()

  if (!menuButton || !one || !two || !three) return

  const config = isOpen ? animationConfig.open : animationConfig.closed
  animateMenu(menuButton, one, two, three, config)
}
