import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Smartphone, Check } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Produtividade',
    description: 'Automatize tarefas repetitivas e ganhe tempo.',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Seus dados são protegidos com criptografia de ponta.',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: Brain,
    title: 'Inteligência',
    description: 'Dashboards completos para decisões estratégicas.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobilidade',
    description: 'Acesse seu escritório de qualquer lugar, a qualquer hora.',
    gradient: 'from-blue400 to-cyan-500',
  },
];

const features = [
  'Gestão de Processos',
  'Controle de Prazos',
  'Automação de Tarefas',
  'Dashboard Analytics',
  'API Aberta',
  'Integração OAB',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-colors overflow-hidden shadow-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recursos Incluídos</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
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
                    className="h-full bg-gradient-red rounded-full"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-gray-500">Tempo economizado</span>
                  <span className="text-primary font-semibold">+20h/semana</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
