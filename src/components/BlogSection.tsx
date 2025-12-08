import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function BlogSection() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1612504422777-ab7bda836681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMG5ld3MlMjByZXNlYXJjaHxlbnwxfHx8fDE3NjUxNjIzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Nova espécie de coral descoberta na costa brasileira",
      excerpt: "Pesquisadores da INFOMAR identificaram uma nova espécie de coral na Bahia, reforçando a importância da biodiversidade marinha do Brasil.",
      date: "5 Dezembro 2024",
      readTime: "5 min",
      category: "Pesquisa"
    },
    {
      image: "https://images.unsplash.com/photo-1659609288520-acc88e9bd913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NjUxNjIzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Projeto de restauração de corais alcança marca de 10 mil mudas",
      excerpt: "Nosso projeto de restauração de recifes de coral celebra um marco importante com o plantio de 10 mil mudas em áreas degradadas.",
      date: "1 Dezembro 2024",
      readTime: "4 min",
      category: "Projetos"
    },
    {
      image: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNsZWFudXAlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc2NTE2MjM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Mutirão recolhe 2 toneladas de plástico em praias de Santos",
      excerpt: "Com a participação de 200 voluntários, realizamos a maior operação de limpeza de praias da região metropolitana de Santos.",
      date: "28 Novembro 2024",
      readTime: "3 min",
      category: "Ação"
    }
  ];

  return (
    <section className="bg-[#f0f9ff] py-16 md:py-24 lg:py-32" id="noticias">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 uppercase"
        >
          Notícias e Atualizações
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          Acompanhe as últimas novidades sobre conservação marinha
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#168aad] text-white px-4 py-2 rounded-full text-sm font-['Poppins',sans-serif] font-bold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 text-[#636363] text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-['Inter',sans-serif]">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-['Inter',sans-serif]">{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-xl md:text-2xl mb-4 group-hover:text-[#168aad] transition-colors">
                  {post.title}
                </h3>

                <p className="font-['Inter',sans-serif] text-[#636363] text-base md:text-lg mb-6 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <button 
                  onClick={() => toast.info("Artigo completo em breve!")}
                  className="flex items-center gap-2 text-[#168aad] font-['Poppins',sans-serif] font-bold hover:gap-4 transition-all duration-300"
                >
                  Ler mais <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => toast.info("Blog completo em desenvolvimento!")}
            className="px-10 py-4 rounded-full font-['Poppins',sans-serif] font-bold text-lg md:text-xl text-[#184e77] bg-[#d9ed92] hover:bg-[#c9dd82] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Todas as Notícias
          </button>
        </motion.div>
      </div>
    </section>
  );
}
