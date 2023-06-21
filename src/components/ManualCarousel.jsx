import { useState } from 'react';

export default function ManualCarousel() {
  let space = `<br>`

  const slides = {
    World: [
      {
        title: 'Decisions',
        images: ['/game/world/decisions-1.jpg', '/game/world/decisions-2.png'],
        description: 'Your actions have consequences and results. Depending on your class, you will have advantages or disadvantages. Take into account that in this world there is real estate, mounts (tameable creatures that are used as means of transportation), a banking system, professions and an endless commerce.',
      },
      {
        title: 'Occupations',
        images: ['/game/world/occupations-1.png', '/game/world/occupations-2.png'],
        description: <p>
          In the world of Hunters, there are 10 different professions in which you can perform 2 at 100% of learning and working capacity; and 1 at 50% of learning and working capacity. <br></br><br></br><span>The professions are:</span> Alchemist, Baker, Blacksmith, Carpenter, Cartographer, Farmer, Fisherman, Lumberjack, Merchant, Miner and Tailor.
        </p>,
        statusOne: 'Farmer',
        statusTwo: 'Blacksmith',
      },
      {
        title: 'Market',
        images: ['/game/world/market-1.jpg', '/game/world/market-2.png'],
        description: 'Description 3',
        statusOne: 'A shop',
        statusTwo: 'A beach shop',
      },
      {
        title: 'Creatures',
        images: ['/game/world/creatures-1.gif', '/game/world/creatures-2.gif'],
        description: 'Description 3',
      },
    ],
    Breeds: [
      {
        title: 'Humans',
        images: ['/game/breeds/human-men.png', '/game/breeds/human-girl.png'],
        description: 'Descripción del Slide 1',
        statusOne: 'Men',
        statusTwo: 'Girl',
      },
      {
        title: 'Orcs',
        images: ['/game/breeds/orc-men.png', '/game/breeds/orc-girl.png'],
        description: 'Descripción del Slide 2',
        statusOne: 'Men',
        statusTwo: 'Girl',
      },
      {
        title: 'Elves',
        images: ['/game/breeds/elf-men.png', '/game/breeds/elf-girl.png'],
        description: 'Descripción del Slide 3',
        statusOne: 'Men',
        statusTwo: 'Girl',
      },
      {
        title: 'Deserters',
        images: ['/game/breeds/deserter-men.png', '/game/breeds/deserter-girl.png'],
        description: 'Descripción del Slide 4',
        statusOne: 'Men',
        statusTwo: 'Girl',
      },
    ],
    Classes: [
      {
        title: 'Fighters',
        images: ['/game/classes/warrior.jpg', '/game/classes/archer.jpg'],
        description: 'Description 1',
        statusOne: 'Warrior',
        statusTwo: 'Archer',
      },
      {
        title: 'Sorcerer',
        images: ['/game/classes/wizard.png', '/game/classes/priest.png'],
        description: 'Description 2',
        statusOne: 'Wizard',
        statusTwo: 'Priest',
      },
    ],
  };

  const [currentSlide, setCurrentSlide] = useState({
    category: 'Breeds',
    index: 0,
  });

  const { category, index } = currentSlide;
  const { title, images, statusOne, statusTwo, description } = slides[category][index];

  function handlePrevSlide() {
    setCurrentSlide((prevSlide) => {
      const prevIndex =
        prevSlide.index === 0 ? slides[prevSlide.category].length - 1 : prevSlide.index - 1;
      return { ...prevSlide, index: prevIndex };
    });
  }

  function handleNextSlide() {
    setCurrentSlide((prevSlide) => {
      const nextIndex =
        prevSlide.index === slides[prevSlide.category].length - 1 ? 0 : prevSlide.index + 1;
      return { ...prevSlide, index: nextIndex };
    });
  }

  function handleCategoryChange(category) {
    setCurrentSlide((prevSlide) => {
      const index = category === prevSlide.category ? prevSlide.index : 0;
      return { category, index };
    });
  }

  return (
    <div id='carousel'>
      <div className='carousel container'>
        <button type='button' onClick={handlePrevSlide}><ion-icon name="caret-back-circle"></ion-icon></button>
        <div className='carousel card'>
          <h2>{title}</h2>
          <div className='carousel img'>
            <div className='div-img'>
              <img src={images[0]} alt="Slide 1" />
              <span>{statusOne}</span>
            </div>
            <div className='div-img'>
              <img src={images[1]} alt="Slide 2" />
              <span>{statusTwo}</span>
            </div>
          </div>
          <p>{description}</p>
        </div>
        <button type='button' onClick={handleNextSlide}><ion-icon name="caret-forward-circle"></ion-icon></button>
      </div>
      <div className='carousel buttons'>
        <button type='button' onClick={() => handleCategoryChange('World')}>World</button>
        <button type='button' onClick={() => handleCategoryChange('Breeds')}>Breeds</button>
        <button type='button' onClick={() => handleCategoryChange('Classes')}>Classes</button>
      </div>
    </div>
  );
}