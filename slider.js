class Slider {
  constructor() {
    // get the elements from DOM
    this.slidesContainer = document.querySelector(".slides");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.dots = document.querySelectorAll(".dot");

    // Declare slide index
    this.index = 0;

    // Add event listeners to buttons
    this.listenForButtons();
    this.showCurrentSlide();
  };

  listenForButtons() {
    this.nextBtn.addEventListener("click", () => {
      if (this.index == 2) this.index = 0;
      else this.index++;

      this.changeSlide();
    })

    this.prevBtn.addEventListener("click", () => {
      if (this.index == 0) this.index = 2;
      else this.index--;

      this.changeSlide();
    })

    this.dots.forEach((el, n) => {
      el.addEventListener("click", () => {
        this.index = n;
        this.changeSlide();
      })
    })
  };

  showCurrentSlide() {
    this.slidesContainer.classList.remove("s1");
    this.slidesContainer.classList.remove("s2");
    switch (this.index) {
      case 1:
        this.slidesContainer.classList.add("s1");
        break;
      case 2:
        this.slidesContainer.classList.add("s2");
        break;
    }
  };

  highlightCurrentDot() {
    for (let dot of this.dots) {
      dot.classList.remove("active");
    }
    this.dots[this.index].classList.add("active");
  };

  changeSlide() {
    this.showCurrentSlide();
    this.highlightCurrentDot();
  };
}

const slider = new Slider();
