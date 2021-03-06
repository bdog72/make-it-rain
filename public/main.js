const FPS = 50
const SPEED = 10

const makeItRain = () => {
  const main = document.querySelector('main')
  const drop = document.createElement('img')
  drop.src = 'raindrop.svg'
  drop.height = 54
  drop.style.left = Math.floor(Math.random() * document.body.clientWidth) + 'px'
  drop.style.top = Math.floor(Math.random() * 50) + 'px'
  main.appendChild(drop)
}

const animate = () => {
  const main = document.querySelector('main')
  for (let drop of main.children) {
    const x = Number(drop.style.left.split('px')[0])
    const y = Number(drop.style.top.split('px')[0])
    const mod = x % 3
    if (y < document.body.clientHeight) {
      drop.style.top = (y + SPEED + mod) + 'px'
    } else {
      main.removeChild(drop)
    }
  }
}

const main = () => {
  const button = document.querySelector('button')
  button.addEventListener('click', (event) => {
    event.preventDefault()
    makeItRain()
  })

  window.setInterval(animate, 1000 / FPS)
}

document.addEventListener('DOMContentLoaded', main)
