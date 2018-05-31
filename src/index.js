import './style.css'

const calculator = document.querySelector('.calculator')
const display = document.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    if (!action) {
      console.log('number key!')
    }
    if (
      action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
    ) {
      console.log('operator key!')
    }
    if (action === 'decimal') {
      console.log('decimal key!')
    }
    if (action === 'clear') {
      console.log('clear key!')
    }
    if (action === 'calculate') {
      console.log('equal key!')
    }
  }
})
