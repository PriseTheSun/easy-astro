import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  cashback: string;
  features: string[];
  extras?: string[];
  popular?: boolean;
  buttonText: string;
}

const plans: Plan[] = [
  {
    name: 'Premium',
    description: 'Para pequenos Escritórios',
    price: 'R$ 389',
    period: '/Mês',
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
    extras: [
      'Gestão Financeira',
      'Automação de Documentos',
      'Demandas Consultivas',
      'LCRM e Gerador de Propostas',
      '100 Acessos para clientes',
      'Website Integrado Legal CRM',
    ],
    buttonText: 'TESTE GRÁTIS',
  },
  {
    name: 'Standard',
    description: 'Para médios escritórios',
    price: 'R$ 599',
    period: '/Mês',
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
    ],
    extras: [
      'Workflow de Tarefas Ágil',
      'Gamificação de Atividades',
      'TimeSheet Dinâmico',
      'Controle Orçamentário',
      'Gestão Estratégica',
      '200 Acessos para clientes',
      'Tudo do Premium +',
    ],
    buttonText: 'TESTE GRÁTIS',
  },
  {
    name: 'Growth',
    description: 'Para médios escritórios em crescimento',
    price: 'R$ 1.699',
    period: '/Mês',
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
    ],
    extras: [
      'Legal Analytics Tool',
      'Cálculos Monetários',
      'Cobranças Personalizadas',
      'Automação de Faturamento',
      'Campos Personalizados',
      '500 Acessos para clientes',
      'Tudo do Standard +',
    ],
    buttonText: 'TESTE GRÁTIS',
  },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cn(
        "relative rounded-3xl overflow-hidden transition-all duration-300",
        plan.popular 
          ? 'bg-black border-2 border-black shadow-2xl shadow-primary/20' 
          : 'bg-white border border-gray-200 shadow-xl hover:shadow-2xl'
      )}
    >
      {plan.popular && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
            MAIS CONTRATADO
          </div>
        </div>
      )}

      <div className={cn("p-8", plan.popular ? "pt-10" : "")}>
        <div className="mb-6">
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

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className={cn(
              "text-5xl font-bold",
              plan.popular ? 'text-white' : 'text-black'
            )}>
              {plan.price}
            </span>
            <span className={plan.popular ? 'text-gray-400' : 'text-gray-600'}>{plan.period}</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium group relative cursor-help">
            <span>Ganhe até {plan.cashback} cashback</span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
              Válido para pagamentos no cartão
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                plan.popular ? 'bg-primary' : 'bg-primary/10'
              )}>
                <Check className={cn(
                  "w-3 h-3",
                  plan.popular ? 'text-white' : 'text-primary'
                )} />
              </div>
              <span className={plan.popular ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {plan.extras && (
          <div className="mb-8">
            <h4 className={cn(
              "text-sm font-semibold mb-3",
              plan.popular ? 'text-white' : 'text-gray-900'
            )}>
              Extras do Plano
            </h4>
            <div className="space-y-2">
              {plan.extras.map((extra, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                    plan.popular ? 'bg-white/20' : 'bg-primary/10'
                  )}>
                    <Check className={cn(
                      "w-3 h-3",
                      plan.popular ? 'text-white' : 'text-primary'
                    )} />
                  </div>
                  <span className={plan.popular ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                    {extra}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          className={cn(
            "w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300",
            plan.popular 
              ? 'bg-white text-black hover:bg-gray-100' 
              : 'bg-black text-white hover:bg-gray-900'
          )}
        >
          {plan.buttonText}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
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
            Encontre o plano perfeito para você,{' '}
            <span className="text-gradient">seu escritório ou empresa.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para as necessidades do seu escritório. 
            Todos os planos incluem suporte dedicado e atualizações gratuitas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <button className="text-primary font-medium hover:underline underline-offset-4">
            Comparar todos os Planos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
