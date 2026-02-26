"use client"

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/ui/animated-list';
import { Calendar, ChevronRight, Check, Scale, Bell, Wallet, Cloud, FileBarChart, type LucideIcon } from 'lucide-react';

const BRAND_COLORS = {
  primary: '#E5293F',
  primaryLight: '#FF4D5E',
  primaryDark: '#A82130',
  primaryFade: '#FDEAEC',
};

interface BenefitItem {
  name: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
  time: string
}

const benefits: BenefitItem[] = [
  {
    name: "Gestão de Processos e Prazos",
    description: "Controle total sobre os andamentos e tribunais.",
    icon: Scale,
    color: BRAND_COLORS.primary,
    bgColor: '#ffffff',
    time: "✓ Ativo",
  },
  {
    name: "Publicações e Intimações",
    description: "Receba e trate suas notificações automaticamente.",
    icon: Bell,
    color: BRAND_COLORS.primary,
    bgColor: '#ffffff',
    time: "✓ Ativo",
  },
  {
    name: "Gestão Financeira Completa",
    description: "Fluxo de caixa, honorários, DRE e emissão de notas.",
    icon: Wallet,
    color: BRAND_COLORS.primary,
    bgColor: '#ffffff',
    time: "✓ Ativo",
  },
  {
    name: "GED (Gestão de Documentos)",
    description: "Armazenamento em nuvem seguro e organizado.",
    icon: Cloud,
    color: BRAND_COLORS.primary,
    bgColor: '#ffffff',
    time: "✓ Ativo",
  },
  {
    name: "Relatórios Customizados",
    description: "Informações precisas para a tomada de decisão.",
    icon: FileBarChart,
    color: BRAND_COLORS.primary,
    bgColor: '#ffffff',
    time: "✓ Ativo",
  },
]

const repeatedBenefits = Array.from({ length: 10 }, () => benefits).flat()

const Notification = ({ name, description, icon: Icon, color, bgColor, time }: BenefitItem) => {
  return (
    <figure
      className={cn(
        "relative min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre">
            <span className="text-sm sm:text-lg text-black">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

function AnimatedBenefitsList() {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2"
      )}
    >
      <AnimatedList delay={2500}>
        {repeatedBenefits.map((item, idx) => (
          <Notification key={idx} {...item} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}

const telemetryMessages = [
  '📊 Processando 1.247 processos...',
  '✅ Busca automática em 50 tribunais',
  '🔔 3 novas intimações recebidas',
  '📝 Petição automática gerada',
  '💾 Backup concluído com sucesso',
  '⚡ IA analisou 45 documentos',
  '📧 E-mail enviado para cliente',
  '⏰ Alerta: Prazo vence em 2 dias',
];

function TelemetryTypewriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const message = telemetryMessages[currentIndex];
    
    if (!isDeleting) {
      if (displayText.length < message.length) {
        const timeout = setTimeout(() => {
          setDisplayText(message.slice(0, displayText.length + 1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % telemetryMessages.length);
      }
    }
  }, [displayText, currentIndex, isDeleting]);

  return (
    <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        <span className="text-gray-500 text-xs uppercase tracking-wider">System Log</span>
      </div>
      <div className="flex-1 flex items-center">
        <div className="text-green-400 text-lg">
          {displayText}
          <span className="animate-blink">|</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-gray-500 text-xs">Online</span>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: BRAND_COLORS.primary }}>⚡</span>
          <span className="text-gray-500 text-xs">Automações ativas</span>
        </div>
      </div>
    </div>
  );
}

function ProtocolScheduler() {
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const [step, setStep] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [visibleDays, setVisibleDays] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const runAnimation = useCallback(() => {
    setVisibleDays([]);
    setSelectedDay(null);
    setIsSaving(false);
    setIsSaved(false);
    setStep(0);

    setTimeout(() => setVisibleDays([0, 1, 2]), 100);
    setTimeout(() => setVisibleDays([0, 1, 2, 3]), 200);
    setTimeout(() => setVisibleDays([0, 1, 2, 3, 4]), 300);
    setTimeout(() => setVisibleDays([0, 1, 2, 3, 4, 5]), 400);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      runAnimation();
      const interval = setInterval(() => {
        if (!isHovered) {
          runAnimation();
        }
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered, runAnimation]);

  useEffect(() => {
    if (visibleDays.length === 6 && !isHovered) {
      const selectTimer = setTimeout(() => {
        setSelectedDay(Math.floor(Math.random() * 6));
        setStep(1);
      }, 500);
      return () => clearTimeout(selectTimer);
    }
  }, [visibleDays, isHovered]);

  useEffect(() => {
    if (step === 1 && selectedDay !== null && !isHovered) {
      const saveTimer = setTimeout(() => {
        setIsSaving(true);
        setStep(2);
      }, 700);
      return () => clearTimeout(saveTimer);
    }
  }, [step, selectedDay, isHovered]);

  useEffect(() => {
    if (isSaving && !isHovered) {
      const finishTimer = setTimeout(() => {
        setIsSaving(false);
        setIsSaved(true);
        setStep(3);
      }, 1500);
      return () => clearTimeout(finishTimer);
    }
  }, [isSaving, isHovered]);

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h4 
          className="font-semibold text-black dark:text-white"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Agendamento
        </motion.h4>
        <motion.div
          animate={{ opacity: isSaving ? 1 : isSaved ? 1 : 0 }}
          className="flex items-center gap-2"
        >
          {isSaving ? (
            <span className="text-xs text-gray-500">Salvando...</span>
          ) : isSaved ? (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-xs font-medium"
              style={{ color: BRAND_COLORS.primary }}
            >
              ✓ Salvo com sucesso
            </motion.span>
          ) : null}
        </motion.div>
      </div>
      
      <div className="grid grid-cols-6 gap-2 mb-6">
        {days.map((day, index) => (
          <motion.button
            key={day}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: visibleDays.includes(index) ? 1 : 0,
              scale: visibleDays.includes(index) ? 1 : 0.5,
              backgroundColor: selectedDay === index ? BRAND_COLORS.primary : 'rgb(243, 244, 246)',
              color: selectedDay === index ? 'white' : 'rgb(75, 85, 99)',
              boxShadow: selectedDay === index ? `0 10px 15px -3px ${BRAND_COLORS.primary}50` : 'none'
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl text-center relative overflow-hidden"
          >
            <span className="relative z-10 text-sm font-medium">{day}</span>
            {selectedDay === index && (
              <motion.div
                layoutId="selectedDayBg"
                className="absolute inset-0 bg-white/20"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="relative">
        <motion.button
          disabled={!isSaved}
          animate={{ 
            backgroundColor: isSaved ? BRAND_COLORS.primary : 'rgb(0, 0, 0)',
            scale: 1
          }}
          whileHover={{ scale: isSaved ? 1.02 : 1 }}
          whileTap={{ scale: isSaved ? 0.98 : 1 }}
          className={`w-full py-3 px-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2 min-h-[48px] ${
            isSaved ? 'text-white' : 'text-gray-400'
          }`}
        >
          {isSaving ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : isSaved ? (
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Próximo: <strong>{days[selectedDay!]}</strong></span>
            </span>
          ) : (
            <>
              <Calendar className="w-4 h-4" />
              Selecione um dia
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {isSaved && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{ 
                boxShadow: `0 0 0 1px ${BRAND_COLORS.primaryFade}, 0 0 20px ${BRAND_COLORS.primaryFade}`
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ArtifactCards() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Tudo o que seu escritório de advocacia precisa.{' '}
            <span className="text-gradient">Tudo o que as bancas jurídicas pedem.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A um clique de distância.
          </p>
        </motion.div>

        <div className="grid grid-cols-6 grid-rows-6 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-3 row-span-6"
          >
            <h3 className="text-lg font-semibold text-black mb-4 text-start">Benefícios</h3>
            <AnimatedBenefitsList />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-3 row-span-3 col-start-4"
          >
            <h3 className="text-lg font-semibold text-black mb-4 text-start">Automações trabalhando por você</h3>
            <TelemetryTypewriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-3 row-span-3 col-start-4 row-start-4"
          >
            <h3 className="text-lg font-semibold text-black mb-4 text-start">Agendamento</h3>
            <ProtocolScheduler />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
