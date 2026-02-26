import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import Marquee from './ui/marquee';
import { cn } from '../lib/utils';

import selos100OpenStartups from '../assets/images/selos/100_open_startups.png';
import selosB2bAwardsGestao from '../assets/images/selos/b2b-awards-gestao-escritorios.png';
import selosB2bAwardsPequeno from '../assets/images/selos/b2b-awards-escritorio-pequeno-porte.png';
import selosAb2l from '../assets/images/selos/logo-ab2l-2023.svg';

import profile1 from '../assets/images/profiles/Screenshot_1.png';
import profile2 from '../assets/images/profiles/Screenshot_2.png';
import profile3 from '../assets/images/profiles/Screenshot_3.png';
import profile4 from '../assets/images/profiles/Screenshot_4.png';
import profile5 from '../assets/images/profiles/Screenshot_5.png';
import profile6 from '../assets/images/profiles/Screenshot_6.png';

import profile7 from '../assets/images/profiles/Screenshot_7.png';

import profile8 from '../assets/images/profiles/Screenshot_8.png';

import profile10 from '../assets/images/profiles/Screenshot_10.png';

const profiles = [profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8, profile10];

const testimonials = [
  {
    name: "Dr. Carlos Silva",
    username: "@carlos_silva",
    role: "Advogado Titular",
    company: "Silva & Associados",
    rating: 5,
    body: 'A EasyJur transformou a forma como gerencio meu escritório. A automação de tarefas me economiza mais de 20 horas por semana.',
    img: profiles[0],
  },
  {
    name: "Dra. Maria Santos",
    username: "@maria_santos",
    role: "Sócia",
    company: "Santos Advocacia",
    rating: 5,
    body: 'O melhor investimento que fizemos. A IA para análise de processos é incrível. Recomendo para todos os colegas.',
    img: profile10,
  },
  {
    name: "Dr. Pedro Oliveira",
    username: "@pedro_oliveira",
    role: "Diretor Jurídico",
    company: "Grupo Tech",
    rating: 5,
    body: 'Sistema completo e intuitivo. O suporte é excelente e sempre ágil nas respostas.',
    img: profile7,
  },
  {
    name: "Dra. Ana Costa",
    username: "@ana_costa",
    role: "Advogada",
    company: "Costa Advocacia",
    rating: 5,
    body: 'Minha produtividade aumentou 85% em apenas 3 meses. Interface linda e funcional.',
    img: profiles[3],
  },
  {
    name: "Dr. Roberto Lima",
    username: "@roberto_lima",
    role: "Gestor",
    company: "Lima & Lima",
    rating: 5,
    body: 'Controle total dos prazos e processos. Nunca mais perdi uma data importante.',
    img: profile8,
  },
  {
    name: "Dra. Juliana Alves",
    username: "@juliana_alves",
    role: "Sócia Fundadora",
    company: "Alves & Partners",
    rating: 5,
    body: 'A melhor ferramenta para gestão de escritórios jurídicos. O módulo financeiro é espetacular!',
    img: profiles[5],
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

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

function ReviewCard({
  name,
  username,
  role,
  rating,
  body,
  img,
}: {
  name: string;
  username: string;
  role: string;
  rating: number;
  body: string;
  img?: { src: string };
}) {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-200 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md dark:border-gray-700",
        "dark:hover:bg-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-2 mb-3">
        {img ? (
          <img
            src={img.src}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500">{username}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-sm text-gray-600 dark:text-gray-300">{body}</blockquote>
    </figure>
  );
}

export default function TestimonialsFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            O que nossos clientes{' '}
            <span className="text-gradient">dizem sobre nós.</span>
          </h2>
        </motion.div>

        <div className="mb-24 relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((testimonial) => (
              <ReviewCard
                key={testimonial.username}
                name={testimonial.name}
                username={testimonial.username}
                role={testimonial.role}
                rating={testimonial.rating}
                body={testimonial.body}
                img={testimonial.img}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial) => (
              <ReviewCard
                key={testimonial.username}
                name={testimonial.name}
                username={testimonial.username}
                role={testimonial.role}
                rating={testimonial.rating}
                body={testimonial.body}
                img={testimonial.img}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-gray-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-gray-900"></div>
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
                { name: 'Top Open Startups', img: selos100OpenStartups, desc: '100 Open Startups 2024' },
                { name: 'Gestao Escritorios', img: selosB2bAwardsGestao, desc: 'B2B Awards' },
                { name: 'Escritorio Pequeno Porte', img: selosB2bAwardsPequeno, desc: 'B2B Awards' },
                { name: 'AB2L', img: selosAb2l, desc: 'Associação Brasileira de LegalTechs' },
              ].map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img src={partner.img.src} alt={partner.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{partner.desc}</div>
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
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium text-black dark:text-white pr-4">{faq.question}</span>
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
                        <p className="px-4 pb-4 text-gray-600 dark:text-gray-300">{faq.answer}</p>
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
