"use strict";

/************class**************/

class Slider {
  constructor(slides, currentSlideIndex = 0) {
    this.slides = slides;
    this.currentSlideIndex = currentSlideIndex;
  }

  set currentSlideIndex(value) {
    if (typeof value !== "number") {
      throw new TypeError();
    }
    if (
      Number.isNaN(value) ||
      value < 0 ||
      value > this.slides.length ||
      !Number.isInteger(value)
    ) {
      throw new RangeError();
    }
    this._curentSlideIndex = value;
  }

incSlideIndex(){
  this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
}
decSlideIndex(){
  this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
}

  get currentSlideIndex() {
    return this._curentSlideIndex;
  }
  get currentSlide() {
    return this.slides[this._curentSlideIndex];
  }
}



const slides = [
  {
    src: "https://s3.nat-geo.ru/images/2020/9/13/d34f669d4d6e4dba824f17593319ca13.max-2500x1500.jpg",
    alt: "1",
  },
  {
    src: "https://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg",
    alt: "2",
  },
  {
    src: "https://photar.ru/wp-content/uploads/2021/04/Zak-van-Biljon-17.jpg",
    alt: "3",
  },
];

try {
  const slider = new Slider(slides, 0);
  const imgEl = document.querySelector(".image-wrapper>img");
  const [prevBtn, nextBtn] = document.querySelectorAll("button");

  updateSlide(slider.currentSlide);

  nextBtn.onclick = () => {
   slider.incSlideIndex();
   updateSlide(slider.currentSlide);
  };

  prevBtn.onclick = () => {
    slider.decSlideIndex();
    updateSlide(slider.currentSlide);
  };

  function updateSlide(slideIndex) {
    imgEl.src = slideIndex.src;
    imgEl.alt = slideIndex.alt;
  }
} catch (e) {
  console.log("e :>> ", e);
  imgEl.src = 'https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png'
  
}

