import { useState } from 'react';

export default function ManualCarousel() {
  const slides = [
    {
      title: 'Humans',
      images: ['/characters/human-men.png', '/characters/human-girl.png'],
      description: 'Descripción del Slide 1',
    },
    {
      title: 'Orcs',
      images: ['/characters/orc-men.png', '/characters/orc-girl.png'],
      description: 'Descripción del Slide 2',
    },
    {
      title: 'Elves',
      images: ['/characters/elf-men.png', '/characters/elf-girl.png'],
      description: 'Descripción del Slide 3',
    },
    {
      title: 'Deserters',
      images: ['/characters/deserter-men.png', '/characters/deserter-girl.png'],
      description: 'Descripción del Slide 4',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevSlide() {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  }

  function handleNextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }

  const { title, images, description } = slides[currentSlide];

  return (
    <div id='carousel'>
      <button type='button' onClick={handlePrevSlide}><ion-icon name="caret-back-circle"></ion-icon></button>
      <div id='carousel-container'>
        <h2>{title}</h2>
        <div id='container-img'>
          <div className='div-img'>
            <img src={images[0]} alt="Slide 1" />
            <span>Men</span>
          </div>
          <div className='div-img'>
            <img src={images[1]} alt="Slide 2" />
            <span>Women</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
      <button type='button' onClick={handleNextSlide}><ion-icon name="caret-forward-circle"></ion-icon></button>
    </div>
  );
}