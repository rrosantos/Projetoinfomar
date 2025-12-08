import { motion } from 'motion/react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Paula Silva",
      role: "Voluntária desde 2020",
      photo: "https://images.unsplash.com/photo-1751730740515-5bf81a1a955c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHZvbHVudGVlciUyMHdvbWFufGVufDF8fHx8MTc2NTE1ODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Ser voluntária da INFOMAR mudou minha vida! Ver o sorriso de uma tartaruga sendo devolvida ao mar é indescritível. Aqui aprendi que cada pequena ação conta para salvar nossos oceanos.",
      stars: 5
    },
    {
      name: "Carlos Mendes",
      role: "Pescador e colaborador",
      photo: "https://images.unsplash.com/photo-1729559149720-2b6c5c200428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHZvbHVudGVlciUyMG1hbnxlbnwxfHx8fDE3NjUxNTg0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Como pescador, vi de perto os danos que a poluição causa. A INFOMAR me ensinou técnicas sustentáveis e agora sou parte da solução. Meus filhos terão um oceano mais saudável.",
      stars: 5
    },
    {
      name: "Juliana Costa",
      role: "Professora parceira",
      photo: "https://images.unsplash.com/photo-1557353425-09253747c2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW4lMjBzbWlsZXxlbnwxfHx8fDE3NjUxNTg0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Trouxe meus alunos para conhecer o trabalho da ONG e foi transformador! Eles aprenderam sobre respeito à natureza e voltaram como pequenos guardiões dos oceanos.",
      stars: 5
    },
    {
      name: "Roberto Almeida",
      role: "Biólogo marinho",
      photo: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjUxMzg2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "A INFOMAR combina ciência de ponta com ação prática. É inspirador ver uma organização tão comprometida com dados reais e resultados concretos na conservação marinha.",
      stars: 5
    },
    {
      name: "Marina Oliveira",
      role: "Turista de Santos",
      photo: "https://images.unsplash.com/photo-1751730740515-5bf81a1a955c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHZvbHVudGVlciUyMHdvbWFufGVufDF8fHx8MTc2NTE1ODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Visitei a INFOMAR em uma excursão e fiquei impressionada com o trabalho incrível. A dedicação da equipe é inspiradora e me fez repensar meus hábitos em relação ao plástico.",
      stars: 5
    },
    {
      name: "Pedro Santos",
      role: "Apoiador mensal",
      photo: "https://images.unsplash.com/photo-1729559149720-2b6c5c200428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHZvbHVudGVlciUyMG1hbnxlbnwxfHx8fDE3NjUxNTg0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Fazer doações mensais para a INFOMAR me dá certeza de que estou contribuindo para um futuro melhor. Ver os relatórios de impacto me deixa orgulhoso de fazer parte disso!",
      stars: 5
    }
  ];

  return (
    <section className="bg-[#f0f9ff] py-16 md:py-24 lg:py-32 overflow-hidden" id="depoimentos">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 uppercase"
        >
          Depoimentos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          Histórias reais de quem faz parte da nossa missão de proteger os oceanos.
        </motion.p>

        {/* Carrossel infinito */}
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              style={{ '--i': index } as React.CSSProperties}
            >
              {/* Foto circular */}
              <div className="testimonial-photo-wrapper">
                <div className="testimonial-photo">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                  />
                </div>
                {/* Badge oceânico */}
                <div className="testimonial-badge">
                  🌊
                </div>
              </div>

              {/* Nome e cargo */}
              <div className="testimonial-header">
                <h3>{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>

              {/* Conteúdo */}
              <div className="testimonial-content">
                {/* Estrelas */}
                <div className="testimonial-stars">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>

                {/* Texto do depoimento */}
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-carousel {
          --items: ${testimonials.length};
          --carousel-duration: 40s;
          --carousel-width: min(90vw, 1200px);
          --carousel-item-width: 320px;
          --carousel-item-height: 480px;
          --carousel-item-gap: 2rem;
          
          position: relative;
          width: var(--carousel-width);
          height: var(--carousel-item-height);
          margin: 0 auto;
          overflow: clip;
          
          /* Fade nas laterais */
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10% 90%,
            transparent
          );
        }

        @media (width > 768px) {
          .testimonials-carousel {
            --carousel-duration: 50s;
            --carousel-item-width: 350px;
            --carousel-item-height: 500px;
          }
        }

        /* Pausa no hover */
        .testimonials-carousel:hover > article {
          animation-play-state: paused;
        }

        .testimonials-carousel > article {
          position: absolute;
          top: 0;
          left: calc(100% + var(--carousel-item-gap));
          width: var(--carousel-item-width);
          height: var(--carousel-item-height);
          
          display: flex;
          flex-direction: column;
          gap: 1rem;
          
          padding: 2rem 1.5rem;
          border-radius: 24px;
          
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(200, 230, 245, 0.8) 100%);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(22, 138, 173, 0.2);
          box-shadow: 0 8px 32px rgba(22, 138, 173, 0.15);
          
          /* Animação infinita */
          will-change: transform;
          animation-name: carousel-scroll;
          animation-duration: var(--carousel-duration);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * var(--i) * -1
          );
        }

        @keyframes carousel-scroll {
          100% {
            transform: translateX(
              calc(
                (var(--items) * (var(--carousel-item-width) + var(--carousel-item-gap))) * -1
              )
            );
          }
        }

        /* Foto circular */
        .testimonial-photo-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .testimonial-photo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #168aad;
          box-shadow: 0 4px 12px rgba(22, 138, 173, 0.3);
        }

        .testimonial-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Badge decorativo */
        .testimonial-badge {
          position: absolute;
          bottom: 0;
          right: calc(50% - 60px);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          background: linear-gradient(135deg, #d9ed92 0%, #90E0EF 100%);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        /* Header do depoimento */
        .testimonial-header {
          text-align: center;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(22, 138, 173, 0.15);
        }

        .testimonial-header h3 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #184e77;
          font-size: 1.25rem;
          margin: 0 0 0.25rem 0;
        }

        .testimonial-role {
          font-family: 'Inter', sans-serif;
          color: #52b69a;
          font-size: 0.9rem;
          margin: 0;
        }

        /* Conteúdo */
        .testimonial-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Estrelas */
        .testimonial-stars {
          display: flex;
          justify-content: center;
          gap: 0.25rem;
          font-size: 1.25rem;
        }

        /* Texto do depoimento */
        .testimonial-text {
          font-family: 'Inter', sans-serif;
          color: #184e77;
          font-size: 0.95rem;
          line-height: 1.6;
          text-align: center;
          font-style: italic;
          margin: 0;
          flex: 1;
        }

        /* Responsivo mobile */
        @media (max-width: 767px) {
          .testimonials-carousel {
            --carousel-item-width: 280px;
            --carousel-item-height: 460px;
            --carousel-item-gap: 1.5rem;
          }

          .testimonial-photo {
            width: 80px;
            height: 80px;
          }

          .testimonial-badge {
            right: calc(50% - 50px);
            width: 32px;
            height: 32px;
            font-size: 1rem;
          }

          .testimonial-header h3 {
            font-size: 1.1rem;
          }

          .testimonial-role {
            font-size: 0.85rem;
          }

          .testimonial-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
