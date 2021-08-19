const words = document.querySelectorAll('.word-container span')

let i = 1

setInterval(() => {
  const word = document.querySelector('span.change')
  i++
  word.classList.remove('change')
  if(i > words.length){
    words[0].classList.add('change')
    i = 1;
  }
  else{
    word.nextElementSibling.classList.add('change')
  }
}, 2000)