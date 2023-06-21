import '../style/SectionMedia.scss'
import { useState, useEffect } from 'react';

export default function AutomaticCarousel() {
    const slides = [
        {
            image: '/media/news-1.png',
            title: 'New Maps: These 3 new maps full of adventure will make your days have to be well managed.',
            description: 'Descripción del Slide 1',
        },
        {
            image: '/media/news-2.png',
            title: 'New potion: Incorporated to all Lotus taverns.',
            description: 'Descripción del Slide 2',
        },
        {
            image: '/media/news-3.gif',
            title: 'New dungeon: In Hitom, discover it.',
            description: 'Descripción del Slide 3',
        },
        {
            image: '/media/news-4.jpg',
            title: 'Secret Missions: In the castles of the Viceroyalty of Lotus.',
            description: 'Descripción del Slide 4',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 3000);

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