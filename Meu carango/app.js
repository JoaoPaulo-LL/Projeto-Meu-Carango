function sliderImages(className, btnPrev, btnNext) {
  let currentSlide = 0;
  const slider = document.querySelectorAll(className);    
  const prev = document.getElementById(btnPrev);
  const next = document.getElementById(btnNext);

  function hideSlider() {
    slider.forEach((item) => item.classList.remove("on"));
  }

  function showSlider() {
    slider[currentSlide].classList.add("on");
  }

  function nextSlider() {
    hideSlider();
    if (currentSlide === slider.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    showSlider();
  }

  function prevSlider() {
    hideSlider();
    if (currentSlide === 0) {
      currentSlide = slider.length - 1;
    } else {
      currentSlide--;
    }
    showSlider();
  }

  prev.addEventListener("click", prevSlider);
  next.addEventListener("click", nextSlider);
}

sliderImages(".slider", "prev-button1", "next-button1");
sliderImages(".slider2", "prev-button2", "next-button2");
sliderImages(".slider3", "prev-button3", "next-button3");
sliderImages(".slider4", "prev-button4", "next-button4");
sliderImages(".slider5", "prev-button5", "next-button5");

