import { motion } from 'framer-motion';
import { FileText, Brain, Eye, Sparkles, ArrowRight } from 'lucide-react';
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
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Análise de Decisões',
    description: 'Identificação de tendências e padrões',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Eye,
    title: 'Resumos de Processos',
    description: 'Leitura rápida dos pontos principais',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function ArtificialIntelligence() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F9F9F9] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">JurisAI</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sua produtividade é elevada ao máximo com{' '}
            <span className="text-gradient">inteligência artificial.</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Utilize o poder da IA para automatizar tarefas repetitivas e tomar decisões mais rápidas e precisas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary/50 transition-all overflow-hidden shadow-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-primary" />
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gray-900/50 rounded-3xl p-8 border border-gray-800"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Tokens/mês', value: '100.000+', desc: 'JurisAI' },
              { label: 'Tempo economizado', value: '40h/mês', desc: 'Por advogado' },
              { label: 'Precisão', value: '95%', desc: 'Em análises' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-primary text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
