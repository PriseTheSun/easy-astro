import { motion } from 'framer-motion';
import { 
  Scale, 
  FileText, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Bell, 
  Search,
  Menu,
  ChevronDown,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  Activity,
  Zap
} from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

function StatCard({ icon, label, value, change, positive }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs ${positive ? 'text-green-500' : 'text-red-500'}`}>
          {positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}

interface ProcessItemProps {
  title: string;
  number: string;
  court: string;
  status: 'active' | 'pending' | 'urgent';
}

function ProcessItem({ title, number, court, status }: ProcessItemProps) {
  const statusColors = {
    active: 'bg-green-500',
    pending: 'bg-yellow-500',
    urgent: 'bg-red-500'
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
        <div>
          <div className="font-medium text-gray-900 dark:text-white text-xs">{title}</div>
          <div className="text-[10px] text-gray-400 dark:text-gray-500">{number}</div>
        </div>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400">{court}</span>
    </div>
  );
}

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
      >
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Menu className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">Growth+</span>
          </div>
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
            <Bell className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-red-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">G+</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-gray-50 dark:bg-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
            <StatCard 
              icon={<Scale className="w-4 h-4" strokeWidth={1.5} />}
              label="Processos"
              value="247"
              change="+12%"
              positive={true}
            />
            <StatCard 
              icon={<FileText className="w-4 h-4" strokeWidth={1.5} />}
              label="Petições"
              value="89"
              change="+8%"
              positive={true}
            />
            <StatCard 
              icon={<Users className="w-4 h-4" strokeWidth={1.5} />}
              label="Clientes"
              value="156"
              change="+5%"
              positive={true}
            />
            <StatCard 
              icon={<DollarSign className="w-4 h-4" strokeWidth={1.5} />}
              label="Faturamento"
              value="R$ 245K"
              change="+23%"
              positive={true}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-3 border border-gray-100 dark:border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs">Processos Recentes</h4>
                <ChevronDown className="w-3 h-3 text-gray-400" strokeWidth={1.5} />
              </div>
              <ProcessItem 
                title="Ação de Indenização"
                number="0001234-56.2024"
                court="TJSP"
                status="active"
              />
              <ProcessItem 
                title="Reclamação Trabalhista"
                number="0008-90.2025"
                court="TRT-2"
                status="urgent"
              />
              <ProcessItem 
                title="Divórcio Litigioso"
                number="0009012-34.2024"
                court="TJSP"
                status="pending"
              />
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-3 border border-gray-100 dark:border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs">Próximos Prazos</h4>
                <ChevronDown className="w-3 h-3 text-gray-400" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                {[
                  { time: '09:00', event: 'Audiência', court: 'TJSP' },
                  { time: '14:00', event: 'Conciliação', court: 'JF' },
                  { time: '16:30', event: 'Prazo Recurso', court: 'STJ' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-100 dark:border-gray-600 last:border-0">
                    <div className="w-10 text-center">
                      <div className="text-xs font-bold text-gray-900 dark:text-white">{item.time}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900 dark:text-white">{item.event}</div>
                      <div className="text-[10px] text-gray-400 dark:text-gray-500">{item.court}</div>
                    </div>
                    <Clock className="w-3 h-3 text-gray-400" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="bg-gradient-to-r from-primary to-red-600 rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Activity className="w-3 h-3 text-white" strokeWidth={1.5} />
                <span className="text-[10px] font-medium text-white/90">JurisAI</span>
              </div>
              <div className="text-lg font-bold text-white">1.247</div>
              <div className="text-[10px] text-white/70">Documentos</div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-3 border border-gray-100 dark:border-gray-600">
              <div className="flex items-center gap-1.5 mb-1">
                <Shield className="w-3 h-3 text-green-500" strokeWidth={1.5} />
                <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">Segurança</span>
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">99.9%</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500">Uptime</div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-3 border border-gray-100 dark:border-gray-600">
              <div className="flex items-center gap-1.5 mb-1">
                <Zap className="w-3 h-3 text-yellow-500" strokeWidth={1.5} />
                <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">Performance</span>
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">+85%</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500">Produtividade</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -left-10 top-1/3 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-2 flex items-center justify-center border-2 border-primary"
      >
        <div className="text-center">
          <div className="text-lg font-bold text-primary">98%</div>
          <div className="text-[8px] text-gray-400 dark:text-gray-500">NPS</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute -right-3 bottom-1/3 w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-2 flex items-center justify-center border-2 border-gray-100 dark:border-gray-700"
      >
        <TrendingUp className="w-5 h-5 text-green-500" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}
