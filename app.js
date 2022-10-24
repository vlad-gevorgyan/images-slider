const slides = document.querySelectorAll('.slide')


for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
    document.body.style.background = slide.style.backgroundImage
  })
}


function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}

