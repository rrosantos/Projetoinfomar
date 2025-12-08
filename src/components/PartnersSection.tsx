import { motion } from 'motion/react';

export function PartnersSection() {
  const partners = [
    { name: "Ministério do Meio Ambiente", logo: "🏛️", description: "Apoio governamental" },
    { name: "UNESCO", logo: "🌍", description: "Parceria internacional" },
    { name: "WWF Brasil", logo: "🐼", description: "Conservação ambiental" },
    { name: "Instituto Chico Mendes", logo: "🦜", description: "Biodiversidade" },
    { name: "Projeto Tamar", logo: "🐢", description: "Proteção de tartarugas" },
    { name: "Oceana Brasil", logo: "🌊", description: "Defesa dos oceanos" },
    { name: "SOS Mata Atlântica", logo: "🌳", description: "Preservação costeira" },
    { name: "Universidades Federais", logo: "🎓", description: "Pesquisa científica" },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32" id="parceiros">
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
          Trabalhamos em parceria com organizações comprometidas com a preservação marinha
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(22, 138, 173, 0.2)"
              }}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-lg border border-[#168aad]/10 transition-all duration-300 group"
            >
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-base md:text-lg mb-2">
                {partner.name}
              </h3>
              <p className="font-['Inter',sans-serif] text-[#636363] text-sm md:text-base">
                {partner.description}
              </p>
            </motion.div>
          ))}
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
