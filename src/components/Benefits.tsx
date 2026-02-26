import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, FileText, Calendar, DollarSign, Folder, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: Calendar,
    title: 'Gestão de Processos e Prazos',
    description: 'Controle total sobre os andamentos e tribunais.',
  },
  {
    icon: FileText,
    title: 'Publicações e Intimações',
    description: 'Receba e trate suas notificações automaticamente.',
  },
  {
    icon: DollarSign,
    title: 'Gestão Financeira Completa',
    description: 'Fluxo de caixa, honorários, DRE e emissão de notas.',
  },
  {
    icon: Folder,
    title: 'GED (Gestão de Documentos)',
    description: 'Armazenamento em nuvem seguro e organizado.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Customizados',
    description: 'Informações precisas para a tomada de decisão.',
  },
];

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tudo o que seu escritório de advocacia precisa.{' '}
            <span className="text-gradient">Tudo em um clique.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
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
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start gap-4 p-6 rounded-2xl transition-all ${
                  index === activeIndex ? 'bg-gray-900 border border-primary/30' : 'bg-transparent border border-transparent'
                }`}
              >
                <motion.div
                  animate={{ scale: index === activeIndex ? 1.1 : 1 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-800'
                  }`}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${
                    index === activeIndex ? 'text-white' : 'text-gray-400'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: index === activeIndex ? 1 : 0 }}
                  className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <Check className="w-4 h-4 text-primary" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
            <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-400 text-sm">EasyJur Dashboard</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                      activeIndex === 0 ? 'from-blue-500 to-cyan-500' :
                      activeIndex === 1 ? 'from-green-500 to-emerald-500' :
                      activeIndex === 2 ? 'from-purple-500 to-pink-500' :
                      activeIndex === 3 ? 'from-orange-500 to-yellow-500' :
                      'from-red-500 to-pink-500'
                    }`}>
                      {(() => {
                        const Icon = benefits[activeIndex].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{benefits[activeIndex].title}</h4>
                      <p className="text-gray-400 text-sm">{benefits[activeIndex].description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        className="h-20 bg-gray-800 rounded-xl flex items-center justify-center"
                      >
                        <span className="text-2xl">📊</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-6">
                {benefits.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeIndex ? 'w-8 bg-primary' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
