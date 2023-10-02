// functions
function voidRenderMessage(container, message) {
  container.innerText = message
}

function voidFocus(element) {
  document.querySelector(element).focus()
}

function voidHandleKeydown() {
  const body = document.querySelector('body')
  let inputValue = ''

  function strGetInputValue(e) {
    console.log(e)
    if (e.key != 'Backspace') {
      inputValue += e.key
      console.log('InputValue: ' + inputValue)
      return inputValue
    } else {
      inputValue = ''
      inputContainer.value = ''
    }
  }

  function strCheckInputValue(value) {
    let eval = ''
    if (value === 'yes') {
      eval = 'yes'
    } else if (value === 'no') {
      eval = 'no'
    } else {
      eval = undefined
    }
    return eval
  }

  body.addEventListener('keydown', (e) => {
    const answer = strCheckInputValue(strGetInputValue(e))
    console.log('answer', answer)
    if (answer === 'yes') {
      setTimeout(() => {
        voidRenderMessage(messageContainer, 'Venting...')
        optionsContainer.className = 'hidden'
        inputContainer.className = 'hidden'
        setTimeout(() => {
          voidRenderMessage(errorContainer, 'Status: Normal\n\nYou win')
          errorContainer.className = 'animate_blink'
        }, 1200)
      }, 1000)
    } else if (answer === 'no') {
      setTimeout(() => {
        voidRenderMessage(messageContainer, 'Venting prevents explosion')
        optionsContainer.className = 'hidden'
        inputContainer.className = 'hidden'
        setTimeout(() => {
          voidRenderMessage(
            errorContainer,
            "Status: Melt Down imminent\n\nYou're fired"
          )
          errorContainer.className = 'error animate_blink'
        }, 1200)
      }, 400)
    }
  })
}

// Message
const messageContainer = document.querySelector('.container .message')

const messageText = 'Check Core Temperature?'

// Options

const optionsContainer = document.querySelector('.container .options')

const optionsText = 'YES / NO'

// Input

const inputContainer = document.querySelector('input')

// Error Message

const errorContainer = document.querySelector('.container .error')

// Void Function

function voidFunction() {
  voidRenderMessage(messageContainer, messageText)
  voidRenderMessage(optionsContainer, optionsText)
  voidFocus('input')
  voidHandleKeydown()
}

voidFunction()
