import { motion } from 'motion/react';
import { useCountUp } from '../hooks/useCountUp';
import { useState, useEffect, useRef } from 'react';
import { Waves, Heart, Users, TreePine } from 'lucide-react';

export function ImpactSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const impacts = [
    {
      value: useCountUp(850, inView, 2000),
      label: 'Animais Marinhos Resgatados',
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />,
      color: '#52b69a',
    },
    {
      value: useCountUp(1200, inView, 2000),
      label: 'Toneladas de Lixo Removidas',
      icon: <Waves className="w-8 h-8 md:w-10 md:h-10" />,
      color: '#168aad',
    },
    {
      value: useCountUp(15000, inView, 2000),
      label: 'Voluntários Engajados',
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      color: '#d9ed92',
    },
    {
      value: useCountUp(42, inView, 2000),
      label: 'Áreas Marinhas Protegidas',
      icon: <TreePine className="w-8 h-8 md:w-10 md:h-10" />,
      color: '#90E0EF',
    },
  ];

  return (
    <section 
      id="impacto" 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #e8f8f5 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, #168aad 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #52b69a 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nosso Impacto
          </motion.h2>
          <motion.p 
            className="font-['Inter',sans-serif] text-[#168aad] text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Resultados concretos que transformam a vida marinha e inspiram mudanças
          </motion.p>
        </motion.div>

        {/* Grid de impacto com contadores animados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div 
                className="relative p-8 rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(22, 138, 173, 0.15)',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                }}
              >
                {/* Ícone */}
                <motion.div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ 
                    backgroundColor: impact.color,
                    color: '#ffffff',
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {impact.icon}
                </motion.div>

                {/* Contador animado */}
                <div className="text-center">
                  <motion.div 
                    className="font-['Poppins',sans-serif] text-[#184e77] mb-3"
                    style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {impact.value.toLocaleString('pt-BR')}
                    <span className="text-2xl md:text-3xl">+</span>
                  </motion.div>
                  <p className="font-['Inter',sans-serif] text-[#168aad] text-sm md:text-base leading-snug">
                    {impact.label}
                  </p>
                </div>

                {/* Efeito de brilho no hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${impact.color}15 0%, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="font-['Inter',sans-serif] text-[#168aad] text-lg md:text-xl mb-6">
            Faça parte dessa transformação e ajude-nos a ampliar nosso impacto
          </p>
          <motion.button
            onClick={() => document.getElementById('apoie')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full font-['Poppins',sans-serif] text-white text-lg bg-gradient-to-r from-[#168aad] to-[#52b69a] hover:from-[#52b69a] hover:to-[#168aad] transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Ir para seção Como Ajudar"
          >
            Quero Fazer a Diferença
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
