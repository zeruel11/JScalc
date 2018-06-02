import './style.css'

const calculator = document.querySelector('.calculator')
const display = document.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')

const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  return result
}

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    // remove operator visual state
    Array.from(key.parentNode.children).forEach(k =>
      k.classList.remove('is-depressed')
    )

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
      calculator.dataset.previousKeyType = 'number'
      // console.log('number key!')
    }
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // custom attribute
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
      calculator.dataset.previousKeyType = 'operator'
    }
    if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
      } else if (previousKeyType === 'operator') {
        display.textContent = '0.'
      }
      calculator.dataset.previousKeyType = 'decimal'
    }
    if (action === 'clear') {
      calculator.dataset.previousKeyType = 'clear'
      console.log('clear key!')
    }
    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      display.textContent = calculate(firstValue, operator, secondValue)
      calculator.dataset.previousKeyType = 'calculate'
      // console.log('equal key!')
    }
  }
})
