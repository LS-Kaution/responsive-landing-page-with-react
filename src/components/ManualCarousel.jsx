import { useState } from 'react';

export default function ManualCarousel() {
  let space = `<br>`

  const slides = {
    World: [
      {
        title: 'Decisions',
        images: ['/game/world/decisions-1.jpg', '/game/world/decisions-2.png'],
        description:
          <p className='source-description decisions'>
            Your actions have consequences and results. Depending on your class, you will have advantages or disadvantages. Take into account that in this world there is real estate, mounts (tameable creatures that are used as means of transportation), a banking system, professions and an endless commerce.
          </p>,
      },
      {
        title: 'Occupations',
        images: ['/game/world/occupations-1.png', '/game/world/occupations-2.png'],
        description:
          <div className='source-description occupations'>
            In the world of Hunters, there are 10 different professions in which you can perform 2 at 100% of learning and working capacity; and 1 at 50% of learning and working capacity.
            <br></br><br></br>
            <span>
              <label className='source-important'>The professions are:</label> Alchemist, Baker, Blacksmith, Carpenter, Cartographer, Farmer, Fisherman, Lumberjack, Merchant, Miner and Tailor.
            </span>
          </div>,
        statusOne: 'Farmer',
        statusTwo: 'Blacksmith',
      },
      {
        title: 'Market',
        images: ['/game/world/market-1.jpg', '/game/world/market-2.png'],
        description:
          <div className='source-description market'>
            The marketplace is a place where valuable goods are exchanged within Hunters, it is also where players from all over the world gather to swap stories, share strategies and establish alliances. Become a respected and recognized merchant in the community, or simply enjoy the lively atmosphere as you explore the market's offerings and hidden treasures.
          </div>,
        statusOne: 'A shop',
        statusTwo: 'A beach shop',
      },
      {
        title: 'Creatures',
        images: ['/game/world/creatures-1.gif', '/game/world/creatures-2.gif'],
        description:
          <div className='source-description creatures'>
            As you progress through our monster and dungeon system, you will unlock increasingly difficult and exciting challenges. Take on epic raids, where cooperation and strategy are key to overcoming enemies of epic proportions. Form alliances with other players, build your perfect team and prove your skill in epic battles that will test your limits.
          </div>,
      },
    ],
    Breeds: [
      {
        title: 'Humans',
        images: ['/game/breeds/human-men.png', '/game/breeds/human-girl.png'],
        description:
          <div className='source-description humans'>
            With their cunning and determination, humans excel in a variety of skills and roles. From noble knights to wise wizards, humans excel in their ability to adapt to any challenge and their ability to forge alliances with other races.
            <br></br><br></br>
            <div className='source-responsive-div'>
              <span>
                <label className='source-important'>Allies: </label>
                Elves.
              </span>
              <span>
                <label className='source-important'> Neutrals: </label>
                Orcs.
              </span>
              <span>
                <label className='source-important'> Enemies: </label>
                Deserters.
              </span>
            </div>
          </div>,
        statusOne: 'Men',
        statusTwo: 'Girl',
      },
      {
        title: 'Orcs',
        images: ['/game/breeds/orc-men.png', '/game/breeds/orc-girl.png'],
        description:
          <div className='source-description orcs'>
            Orcs are a strong and formidable race, with a fierce and warlike nature. With their physical endurance and thirst for battle, orcs make excellent warriors and fearsome barbarians. Although they may appear intimidating, orcs value loyalty and camaraderie, and pride themselves on their code of honor and bravery in battle.
            <br></br><br></br>
            <div className='source-responsive-div'>
              <span>
                <label className='source-important'>Allies: </label>
                Deserters.
              </span>
              <span>
                <label className='source-important'> Neutrals: </label>
                Humans.
              </span>
              <span>
                <label className='source-important'> Enemies: </label>
                Elves.
              </span>
            </div>
          </div>,
        statusOne: 'Men',
        statusTwo: 'Girl',
      },
      {
        title: 'Elves',
        images: ['/game/breeds/elf-men.png', '/game/breeds/elf-girl.png'],
        description:
          <div className='source-description elves'>
            Elves, ethereal and graceful beings, are known for their connection with nature and their mastery of arcane magic. Their elegance and agility make them expert archers and powerful magicians.
            <br></br><br></br>
            <div className='source-responsive-div'>
              <span>
                <label className='source-important'>Allies: </label>
                Humans.
              </span>
              <span>
                <label className='source-important'> Neutrals: </label>
                None.
              </span>
              <span>
                <label className='source-important'> Enemies: </label>
                Deserters, Orcs.
              </span>
            </div>
          </div>,
        statusOne: 'Men',
        statusTwo: 'Girl',
      },
      {
        title: 'Deserters',
        images: ['/game/breeds/deserter-men.png', '/game/breeds/deserter-girl.png'],
        description:
          <div className='source-description deserters'>
            Emerging from diverse backgrounds and cultures, deserters have left their former factions or societies for different reasons. These renegades have found their own identity and have developed unique skills, adapting to life on the margins of society.
            <br></br><br></br>
            <div className='source-responsive-div'>
              <span>
                <label className='source-important'>Allies: </label>
                Orcs.
              </span>
              <span>
                <label className='source-important'> Neutrals: </label>
                None.
              </span>
              <span>
                <label className='source-important'> Enemies: </label>
                Elves, Humans.
              </span>
            </div>
          </div>,
        statusOne: 'Men',
        statusTwo: 'Girl',
      },
    ],
    Classes: [
      {
        title: 'Fighters',
        images: ['/game/classes/warrior.jpg', '/game/classes/archer.jpg'],
        description:
          <div className='source-description fighters'>
            <span>
              <label className='source-important'>Warriors: </label>
              Warriors: Masters of melee combat, warriors are brave and strong, with a focus on physical damage and defense.
            </span>
            <br></br><br></br>
            <span>
              <label className='source-important'>Archers: </label>
              Experts in archery and ranged attacks, archers stand out for their precision and agility in combat.
            </span>
          </div>,
        statusOne: 'Warrior',
        statusTwo: 'Archer',
      },
      {
        title: 'Sorcerers',
        images: ['/game/classes/wizard.png', '/game/classes/priest.png'],
        description:
          <div className='source-description sorcerers'>
            <span>
              <label className='source-important'>Mages: </label>
              With mastery of elemental magic, mages cast powerful spells and control the elements to inflict magical damage.
            </span>
            <br></br><br></br>
            <span>
              <label className='source-important'>Priests: </label>
              Healers and protectors, priests possess healing abilities and divine blessings to keep their group alive during battles. Their combat skills are also not to be underestimated, only more difficult to develop.
            </span>
          </div>,
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
        <button id='prev-slide' type='button' onClick={handlePrevSlide}><ion-icon name="caret-back-circle"></ion-icon></button>
        <div className='carousel card'>
          <h2>{title}</h2>
          <div className='carousel img'>
            <div className='div-img'>
              <img src={images[0]} alt="reference image one" />
              <span>{statusOne}</span>
            </div>
            <div className='div-img'>
              <img src={images[1]} alt="reference image two" />
              <span>{statusTwo}</span>
            </div>
          </div>
          {description}
        </div>
        <button id='next-slide' type='button' onClick={handleNextSlide}><ion-icon name="caret-forward-circle"></ion-icon></button>
      </div>
      <div className='responsive-buttons-div'>
        <button type='button' onClick={handlePrevSlide}><ion-icon name="chevron-back-circle"></ion-icon></button>
        <button type='button' onClick={handleNextSlide}><ion-icon name="chevron-forward-circle"></ion-icon></button>
      </div>
      <div className='carousel buttons'>
        <button type='button' onClick={() => handleCategoryChange('World')}>World</button>
        <button type='button' onClick={() => handleCategoryChange('Breeds')}>Breeds</button>
        <button type='button' onClick={() => handleCategoryChange('Classes')}>Classes</button>
      </div>
    </div>
  );
}