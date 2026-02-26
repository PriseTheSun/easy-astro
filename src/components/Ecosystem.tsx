import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, DollarSign, Folder, Calendar, Users, MessageSquare, Scale } from 'lucide-react';

const features = [
  { icon: FileText, label: 'GED', description: 'Gestão de Documentos' },
  { icon: DollarSign, label: 'Financeiro', description: 'Controle Financeiro' },
  { icon: Scale, label: 'Processos', description: 'Gestão de Causas' },
  { icon: MessageSquare, label: 'Publicações', description: 'Alertas e Notificações' },
  { icon: Calendar, label: 'Prazos', description: 'Controle de Datas' },
  { icon: Users, label: 'Atendimentos', description: 'CRM Jurídico' },
  { icon: Folder, label: 'Clientes', description: 'Cadastro Completo' },
];

export default function Ecosystem() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            A plataforma de gestão jurídica{' '}
            <span className="text-gradient">mais completa do Brasil.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tudo o que você precisa em uma única solução tecnológica para advogados e departamentos jurídicos.
          </p>
        </motion.div>

        <div className="relative h-[600px] flex items-center justify-center">
          <motion.div
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="relative w-[400px] h-[400px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 animate-pulse" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-red flex items-center justify-center shadow-2xl animate-pulse-glow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">EasyJur</div>
                  <div className="text-white/80 text-sm">Plataforma Completa</div>
                </div>
              </div>
            </div>

            {features.map((feature, index) => {
              const angle = (index * 360) / features.length;
              const radius = 200;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  animate={{
                    x: x,
                    y: y,
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow"
                  >
                    <feature.icon className="w-8 h-8 text-primary mb-1" />
                    <span className="text-xs font-semibold text-black">{feature.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <circle
                cx="50%"
                cy="50%"
                r="200"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="10 5"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E5293F" />
                  <stop offset="100%" stopColor="#A82130" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: 'Integrações', value: '50+', icon: '🔌' },
            { label: 'Tribunais', value: '100+', icon: '⚖️' },
            { label: 'APIs', value: '30+', icon: '🔧' },
            { label: 'Updates/Mês', value: '12+', icon: '🚀' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-black">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
