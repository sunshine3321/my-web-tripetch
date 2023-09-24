import { useState, useEffect } from "react";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

//   function plusSlides(n) {
//     if (slideIndex === 3) {
//       setSlideIndex(1);
//     } else {
//       setSlideIndex(slideIndex + n);
//     }
//   }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  return (
    <div className="slideshow-container">
      {/* Slides */}
      <div className="mySlides">
        <div className="athletes-content mb-4">
          <div className="font-size-number-title d-flex">
            <div className="font-size-number me-2">01</div>
            <div className="font-size-title">CONNECTION</div>
          </div>
          <div className="font-size-content mt-3">
            Connect with coaches directly you can ping coaches to view their
            profiles.
          </div>
        </div>
      </div>

      <div className="mySlides">
        <div className="collaboration-content mb-4">
          <div className="font-size-number-title d-flex">
            <div className="font-size-number me-2">02</div>
            <div className="font-size-title">COLLABORATION</div>
          </div>
          <div className="font-size-content mt-3">
            Work with other student athletes to increase visibility. When you
            share and like other players videos, it will increase your
            visibility as a player. This is the teamwork aspect of Surface 1.
          </div>
        </div>
      </div>

      <div className="mySlides">
        <div className="growth-content mb-4">
          <div className="font-size-number-title d-flex">
            <div className="font-size-number me-2">03</div>
            <div className="font-size-title">GROWTH</div>
          </div>
          <div className="font-size-content mt-3">
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc
          </div>
        </div>
      </div>

      {/* Next/prev buttons */}
      {/* <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a> */}

      {/* Dots/bullets/indicators */}
      <div className="dot-container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Slideshow;
