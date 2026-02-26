import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, BarChart3, Scale, FileText, Clock, Brain, TrendingUp, Wallet, X, ZoomIn } from 'lucide-react';
import { createPortal } from 'react-dom';

import dashboardImg from '../assets/images/dashboard-analytics.png';
import consultivoImg from '../assets/images/consultivo-II.png';
import contenciosoImg from '../assets/images/contenciosoII.png';
import automacaoImg from '../assets/images/automatizacao-de-docs.png';
import prazosImg from '../assets/images/controle-prazos.png';
import comercialImg from '../assets/images/novos-negocios.png';
import fluxoImg from '../assets/images/fluxo-de-caixa.png';

const benefits = [
  {
    icon: BarChart3,
    title: 'Dashboard Analytics',
    description: 'Acompanhe os principais indicadores do seu escritório em Tempo real e tome decisões mais estratégicas com insights visuais e gráficos interativos.',
    image: dashboardImg,
  },
  {
    icon: Scale,
    title: 'Gestão da Área Consultiva',
    description: 'Organize e otimize os processos consultivos do seu escritório, garantindo mais eficiência no atendimento aos clientes.',
    image: consultivoImg,
  },
  {
    icon: FileText,
    title: 'Gestão Completa Contencioso',
    description: 'Gerencie todos os casos contenciosos de forma centralizada, acompanhando prazos, processos e movimentações jurídicas.',
    image: contenciosoImg,
  },
  {
    icon: Clock,
    title: 'Automatização de Documentos',
    description: 'Reduza o tempo gasto com burocracias utilizando ferramentas de automação para criação e gerenciamento de documentos.',
    image: automacaoImg,
  },
  {
    icon: Brain,
    title: 'Controle de Prazos e Audiências com IA',
    description: 'Nunca mais perca um prazo! Utilize inteligência artificial para monitoramento e alertas automáticos de compromissos.',
    image: prazosImg,
  },
  {
    icon: TrendingUp,
    title: 'Gestão Comercial Estratégica',
    description: 'Potencialize seus resultados com uma gestão comercial eficaz, acompanhando leads, oportunidades e fechamentos.',
    image: comercialImg,
  },
  {
    icon: Wallet,
    title: 'Fluxo de Caixa Financeiro Automatizado',
    description: 'Controle as finanças do seu escritório de forma centralizada e automática, garantindo previsibilidade e segurança.',
    image: fluxoImg,
  },
];

const SLIDE_DURATION = 6000;

function ImageModal({ image, title, isOpen, onClose }: { image: string; title: string; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl max-h-[90vh] overflow-auto"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateProgress = () => {
      if (!isHovered) {
        const elapsed = Date.now() - startTime + (activeIndex * SLIDE_DURATION);
        const newProgress = (elapsed % SLIDE_DURATION) / SLIDE_DURATION;
        setProgress(newProgress);
      }
    };

    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % benefits.length);
        setProgress(0);
      }
    }, SLIDE_DURATION);

    progressRef.current = setInterval(updateProgress, 16);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isHovered]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tudo o que seu escritório de advocacia precisa.{' '}
            <span className="text-gradient">Tudo em um clique.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A um clique de distância, você tem acesso a todas as ferramentas necessárias para 
            uma gestão jurídica eficiente e moderna.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                  index === activeIndex 
                    ? 'bg-white dark:bg-gray-800 shadow-md' 
                    : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  <benefit.icon className={`w-5 h-5 ${index === activeIndex ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
                </div>
                <div className="flex-1 pr-4">
                  <h3 className={`font-medium ${index === activeIndex ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                    {benefit.title}
                  </h3>
                </div>
                {index === activeIndex && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100 dark:bg-gray-700 rounded-b-xl overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress * 100}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-3"
                >
                  <div 
                    className="relative group cursor-zoom-in"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img
                      src={benefits[activeIndex].image.src}
                      alt={benefits[activeIndex].title}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 p-5 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {benefits[activeIndex].title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {benefits[activeIndex].description}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 py-4 bg-white dark:bg-gray-800">
                {benefits.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      setProgress(0);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ImageModal
        image={benefits[activeIndex].image.src}
        title={benefits[activeIndex].title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
