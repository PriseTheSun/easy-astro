import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, DollarSign, Briefcase, Users, FileCheck, Clock, Award } from 'lucide-react';
import { cn } from '../lib/utils';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, PieChart, Pie, Cell, Label } from 'recharts';

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

function StatCard({ icon: Icon, label, value, trend, color }: { icon: any; label: string; value: string; trend?: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        {trend && (
          <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: `${color}15`, color }}>
            {trend}
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

const chartData = [
  { month: 'Jan', receita: 45000, despesa: 28000 },
  { month: 'Fev', receita: 52000, despesa: 35000 },
  { month: 'Mar', receita: 48000, despesa: 32000 },
  { month: 'Abr', receita: 61000, despesa: 29000 },
  { month: 'Mai', receita: 75000, despesa: 40000 },
  { month: 'Jun', receita: 68000, despesa: 35000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name === 'receita' ? 'Receita' : 'Despesa'}: R$ {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#E5293F" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#E5293F" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorDespesa" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7F919A" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#7F919A" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="month" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
          dy={10}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="receita"
          stroke="#E5293F"
          strokeWidth={2.5}
          fillOpacity={1}
          fill="url(#colorReceita)"
          name="receita"
        />
        <Area
          type="monotone"
          dataKey="despesa"
          stroke="#7F919A"
          strokeWidth={2.5}
          fillOpacity={1}
          fill="url(#colorDespesa)"
          name="despesa"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function ContractChart() {
  const data = [
    { label: 'Assinatura', value: 35, color: '#E5293F', desc: 'Contratos finalizados e assinados' },
    { label: 'Negociação', value: 20, color: '#C41E3A', desc: 'Em fase de negociação com cliente' },
    { label: 'Rascunho', value: 15, color: '#A82130', desc: 'Em elaboração pelo jurídico' },
    { label: 'Revisão', value: 12, color: '#8B1A2B', desc: 'Em análise jurídica final' },
    { label: 'Aprovação', value: 10, color: '#6B2D3A', desc: 'Aguardando aprovação final' },
    { label: 'Pendente', value: 5, color: '#7F919A', desc: 'Aguardando resposta do cliente' },
    { label: 'Renegociação', value: 2, color: '#5A6872', desc: 'Em processo de renegociação' },
    { label: 'Cancelado', value: 1, color: '#444444', desc: 'Contratos cancelados' },
  ];

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.label} className="group relative">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-semibold text-gray-900">{item.value}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: item.color }}
            />
          </div>
          <div className="absolute left-0 -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

const processData = [
  { area: 'Cível', processos: 436, fill: '#E5293F' },
  { area: 'Trabalhista', processos: 312, fill: '#A82130' },
  { area: 'Criminal', processos: 187, fill: '#7F919A' },
  { area: 'Família', processos: 187, fill: '#CCCCCC' },
  { area: 'Outros', processos: 125, fill: '#999999' },
];

const totalProcessos = processData.reduce((acc, curr) => acc + curr.processos, 0);

const CustomTooltipProcessos = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg">
        <p className="font-medium">{payload[0].name}</p>
        <p>{payload[0].value} processos</p>
      </div>
    );
  }
  return null;
};

function ProcessDonut() {
  return (
    <div className="flex flex-col h-full">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={processData}
            dataKey="processos"
            nameKey="area"
            innerRadius={55}
            outerRadius={85}
            strokeWidth={5}
            paddingAngle={2}
          >
            {processData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
            <Label
              content={({ viewBox }: any) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan x={viewBox.cx} y={viewBox.cy} className="fill-gray-900 text-2xl font-bold">
                        {totalProcessos.toLocaleString()}
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 22} className="fill-gray-500 text-xs">
                        processos
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
          <Tooltip content={<CustomTooltipProcessos />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-2 mt-2">
        {processData.map((item) => (
          <div key={item.area} className="group relative flex items-center justify-between p-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-default">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
              <span className="text-sm text-gray-600">{item.area}</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">{item.processos}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Gestão jurídica inteligente{' '}
            <span className="text-gradient">de ponta a ponta.</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Visualize o desempenho do seu escritório através de dashboards intuitivos e relatórios em tempo real.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={FileCheck} label="Contratos Ativos" value="847" trend="+12%" color="#E5293F" />
          <StatCard icon={Clock} label="Horas Economizadas" value="2.340" trend="+8%" color="#E5293F" />
          <StatCard icon={Users} label="Clientes Ativos" value="1.247" trend="+15%" color="#E5293F" />
          <StatCard icon={Award} label="Taxa de Sucesso" value="94%" trend="+3%" color="#E5293F" />
        </div>

        <div className="grid grid-cols-6 grid-rows-5 gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-6 row-span-2 row-start-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5293F]/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#E5293F]" />
                </div>
                <h3 className="font-semibold text-gray-900">Receita e Despesas</h3>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#E5293F]" />
                  <span className="text-gray-500">Receita</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#7F919A]" />
                  <span className="text-gray-500">Despesas</span>
                </div>
              </div>
            </div>
            <LineChartComponent />
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div>
                <div className="text-2xl font-bold text-gray-900">R$ 245.000</div>
                <div className="text-sm text-gray-500">Receita do mês</div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-[#E5293F]" />
                <div className="text-lg font-semibold text-[#E5293F]">+23%</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-3 row-span-3 col-start-1 row-start-3 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E5293F]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#E5293F]" />
              </div>
              <h3 className="font-semibold text-gray-900">Status dos Contratos</h3>
            </div>
            <ContractChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-3 row-span-3 col-start-4 row-start-3 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E5293F]/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#E5293F]" />
              </div>
              <h3 className="font-semibold text-gray-900">Processos por Área</h3>
            </div>
            <ProcessDonut />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <ShimmerButton>
            VEJA COMO FUNCIONA NA PRÁTICA
            <ArrowRight className="w-4 h-4" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
