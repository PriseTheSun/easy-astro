import { motion } from 'framer-motion';
import { FileText, Brain, Eye, ArrowRight, Search, Scale, MessageSquare, Zap, Shield, Clock, Target, Workflow } from 'lucide-react';
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
  { icon: FileText, title: 'Petições', description: 'Gere peças processuais completas em segundos com IA' },
  { icon: Brain, title: 'Análise', description: 'Identifique tendências e padrões nos julgamentos' },
  { icon: Eye, title: 'Resumos', description: 'Compreenda processos inteiros em minutos' },
  { icon: Search, title: 'Pesquisa', description: 'Encontre precedentes relevantes' },
  { icon: Workflow, title: 'Automação', description: 'Automatize tarefas repetitivas e ganhe tempo' },
  { icon: Scale, title: 'Previsão', description: 'Antecipe decisões com dados históricos' },
];

const benefits = [
  { icon: Zap, value: '10x', label: 'Mais rápido' },
  { icon: Shield, value: '95%', label: 'Precisão' },
  { icon: Clock, value: '40h', label: 'Economia/mês' },
  { icon: Target, value: '1000+', label: 'Jurisprudências' },
];

export default function ArtificialIntelligence() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#E5293F]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#A82130]/5 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Sua produtividade é elevada <br />
            <span className="text-gradient">ao máximo com IA.</span>
          </h2>
          
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Transforme a forma como você trabalha. A Inteligência Artificial da EasyJur automatiza tarefas repetitivas e entrega resultados precisos em segundos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#0F0F0F] dark:bg-gray-800 rounded-2xl p-5 border border-gray-800 dark:border-gray-700 text-center"
            >
              <benefit.icon className="w-6 h-6 text-[#E5293F] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{benefit.value}</div>
              <div className="text-sm text-gray-500">{benefit.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-5 grid-rows-6 gap-3 mb-10">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "group bg-[#0F0F0F] dark:bg-gray-800 rounded-2xl p-5 border border-gray-800 dark:border-gray-700 hover:border-[#E5293F]/50 transition-all cursor-pointer relative overflow-hidden",
                index === 0 && "col-span-2 row-span-3",
                index === 1 && "row-span-3 col-start-3",
                index === 2 && "col-span-2 row-span-4 col-start-4",
                index === 3 && "row-span-3 row-start-4",
                index === 4 && "col-span-2 row-span-3 row-start-4",
                index === 5 && "col-span-2 row-span-2 col-start-4 row-start-5"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5293F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#E5293F]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#E5293F]" />
                </div>

                <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400 flex-1">{feature.description}</p>
              </div>

              <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-[#E5293F]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5">
                <ArrowRight className="w-3 h-3 text-[#E5293F]" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <ShimmerButton>
            EXPERIMENTE A IA DA EASYJUR
            <ArrowRight className="w-4 h-4" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
