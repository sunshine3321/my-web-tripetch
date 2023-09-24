import { useState, useEffect } from "react";

const SlideshowPlayer = () => {
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
    const slides = document.querySelectorAll(".mySlides-other");
    const dots = document.querySelectorAll(".dot-other");

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
    <div className="slideshow-container-other">
      {/* Slides */}
      <div className="mySlides-other">
        <div className="player-content mb-4">
          <div className="font-size-number-title d-flex">
            <div className="font-size-number me-2">01</div>
            <div className="font-size-title">CONNECTION</div>
          </div>
          <div className="font-size-content mt-3">
            Connect with talented athlete directly, you can watch their skills
            through video showreels directly from Surface 1.
          </div>
        </div>
      </div>

      <div className="mySlides-other">
        <div className="collaboration-content mb-4">
          <div className="font-size-number-title d-flex">
            <div className="font-size-number me-2">02</div>
            <div className="font-size-title">COLLABORATION</div>
          </div>
          <div className="font-size-content mt-3">
            Work with recruiter to increase your chances of finding talented
            athlete.
          </div>
        </div>
      </div>

      <div className="mySlides-other">
        <div className="growth-content mb-4">
          <div className="font-size-number-title d-flex">
            <div className="font-size-number me-2">03</div>
            <div className="font-size-title">GROWTH</div>
          </div>
          <div className="font-size-content mt-3">
            Save your time, recruit proper athlets for your team.
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
      <div className="dot-container-other">
        <span className="dot-other" onClick={() => currentSlide(1)}></span>
        <span className="dot-other" onClick={() => currentSlide(2)}></span>
        <span className="dot-other" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default SlideshowPlayer;
