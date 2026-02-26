import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
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

interface Plan {
  name: string;
  description: string;
  price: string;
  cashback: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

const plans: Plan[] = [
  {
    name: 'Premium',
    description: 'Para pequenos Escritórios',
    price: 'R$ 389',
    cashback: 'R$ 500',
    features: [
      '30 GB Docs em Nuvem',
      'Cadastro de processos ilimitado',
      '300 Processos push de andamentos',
      '01 Advogados Intimações',
      '05 Usuários Inclusos',
      '20.000 Tokens JurisAI',
      '3.000 Tokens EasyJur Copilot',
      'Conta Digital e Internet Banking Grátis',
    ],
    buttonText: 'TESTE GRÁTIS',
  },
  {
    name: 'Standard',
    description: 'Para médios escritórios',
    price: 'R$ 599',
    cashback: 'R$ 700',
    popular: true,
    features: [
      '40 GB Docs em Nuvem',
      'Cadastro de processos ilimitado',
      '800 Processos push de andamentos',
      '02 Advogados Intimações',
      '10 Usuários Inclusos',
      '50.000 Tokens JurisAI',
      '5.000 Tokens EasyJur Copilot',
      'Conta Digital e Internet Banking Grátis',
      'Tudo do Premium +',
      'Workflow de Tarefas Ágil',
      'Gamificação de Atividades',
      'TimeSheet Dinâmico',
      'Controle Orçamentário',
      'Gestão Estratégica',
      '200 Acessos para clientes',
    ],
    buttonText: 'TESTE GRÁTIS',
  },
  {
    name: 'Growth',
    description: 'Para médios escritórios em crescimento',
    price: 'R$ 1.699',
    cashback: 'R$ 1.000',
    features: [
      '80 GB Docs em Nuvem',
      'Cadastro de processos ilimitado',
      '2000 Processos push de andamentos',
      '03 Advogados Intimações',
      '15 Usuários Inclusos',
      '100.000 Tokens JurisAI',
      '8.000 Tokens EasyJur Copilot',
      'Conta Digital e Internet Banking Grátis',
      'Tudo do Standard +',
      'Legal Analytics Tool',
      'Cálculos Monetários',
      'Cobranças Personalizadas',
      'Automação de Faturamento',
      'Campos Personalizados',
      '500 Acessos para clientes',
    ],
    buttonText: 'TESTE GRÁTIS',
  },
];

export default function Pricing() {
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
            Encontre o plano perfeito para{' '}
            <span className="text-gradient">você e seu escritório.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para as necessidades do seu escritório. 
            Todos os planos incluem suporte dedicado e atualizações gratuitas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={cn(
                "relative rounded-3xl p-8 border transition-all",
                plan.popular 
                  ? 'bg-black border-black shadow-2xl shadow-primary/20' 
                  : 'bg-white border-gray-200 shadow-xl'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-red text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    MAIS CONTRATADO
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className={cn(
                  "text-2xl font-bold mb-2",
                  plan.popular ? 'text-white' : 'text-black'
                )}>
                  {plan.name}
                </h3>
                <p className={plan.popular ? 'text-gray-400' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "text-4xl font-bold",
                    plan.popular ? 'text-white' : 'text-black'
                  )}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-gray-400' : 'text-gray-600'}>/Mês</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  <span>Ganhe até {plan.cashback} cashback</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                      plan.popular ? 'bg-primary/20' : 'bg-primary/10'
                    )}>
                      <Check className={cn(
                        "w-3 h-3",
                        plan.popular ? 'text-primary' : 'text-primary'
                      )} />
                    </div>
                    <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <ShimmerButton className={cn(
                "w-full justify-center",
                plan.popular ? '' : '!bg-black !hover:!bg-black/90'
              )}>
                {plan.buttonText}
                <ArrowRight className="w-4 h-4" />
              </ShimmerButton>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-500 mt-8"
        >
          * Todos os planos incluem 7 dias de teste grátis. Cancelamento a qualquer momento.
        </motion.p>
      </div>
    </section>
  );
}
