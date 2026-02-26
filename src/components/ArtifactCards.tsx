import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Calendar, Activity, ChevronRight } from 'lucide-react';

const diagnosticCards = [
  {
    id: 1,
    title: 'Processos Ativos',
    value: '247',
    change: '+12%',
    icon: FileText,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Prazos Hoje',
    value: '8',
    change: '2 urgentes',
    icon: Calendar,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 3,
    title: 'Produtividade',
    value: '94%',
    change: '+5%',
    icon: Activity,
    color: 'from-green-500 to-emerald-500',
  },
];

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

function DiagnosticShuffler() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % diagnosticCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-40">
      {diagnosticCards.map((card, index) => {
        const isActive = index === activeIndex;
        const isPrev = index === (activeIndex - 1 + diagnosticCards.length) % diagnosticCards.length;
        
        return (
          <motion.div
            key={card.id}
            animate={{
              y: isActive ? 0 : isPrev ? -60 : 60,
              opacity: isActive ? 1 : 0.5,
              scale: isActive ? 1 : 0.9,
              zIndex: isActive ? 10 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            className="absolute inset-x-0 top-0"
          >
            <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 shadow-xl`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/80 text-sm">{card.title}</span>
                <card.icon className="w-5 h-5 text-white/80" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{card.value}</div>
              <div className="text-white/70 text-sm">{card.change}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

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
    <div className="bg-gray-900 rounded-2xl p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-gray-500 text-xs">SYSTEM LOG</span>
      </div>
      <div className="text-green-400 min-h-[1.5rem]">
        {displayText}
        <span className="animate-blink">|</span>
      </div>
    </div>
  );
}

function ProtocolScheduler() {
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleDayClick = (index: number) => {
    setActiveDay(index);
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-black">Agendamento</h4>
        <div className="text-xs text-gray-500">{isSaved ? '✓ Salvo' : 'Editando...'}</div>
      </div>
      
      <div className="grid grid-cols-6 gap-2 mb-4">
        {days.map((day, index) => (
          <button
            key={day}
            onClick={() => handleDayClick(index)}
            className={`p-2 rounded-lg text-center transition-all ${
              activeDay === index
                ? 'bg-primary text-white scale-110'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <div className="text-xs font-medium">{day}</div>
          </button>
        ))}
      </div>

      <motion.button
        onClick={handleSave}
        disabled={activeDay === null}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 bg-black text-white rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        Salvar
        <ChevronRight className="w-4 h-4" />
      </motion.button>
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
            Artefatos funcionais{' '}
            <span className="text-gradient">interativos.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experiência de software vivo diretamente na landing page.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-black mb-4 text-center">Diagnostic Shuffler</h3>
            <DiagnosticShuffler />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-black mb-4 text-center">Telemetry Typewriter</h3>
            <TelemetryTypewriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-black mb-4 text-center">Protocol Scheduler</h3>
            <ProtocolScheduler />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
