import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1525826314705-2df768a27817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNvbnNlcnZhdGlvbiUyMHByb2plY3QlMjBwaG90b3N8ZW58MXx8fHwxNzY1MTYyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Resgate de Tartarugas",
      description: "Equipe INFOMAR resgatando tartaruga marinha"
    },
    {
      url: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNsZWFudXAlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc2NTE2MjM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Limpeza de Praias",
      description: "Voluntários coletando resíduos plásticos"
    },
    {
      url: "https://images.unsplash.com/photo-1659609288520-acc88e9bd913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NjUxNjIzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Restauração de Corais",
      description: "Projeto de recuperação de recifes"
    },
    {
      url: "https://images.unsplash.com/photo-1764042479926-ad71abe9d5ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBiaW9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2NTE2MjM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Educação Ambiental",
      description: "Palestras educativas em escolas"
    },
    {
      url: "https://images.unsplash.com/photo-1612504422777-ab7bda836681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMG5ld3MlMjByZXNlYXJjaHxlbnwxfHx8fDE3NjUxNjIzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Pesquisa Científica",
      description: "Estudos sobre biodiversidade marinha"
    },
    {
      url: "https://images.unsplash.com/photo-1637308107404-7003fa527de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBjb25zZXJ2YXRpb24lMjBwYXJ0bmVyc3xlbnwxfHx8fDE3NjUxNjIzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Monitoramento",
      description: "Acompanhamento de espécies ameaçadas"
    }
  ];

  return (
    <>
      <section className="bg-[#e2e2e2] py-16 md:py-24 lg:py-32" id="galeria">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 uppercase"
          >
            Galeria de Projetos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 md:mb-16"
          >
            Registros fotográficos de nossas ações em defesa dos oceanos
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003049]/90 via-[#003049]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-['Poppins',sans-serif] font-bold text-white text-xl md:text-2xl mb-2">
                    {image.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-white/90 text-sm md:text-base">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de imagem ampliada */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#52b69a] transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar imagem"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      )}
    </>
  );
}
