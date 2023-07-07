import '../style/SectionMedia.scss'
import { useState, useEffect } from 'react';

export default function AutomaticCarousel() {
    const slides = [
        {
            image: '/media/news-1.webp',
            title: 'New Maps: These 3 new maps full of adventure will make your days have to be well managed.',
            description: 'These 3 new maps full of adventure will make your days have to be well planned in Hunters. Explore unknown lands, challenging dungeons and breathtaking landscapes as you dive into exciting quests and face dangerous enemies.',
        },
        {
            image: '/media/news-2.webp',
            title: 'New potion: Incorporated to all Lotus taverns.',
            description: 'Available in all Lotus taverns! Discover the power of this new potion that will give you advantages and benefits in your adventure, visit the Lotus taverns and take advantage of this exciting addition to your arsenal!',
        },
        {
            image: '/media/news-3.gif',
            title: 'New dungeon: In Hitom, discover it.',
            description: 'In Hitom, discover it! Delve into the darkness of this mysterious dungeon deep in the Hitom region. Face epic challenges, obtain valuable treasures and unravel the secrets that await inside.',
        },
        {
            image: '/media/news-4.webp',
            title: 'Secret Missions: In the castles of the Viceroyalty of Lotus.',
            description: 'In the castles of the Viceroyalty of Lotus! Delve into the fortified castles of the Viceroyalty of Lotus and discover exciting secret quests that will test your skills. Face dangerous situations, uncover conspiracies and unlock unique rewards as you explore these enigmatic castles.',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 3500);

        return () => clearInterval(interval);
    }, [slides.length]);

    const { image, title, description } = slides[currentSlide];

    return (
        <div>
            <h2>Breaking News</h2>
            <img src={image} alt='Breaking News' />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};