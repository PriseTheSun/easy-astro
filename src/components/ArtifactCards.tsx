"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/ui/animated-list';
import { Calendar, ChevronRight, Check, Scale, Bell, Wallet, Cloud, FileBarChart, type LucideIcon } from 'lucide-react';

interface BenefitItem {
  name: string
  description: string
  icon: LucideIcon
  color: string
  time: string
}

const benefits: BenefitItem[] = [
  {
    name: "Gestão de Processos e Prazos",
    description: "Controle total sobre os andamentos e tribunais.",
    icon: Scale,
    color: "#00C9A7",
    time: "✓ Ativo",
  },
  {
    name: "Publicações e Intimações",
    description: "Receba e trate suas notificações automaticamente.",
    icon: Bell,
    color: "#FFB800",
    time: "✓ Ativo",
  },
  {
    name: "Gestão Financeira Completa",
    description: "Fluxo de caixa, honorários, DRE e emissão de notas.",
    icon: Wallet,
    color: "#FF3D71",
    time: "✓ Ativo",
  },
  {
    name: "GED (Gestão de Documentos)",
    description: "Armazenamento em nuvem seguro e organizado.",
    icon: Cloud,
    color: "#1E86FF",
    time: "✓ Ativo",
  },
  {
    name: "Relatórios Customizados",
    description: "Informações precisas para a tomada de decisão.",
    icon: FileBarChart,
    color: "#8B5CF6",
    time: "✓ Ativo",
  },
]

const repeatedBenefits = Array.from({ length: 10 }, () => benefits).flat()

const Notification = ({ name, description, icon: Icon, color, time }: BenefitItem) => {
  return (
    <figure
      className={cn(
        "relative min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
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
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
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
          <span className="text-yellow-500">⚡</span>
          <span className="text-gray-500 text-xs">Automações ativas</span>
        </div>
      </div>
    </div>
  );
}

function ProtocolScheduler() {
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDayClick = (index: number) => {
    setActiveDay(index);
    setIsSaved(false);
    setShowSuccess(false);
  };

  const handleSave = () => {
    if (activeDay === null) return;
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setShowSuccess(true);
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-black">Agendamento</h4>
        <motion.div
          animate={{ opacity: isSaving ? 1 : showSuccess ? 1 : 0 }}
          className="flex items-center gap-2"
        >
          {isSaving ? (
            <span className="text-xs text-gray-500">Salvando...</span>
          ) : showSuccess ? (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-xs text-green-600 font-medium"
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
            onClick={() => handleDayClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-xl text-center transition-all relative overflow-hidden ${
              activeDay === index
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <div className="text-sm font-medium">{day}</div>
            {activeDay === index && (
              <motion.div
                layoutId="selectedDay"
                className="absolute inset-0 bg-white/20"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={handleSave}
        disabled={activeDay === null || isSaving}
        whileHover={{ scale: activeDay !== null ? 1.02 : 1 }}
        whileTap={{ scale: activeDay !== null ? 0.98 : 1 }}
        className={`w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
          activeDay !== null
            ? 'bg-black text-white shadow-lg shadow-black/20 hover:shadow-xl'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isSaving ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
          />
        ) : (
          <>
            <Calendar className="w-4 h-4" />
            {isSaved ? 'Alterar' : 'Salvar'}
            <ChevronRight className="w-4 h-4" />
          </>
        )}
      </motion.button>

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200"
        >
          <p className="text-xs text-green-700">
            <Check className="w-3 h-3 inline mr-1" />
            Agendamento confirmado para {days[activeDay!]}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default function ArtifactCards() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Tudo o que seu escritório de advocacia precisa.{' '}
            <span className="text-gradient">Tudo o que as bancas jurídicas pedem.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
