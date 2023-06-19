import '../style/ManualCarousel.scss'
import { useState } from 'react';

export default function ManualCarousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function goToPreviousSlide() {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  }

  function goToNextSlide() {
    setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }

  return (
    <div id="carousel">
      <button className="prev-button" onClick={goToPreviousSlide}>
        &lt;
      </button>
      <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
            <h2>{slide.title}</h2>
            <div>
              <img src={slide.imgmen} alt={slide.title} />
              <img src={slide.imggirl} alt={slide.title} />
            </div>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
}