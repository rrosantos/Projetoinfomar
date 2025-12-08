import { motion } from "motion/react";
import "./PartnersSection.css";

export function PartnersSection() {
  const partners = [
    { name: "Ministério do Meio Ambiente", logo: "🏛️" },
    { name: "UNESCO", logo: "🌍" },
    { name: "WWF Brasil", logo: "🐼" },
    { name: "Instituto Chico Mendes", logo: "🦜" },
    { name: "Projeto Tamar", logo: "🐢" },
    { name: "Oceana Brasil", logo: "🌊" },
    { name: "SOS Mata Atlântica", logo: "🌳" },
    { name: "Universidades Federais", logo: "🎓" },
  ];

  // Duplicar os parceiros para criar o efeito infinito
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-16 md:py-24" id="parceiros">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 uppercase"
        >
          Nossos Parceiros
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          Trabalhamos em parceria com organizações comprometidas com a
          preservação marinha
        </motion.p>

        {/* Slider de parceiros */}
        <div className="partners-slider">
          <div className="partners-slide-track">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partners-slide">
                <div className="partners-slide-content">
                  <span className="partners-logo">{partner.logo}</span>
                  <span className="partners-name">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-['Poppins',sans-serif] font-bold text-[#168aad] text-xl md:text-2xl mb-4">
            Quer ser nosso parceiro?
          </p>
          <button className="px-10 py-4 rounded-full font-['Poppins',sans-serif] font-bold text-lg md:text-xl text-white bg-gradient-to-r from-[#168aad] to-[#52b69a] hover:from-[#52b69a] hover:to-[#168aad] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Entre em Contato
          </button>
        </motion.div>
      </div>
    </section>
  );
}
