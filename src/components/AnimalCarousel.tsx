import { motion } from 'motion/react';
import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import './AnimalCarousel.css';

interface Animal {
  imageSrc: string;
  emoji: string;
  commonName: string;
  scientificName: string;
  status: string;
  description: string;
}

interface AnimalCarouselProps {
  animals: Animal[];
}

export function AnimalCarousel({ animals }: AnimalCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const animationTiming = 27; // seconds
  const carouselItems = animals.length;
  const animationDelayFraction = animationTiming / carouselItems;

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="carousel-wrapper">
      {/* Control buttons */}


      {/* Carousel container */}
      <div 
        className={`carousel-container`}
      >
        {animals.map((animal, index) => (
          <motion.div
            key={index}
            className="carousel-item"
            style={{
              animationDelay: `${animationDelayFraction * (index - 1)}s`,
            }}
          >
            <div className="carousel-item-head">
              <img 
                src={animal.imageSrc} 
                alt={animal.commonName}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="carousel-item-emoji" role="img" aria-label={`Emoji de ${animal.commonName}`}>
                {animal.emoji}
              </div>
            </div>
            <div className="carousel-item-body">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-['Poppins',sans-serif] text-[#184e77] text-xl md:text-2xl mb-1">
                    {animal.commonName}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[#168aad] text-sm md:text-base italic mb-1">
                    {animal.scientificName}
                  </p>
                </div>
              </div>
              <p className="font-['Inter',sans-serif] text-[#636363] text-sm md:text-base leading-relaxed">
                {animal.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
