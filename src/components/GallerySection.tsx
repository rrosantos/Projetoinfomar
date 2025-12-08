import { motion } from "motion/react";
import "./GallerySection.css";

export function GallerySection() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1525826314705-2df768a27817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      thumb:
        "https://images.unsplash.com/photo-1525826314705-2df768a27817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      title: "Resgate de Tartarugas",
      credit: "Foto: Equipe INFOMAR",
    },
    {
      url: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      thumb:
        "https://images.unsplash.com/photo-1616680214084-22670de1bc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      title: "Limpeza de Praias",
      credit: "Foto: Voluntários INFOMAR",
    },
    {
      url: "https://images.unsplash.com/photo-1659609288520-acc88e9bd913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      thumb:
        "https://images.unsplash.com/photo-1659609288520-acc88e9bd913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      title: "Restauração de Corais",
      credit: "Foto: Projeto Recifes",
    },
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      thumb:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      title: "Educação Ambiental",
      credit: "Foto: Escola do Mar",
    },
    {
      url: "https://images.unsplash.com/photo-1612504422777-ab7bda836681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      thumb:
        "https://images.unsplash.com/photo-1612504422777-ab7bda836681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      title: "Pesquisa Científica",
      credit: "Foto: Laboratório Marinho",
    },
    {
      url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      thumb:
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      title: "Monitoramento de Espécies",
      credit: "Foto: Biologia Marinha",
    },
  ];

  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-container">
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

        <div className="gallery-carousel">
          <input
            type="radio"
            name="gallery-slides"
            defaultChecked
            id="gallery-slide-1"
          />
          <input type="radio" name="gallery-slides" id="gallery-slide-2" />
          <input type="radio" name="gallery-slides" id="gallery-slide-3" />
          <input type="radio" name="gallery-slides" id="gallery-slide-4" />
          <input type="radio" name="gallery-slides" id="gallery-slide-5" />
          <input type="radio" name="gallery-slides" id="gallery-slide-6" />

          <ul className="gallery-carousel__slides">
            {galleryImages.map((image, index) => (
              <li key={index} className="gallery-carousel__slide">
                <figure>
                  <div className="gallery-carousel__image-wrapper">
                    <img src={image.url} alt={image.title} />
                  </div>
                  <figcaption>
                    <h3>{image.title}</h3>
                    <span className="gallery-credit">{image.credit}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <ul className="gallery-carousel__thumbnails">
            {galleryImages.map((image, index) => (
              <li key={index}>
                <label htmlFor={`gallery-slide-${index + 1}`}>
                  <img src={image.thumb} alt={`Thumbnail ${index + 1}`} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
