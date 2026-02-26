import { motion } from 'framer-motion';
import { 
  Scale, 
  FileText, 
  Users, 
  Calendar, 
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
    <div className="bg-gray-800/80 dark:bg-gray-800 rounded-xl p-3 border border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs ${positive ? 'text-green-400' : 'text-red-400'}`}>
          {positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
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
    <div className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-0">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
        <div>
          <div className="font-medium text-white text-xs">{title}</div>
          <div className="text-[10px] text-gray-500">{number}</div>
        </div>
      </div>
      <span className="text-xs text-gray-500">{court}</span>
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
        className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-800"
      >
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Menu className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
            <span className="text-white font-medium text-sm">EasyJur</span>
          </div>
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
            <Bell className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-red-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">EJ</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-gray-950">
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
            <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white text-xs">Processos Recentes</h4>
                <ChevronDown className="w-3 h-3 text-gray-500" strokeWidth={1.5} />
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

            <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white text-xs">Próximos Prazos</h4>
                <ChevronDown className="w-3 h-3 text-gray-500" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                {[
                  { time: '09:00', event: 'Audiência', court: 'TJSP' },
                  { time: '14:00', event: 'Conciliação', court: 'JF' },
                  { time: '16:30', event: 'Prazo Recurso', court: 'STJ' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-700/50 last:border-0">
                    <div className="w-10 text-center">
                      <div className="text-xs font-bold text-white">{item.time}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-white">{item.event}</div>
                      <div className="text-[10px] text-gray-500">{item.court}</div>
                    </div>
                    <Clock className="w-3 h-3 text-gray-500" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="bg-gradient-to-r from-primary to-red-700 rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Activity className="w-3 h-3 text-white" strokeWidth={1.5} />
                <span className="text-[10px] font-medium text-white/80">JurisAI</span>
              </div>
              <div className="text-lg font-bold text-white">1.247</div>
              <div className="text-[10px] text-white/70">Documentos</div>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700">
              <div className="flex items-center gap-1.5 mb-1">
                <Shield className="w-3 h-3 text-green-400" strokeWidth={1.5} />
                <span className="text-[10px] font-medium text-white">Segurança</span>
              </div>
              <div className="text-lg font-bold text-white">99.9%</div>
              <div className="text-[10px] text-gray-500">Uptime</div>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700">
              <div className="flex items-center gap-1.5 mb-1">
                <Zap className="w-3 h-3 text-yellow-400" strokeWidth={1.5} />
                <span className="text-[10px] font-medium text-white">Performance</span>
              </div>
              <div className="text-lg font-bold text-white">+85%</div>
              <div className="text-[10px] text-gray-500">Produtividade</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -left-6 top-1/4 w-16 h-16 bg-gray-900 rounded-xl shadow-xl p-2 flex items-center justify-center border-2 border-primary"
      >
        <div className="text-center">
          <div className="text-lg font-bold text-primary">98%</div>
          <div className="text-[8px] text-gray-400">NPS</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute -right-3 bottom-1/3 w-14 h-14 bg-gray-900 rounded-xl shadow-xl p-2 flex items-center justify-center border-2 border-gray-700"
      >
        <TrendingUp className="w-5 h-5 text-green-400" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}
