import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, ChevronUp, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Carlos Silva',
    role: 'Advogado Titular',
    company: 'Silva & Associados',
    avatar: '👨‍⚖️',
    rating: 5,
    text: 'A EasyJur transformou a forma como gerencio meu escritório. A automação de tarefas me economiza mais de 20 horas por semana.',
  },
  {
    name: 'Dra. Maria Santos',
    role: 'Sócia',
    company: 'Santos Advocacia',
    avatar: '👩‍⚖️',
    rating: 5,
    text: 'O melhor investimento que fizemos. A IA para análise de processos é incrível. Recomendo para todos os colegas.',
  },
  {
    name: 'Dr. Pedro Oliveira',
    role: 'Diretor Jurídico',
    company: 'Grupo Tech',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Sistema completo e intuitivo. O suporte é excelente e sempre ágil nas respostas.',
  },
  {
    name: 'Dra. Ana Costa',
    role: 'Advogada',
    company: 'Costa Advocacia',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Minha produtividade aumentou 85% em apenas 3 meses. Interface linda e funcional.',
  },
  {
    name: 'Dr. Roberto Lima',
    role: 'Gestor',
    company: 'Lima & Lima',
    avatar: '👨‍⚖️',
    rating: 5,
    text: 'Controle total dos prazos e processos. Nunca mais perdi uma data importante.',
  },
];

const faqs = [
  {
    question: 'Como funciona o período de teste grátis?',
    answer: 'Oferecemos 7 dias de teste gratuito com acesso completo a todas as funcionalidades. Não é necessário cartão de crédito para iniciar.',
  },
  {
    question: 'O sistema possui integração com tribunais?',
    answer: 'Sim! A EasyJur integra-se com os principais tribunais brasileiros, incluindo TJSP, TJRJ, TRF, STF, STJ e muito mais.',
  },
  {
    question: 'Meus dados estão seguros na nuvem?',
    answer: 'Absolutamente. Utilizamos criptografia de ponta (AES-256), servidores certificados ISO 27001 e backup automático diário.',
  },
  {
    question: 'Como é feito o suporte ao cliente?',
    answer: 'Oferecemos suporte por chat, e-mail, telefone e WhatsApp. Nossa equipe está disponível 24/7 para atender suas necessidades.',
  },
  {
    question: 'Posso migrar os dados de outro software para a EasyJur?',
    answer: 'Sim! Oferecemos serviço gratuito de migração de dados. Nossa equipe técnica garante uma transição tranquila.',
  },
];

function MarqueeItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ x: ['0%', '-100%'] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function TestimonialsFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            O que nossos clientes{' '}
            <span className="text-gradient">dizem sobre nós.</span>
          </h2>
        </motion.div>

        <div className="mb-24 overflow-hidden">
          <div className="flex gap-6">
            <MarqueeItem className="flex gap-6">
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-80 bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-black">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </MarqueeItem>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-black mb-8">Parceiros e Reconhecimentos</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'OAB', icon: '⚖️', desc: 'Certificação Oficial' },
                { name: 'G2', icon: '🏆', desc: 'Best Software 2024' },
                { name: 'ISO 27001', icon: '🔒', desc: 'Segurança Certificada' },
                { name: 'ANPD', icon: '📋', desc: 'LGPD Compliant' },
              ].map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
                >
                  <div className="text-4xl mb-3">{partner.icon}</div>
                  <div className="font-bold text-black">{partner.name}</div>
                  <div className="text-sm text-gray-500">{partner.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-black mb-8">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-black pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="px-4 pb-4 text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
