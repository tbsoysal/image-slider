const slidesContainer = document.querySelector('.slides'),
  prevBtn = document.getElementById('prevBtn'),
  nextBtn = document.getElementById('nextBtn'),
  dots = document.querySelectorAll('.dot');

let index = 0;

nextBtn.addEventListener('click', () => {
  if (index == 2)
    index = 0;
  else
    index++;

  changeSlide();
})

prevBtn.addEventListener('click', () => {
  if (index == 0)
    index = 2;
  else
    index--;

  changeSlide();
})

const activeSlide = () => {
  slidesContainer.classList.remove('s1');
  slidesContainer.classList.remove('s2');
  switch (index) {
    case 1:
      slidesContainer.classList.add('s1');
      break;
    case 2:
      slidesContainer.classList.add('s2');
      break;
  };
}

const activeDot = () => {
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  dots[index].classList.add('active');
};

const changeSlide = () => {
  activeSlide();
  activeDot();
};

dots.forEach((el, n) => {
  el.addEventListener('click', () => {
    index = n;
    changeSlide();
  })
});


