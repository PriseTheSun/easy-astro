import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, DollarSign, Briefcase, Target } from 'lucide-react';
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

function ContractChart() {
  const data = [
    { label: 'Assinatura', value: 45, color: 'bg-primary' },
    { label: 'Negociação', value: 30, color: 'bg-primary/70' },
    { label: 'Rascunho', value: 15, color: 'bg-gray-400' },
    { label: 'Revisão', value: 10, color: 'bg-gray-300' },
  ];

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-semibold text-black">{item.value}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`h-full ${item.color} rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function CashFlowChart() {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  const revenue = [30, 45, 35, 50, 65, 55];
  const expenses = [20, 25, 30, 20, 35, 25];

  return (
    <div className="h-40 flex items-end gap-2">
      {months.map((month, i) => (
        <div key={month} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full flex gap-1">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${revenue[i] * 2}px` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 bg-primary rounded-t"
            />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${expenses[i] * 2}px` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
              className="flex-1 bg-gray-400 rounded-t"
            />
          </div>
          <span className="text-xs text-gray-500">{month}</span>
        </div>
      ))}
    </div>
  );
}

function ProcessChart() {
  const data = [
    { label: 'Cível', value: 35, color: '#3B82F6' },
    { label: 'Trabalhista', value: 25, color: '#22C55E' },
    { label: 'Criminal', value: 15, color: '#EF4444' },
    { label: 'Família', value: 15, color: '#A855F7' },
    { label: 'Outros', value: 10, color: '#6B7280' },
  ];

  let cumulative = 0;

  return (
    <div className="flex items-center gap-4">
      <div className="w-32 h-32 relative">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
          {data.map((item) => {
            const prev = cumulative;
            cumulative += item.value;
            return (
              <circle
                key={item.label}
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke={item.color}
                strokeWidth="8"
                strokeDasharray={`${(item.value / 100) * 176} 176`}
                strokeDashoffset={-prev * 1.76}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-black">1.247</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm text-gray-600">{item.label}</span>
            <span className="text-sm font-semibold text-black">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewBusinessChart() {
  const data = [
    { month: 'Jan', value: 15 },
    { month: 'Fev', value: 25 },
    { month: 'Mar', value: 20 },
    { month: 'Abr', value: 35 },
    { month: 'Mai', value: 45 },
    { month: 'Jun', value: 55 },
  ];

  return (
    <div className="relative h-32">
      <div className="absolute inset-0 flex items-end gap-3">
        {data.map((item, i) => (
          <motion.div
            key={item.month}
            initial={{ height: 0 }}
            whileInView={{ height: `${item.value * 2}px` }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t"
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
        {data.map((item) => (
          <span key={item.month} className="text-xs text-gray-500">{item.month}</span>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Gestão jurídica inteligente{' '}
            <span className="text-gradient">de ponta a ponta.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visualize o desempenho do seu escritório através de gráficos intuitivos e relatórios personalizados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-3xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-black">Contratos</h3>
            </div>
            <ContractChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-3xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="font-semibold text-black">Fluxo de Caixa</h3>
            </div>
            <CashFlowChart />
            <div className="flex justify-between mt-4 text-sm">
              <span className="text-gray-500">Receita</span>
              <span className="text-gray-500">Despesas</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="font-semibold text-black">Processos por Área</h3>
            </div>
            <ProcessChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 rounded-3xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-semibold text-black">Novos Negócios</h3>
            </div>
            <NewBusinessChart />
            <div className="mt-4 text-center">
              <span className="text-2xl font-bold text-black">R$ 245.000</span>
              <span className="text-green-500 text-sm ml-2">+23%</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <ShimmerButton>
            VEJA COMO FUNCIONA NA PRÁTICA
            <ArrowRight className="w-5 h-5" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
