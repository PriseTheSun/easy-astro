import { motion } from 'framer-motion';
import { FileText, Brain, Eye, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

function ShimmerButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 font-medium text-white transition-all duration-300",
        "bg-gradient-red hover:shadow-[0_0_40px_-10px_rgba(229,41,63,0.5)]",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
    </button>
  );
}

const aiFeatures = [
  {
    icon: FileText,
    title: 'Petições',
    description: 'Elaboração rápida de peças processuais com IA',
  },
  {
    icon: Brain,
    title: 'Análise de Decisões',
    description: 'Identificação de tendências e padrões',
  },
  {
    icon: Eye,
    title: 'Resumos de Processos',
    description: 'Leitura rápida dos pontos principais',
  },
];

export default function ArtificialIntelligence() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Sua produtividade é elevada ao máximo com{' '}
            <span className="text-gradient">inteligência artificial.</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Utilize o poder da IA para automatizar tarefas repetitivas e tomar decisões mais rápidas e precisas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-[#1A1A1A] rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-[#E5293F]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-[#E5293F]" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <ShimmerButton>
            CONHEÇA A IA DA EASYJUR
            <ArrowRight className="w-5 h-5" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
