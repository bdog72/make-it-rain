
const box = document.querySelector('.drop')

setInterval(() => {
  box.style.top = '0px'
}, 5000)

const animate = () => {
  box.style.top = `${parseInt(box.style.top) + 2}px`
}

setInterval(animate, 16.66)

setTimeout(() => {
  box.style.backgroundColor = 'reen'
}, 5000)
