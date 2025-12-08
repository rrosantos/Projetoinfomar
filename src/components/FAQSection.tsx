import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como posso me tornar voluntário da INFOMAR?",
      answer: "Para se tornar voluntário, acesse nosso site e preencha o formulário de cadastro. Realizamos treinamentos mensais para novos voluntários, onde você aprenderá sobre conservação marinha, primeiros socorros para animais marinhos e técnicas de resgate. Não é necessário experiência prévia!"
    },
    {
      question: "Quanto das doações é destinado diretamente aos projetos?",
      answer: "Mantemos total transparência: 85% de todas as doações vão diretamente para os projetos de conservação. Os 15% restantes cobrem custos administrativos essenciais. Publicamos relatórios financeiros trimestrais detalhados para que você acompanhe o uso dos recursos."
    },
    {
      question: "Quais espécies marinhas a INFOMAR protege?",
      answer: "Trabalhamos com diversas espécies ameaçadas, incluindo tartarugas marinhas (5 espécies), baleias (Jubarte e Franca), golfinhos, peixes-boi marinhos, tubarões e raias. Também protegemos recifes de coral e ecossistemas de manguezais essenciais para a biodiversidade."
    },
    {
      question: "A INFOMAR aceita animais marinhos feridos?",
      answer: "Sim! Temos um centro de reabilitação equipado para receber animais marinhos feridos ou encalhados. Se você encontrar um animal marinho em perigo, entre em contato imediatamente com nossa linha de emergência 24h: (13) 3333-4444. Nossa equipe fornecerá orientações até chegar ao local."
    },
    {
      question: "Como a poluição plástica afeta os oceanos?",
      answer: "A poluição plástica mata mais de 1 milhão de animais marinhos anualmente. Microplásticos entram na cadeia alimentar, afetam a reprodução de espécies e destroem habitats. Nossos projetos incluem limpeza de praias, educação ambiental e desenvolvimento de alternativas sustentáveis ao plástico descartável."
    },
    {
      question: "Posso visitar as instalações da INFOMAR?",
      answer: "Sim! Oferecemos visitas guiadas educativas às quintas e sábados, das 9h às 16h. É necessário agendamento prévio através do nosso site ou telefone. As visitas incluem tour pelo centro de reabilitação, aquário educativo e palestras sobre conservação marinha. A entrada é gratuita!"
    },
    {
      question: "Como as mudanças climáticas afetam a vida marinha?",
      answer: "As mudanças climáticas causam aquecimento e acidificação dos oceanos, branqueamento de corais, alteração nas correntes marinhas e perda de habitat. Essas mudanças afetam a migração, reprodução e sobrevivência de inúmeras espécies. Nossos projetos de pesquisa monitoram esses impactos e desenvolvem estratégias de adaptação."
    },
    {
      question: "A INFOMAR trabalha com escolas?",
      answer: "Sim! Temos um programa educativo que atende escolas públicas e privadas. Oferecemos palestras, oficinas práticas, kits educativos e excursões ao nosso centro. Já impactamos mais de 50 mil estudantes. Entre em contato para agendar uma atividade educativa para sua escola!"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32" id="faq">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 uppercase"
        >
          Perguntas Frequentes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          Tire suas dúvidas sobre preservação marinha e nosso trabalho
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#168aad]/10 hover:border-[#168aad]/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-[#f0f9ff] transition-colors duration-300"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-lg md:text-xl flex-grow">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#168aad]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#168aad]" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 pt-2">
                      <p className="font-['Inter',sans-serif] text-[#636363] text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            Não encontrou a resposta?
          </p>
          <p className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl mb-6">
            Nossa equipe está pronta para ajudar você!
          </p>
          <button className="px-10 py-4 rounded-full font-['Poppins',sans-serif] font-bold text-lg md:text-xl text-white bg-gradient-to-r from-[#168aad] to-[#52b69a] hover:from-[#52b69a] hover:to-[#168aad] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Fale Conosco
          </button>
        </motion.div>
      </div>
    </section>
  );
}
