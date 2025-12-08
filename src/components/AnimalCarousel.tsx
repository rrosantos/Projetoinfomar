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
      <motion.div 
        className="flex justify-center items-center gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={togglePause}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-['Inter',sans-serif] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{
            background: isPaused 
              ? 'linear-gradient(135deg, #52b69a 0%, #168aad 100%)'
              : 'linear-gradient(135deg, #168aad 0%, #52b69a 100%)',
          }}
          aria-label={isPaused ? 'Retomar carrossel' : 'Pausar carrossel'}
        >
          {isPaused ? (
            <>
              <Play className="w-5 h-5" />
              <span>Retomar</span>
            </>
          ) : (
            <>
              <Pause className="w-5 h-5" />
              <span>Pausar</span>
            </>
          )}
        </button>
        <p className="font-['Inter',sans-serif] text-[#168aad] text-sm">
          {animals.length} espécies em destaque
        </p>
      </motion.div>

      {/* Carousel container */}
      <div 
        className={`carousel-container ${isPaused ? 'paused' : ''}`}
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
              <div 
                className="inline-block px-4 py-1.5 rounded-full mb-3 text-sm font-medium"
                style={{
                  backgroundColor: animal.status.toLowerCase().includes('criticamente') 
                    ? '#ff4444' 
                    : animal.status.toLowerCase().includes('perigo')
                    ? '#ff9800'
                    : '#ffc107',
                  color: '#ffffff',
                }}
              >
                {animal.status}
              </div>
              <p className="font-['Inter',sans-serif] text-[#636363] text-sm md:text-base leading-relaxed">
                {animal.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress indicator dots */}
      <motion.div 
        className="flex justify-center gap-2 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {animals.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#168aad',
              opacity: 0.3,
            }}
            aria-label={`Indicador ${index + 1} de ${animals.length}`}
          />
        ))}
      </motion.div>

      {/* Info text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-6 font-['Inter',sans-serif] text-[#636363] text-sm"
      >
        Passe o mouse sobre o carrossel para pausar automaticamente
      </motion.p>
    </div>
  );
}
