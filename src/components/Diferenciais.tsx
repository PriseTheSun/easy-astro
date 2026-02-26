import { motion } from 'framer-motion';
import { FileTextIcon, BellIcon, Share2Icon, CalendarIcon, Check } from 'lucide-react';
import { BentoCard, BentoGrid } from './BentoGrid';
import { cn } from '../lib/utils';

const files = [
  {
    name: "processo_001.pdf",
    body: "Petição inicial protocolada com sucesso no TJ-SP.",
  },
  {
    name: "contrato_2024.docx",
    body: "Contrato de prestação de serviços jurídicos atualizado.",
  },
  {
    name: "certidao.png",
    body: "Certidão de inteiro teor - 2ª Vara Cível.",
  },
  {
    name: "alvara.pdf",
    body: "Alvará de liberação judicial deferido.",
  },
  {
    name: "sentenca.pdf",
    body: "Sentença procedente - execução jubilatória.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Gestão de Documentos",
    description: "Organize e encontre qualquer documento em segundos.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-1",
    background: (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-10 left-0 right-0 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        <motion.div 
          animate={{ x: [0, -200, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex gap-3 overflow-x-hidden pb-4 px-4"
        >
          {[...files, ...files].map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "flex-shrink-0 w-36 cursor-pointer rounded-xl border border-gray-200 bg-gray-50/80 p-3",
                "hover:bg-gray-100 transition-all duration-300",
                "transform-gpu blur-[1px] hover:blur-none"
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <FileTextIcon className="w-4 h-4 text-[#E5293F]" />
                <span className="text-xs font-medium text-gray-900 truncate">{f.name}</span>
              </div>
              <p className="text-[10px] text-gray-500 line-clamp-2">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notificações Inteligentes",
    description: "Receba alertas sobre prazos, movimentações e tarefas.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute top-16 right-4 w-72">
        <div className="space-y-3">
          {[
            { title: "Prazo em 3 dias", desc: "Audiência - Processo #2847", time: "2 min", urgent: true },
            { title: "Nova movimentação", desc: "TJ-SP publikou nova decisão", time: "15 min", urgent: false },
            { title: "Tarefa concluída", desc: "Petição inicial enviada", time: "1h", urgent: false },
            { title: "Prazo em 5 dias", desc: "Recurso - Processo #1923", time: "3h", urgent: true },
          ].map((notification, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                delay: idx * 0.15, 
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              className={cn(
                "flex items-start gap-3 p-3 rounded-xl bg-white/90 backdrop-blur-sm border shadow-sm cursor-pointer",
                notification.urgent ? "border-l-4 border-l-[#E5293F]" : "border-gray-100"
              )}
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                className={cn(
                  "w-2 h-2 mt-2 rounded-full",
                  notification.urgent ? "bg-[#E5293F]" : "bg-gray-400"
                )} 
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="text-xs text-gray-500">{notification.desc}</p>
              </div>
              <span className="text-xs text-gray-400">{notification.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrações",
    description: "Conecte com tribunais, OAB e mais de 100 ferramentas.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute top-10 right-4 w-full max-w-md">
        <motion.div 
          className="flex items-center justify-center gap-8"
        >
          {[
            { name: "PJe", color: "bg-blue-500" },
            { name: "OAB", color: "bg-[#E5293F]" },
            { name: "TJ", color: "bg-gray-800" },
            { name: "TRT", color: "bg-green-600" },
            { name: "PDF", color: "bg-red-500" },
          ].map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: idx * 0.1, 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.15,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(229, 41, 63, 0.4)",
                    "0 0 0 8px rgba(229, 41, 63, 0)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                className={cn("w-12 h-12 rounded-xl flex items-center justify-center", tool.color)}
              >
                <span className="text-white text-xs font-bold">{tool.name.substring(0, 2)}</span>
              </motion.div>
              <span className="text-xs text-gray-600">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <span className="text-sm text-gray-500">+100 integrações disponíveis</span>
        </motion.div>
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendário Jurídico",
    description: "Nunca perca um prazo com o calendário inteligente.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-1",
    background: (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 right-2"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm"
        >
          <div className="text-center mb-2">
            <span className="text-xs font-semibold text-gray-900">Fevereiro 2026</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
              <span key={i} className="text-[10px] text-gray-400">{d}</span>
            ))}
            {Array.from({ length: 28 }, (_, i) => {
              const day = i + 1;
              const isDeadline = [5, 12, 18, 26].includes(day);
              return (
                <motion.div
                  key={day}
                  whileHover={{ scale: 1.2 }}
                  animate={isDeadline ? { 
                    backgroundColor: ["#E5293F", "#A82130", "#E5293F"] 
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={cn(
                    "w-6 h-6 text-[10px] flex items-center justify-center rounded-full cursor-pointer",
                    isDeadline ? "text-white font-bold" : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {day}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    ),
  },
];

export default function Diferenciais() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Otimize sua rotina, escale seu escritório e{' '}
            <span className="text-gradient">conquiste mais resultados.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A EasyJur é a plataforma de gestão jurídica que integra todas as áreas do seu escritório 
            em um só lugar, permitindo que você tome decisões baseadas em dados e foque no que 
            realmente importa: seus clientes.
          </p>
        </motion.div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recursos Incluídos</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Gestão de Processos',
                  'Controle de Prazos',
                  'Automação de Tarefas',
                  'Dashboard Analytics',
                  'API Aberta',
                  'Integração OAB',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#E5293F]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E5293F]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5293F]/20 to-transparent rounded-3xl" />
              <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">85%</div>
                    <div className="text-gray-500 text-sm">Aumento de produtividade</div>
                  </div>
                  <div className="text-4xl">📈</div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-[#E5293F] to-[#A82130] rounded-full"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-gray-500">Tempo economizado</span>
                  <span className="text-[#E5293F] font-semibold">+20h/semana</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
