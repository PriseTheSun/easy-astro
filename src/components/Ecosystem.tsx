import { motion } from 'framer-motion';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { Scale, Building2, FileText, DollarSign, Calendar, Users, MessageSquare, Shield } from 'lucide-react';

const orbitItems = [
  { icon: Scale, color: "#E5293F" },
  { icon: Building2, color: "#A82130" },
  { icon: FileText, color: "#7F919A" },
  { icon: DollarSign, color: "#191919" },
  { icon: Calendar, color: "#E5293F" },
  { icon: Users, color: "#A82130" },
  { icon: MessageSquare, color: "#7F919A" },
  { icon: Shield, color: "#191919" },
];

export default function Ecosystem() {
  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            A plataforma de gestão jurídica{' '}
            <span className="text-gradient">mais completa do Brasil.</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Tudo o que você precisa em uma única solução tecnológica para advogados e departamentos jurídicos.
          </p>
        </motion.div>

        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            <OrbitingCircles iconSize={56} radius={220}>
              {orbitItems.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center cursor-pointer"
                  style={{ borderColor: item.color }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
              ))}
            </OrbitingCircles>

            <OrbitingCircles iconSize={48} radius={140} reverse speed={2}>
              {orbitItems.slice(4, 8).map((item, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center cursor-pointer"
                  style={{ borderColor: item.color }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
              ))}
            </OrbitingCircles>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-xl"
              >
                <img 
                  src="/favicon.svg" 
                  alt="EasyJur" 
                  className="w-14 h-14"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
