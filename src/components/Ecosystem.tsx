import { motion } from 'framer-motion';
import { Scale, Building2, FileText, DollarSign, Calendar, Users, MessageSquare, Shield } from 'lucide-react';

function OrbitingCircles({ 
  children, 
  radius = 100, 
  speed = 1, 
  reverse = false,
  iconSize = 40 
}: { 
  children: React.ReactNode[];
  radius?: number;
  speed?: number;
  reverse?: boolean;
  iconSize?: number;
}) {
  const childArray = Array.isArray(children) ? children : [children];
  
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: reverse ? 360 : -360 }}
      transition={{ duration: 20 / speed, repeat: Infinity, ease: "linear" }}
    >
      {childArray.map((child, index) => {
        const angle = (index * 360) / childArray.length;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191919] mb-6">
            A plataforma de gestão jurídica{' '}
            <span className="text-gradient">mais completa do Brasil.</span>
          </h2>
          <p className="text-lg text-[#7F919A] max-w-3xl mx-auto">
            Tudo o que você precisa em uma única solução tecnológica para advogados e departamentos jurídicos.
          </p>
        </motion.div>

        <div className="relative h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[300px]"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <circle
                cx="50%"
                cy="50%"
                r="140"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="2"
                strokeDasharray="4 8"
                opacity="0.4"
              />
              <circle
                cx="50%"
                cy="50%"
                r="220"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="2"
                strokeDasharray="8 12"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E5293F" />
                  <stop offset="100%" stopColor="#A82130" />
                </linearGradient>
              </defs>
            </svg>

            <OrbitingCircles radius={140} speed={1}>
              {orbitItems.slice(0, 4).map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center cursor-pointer"
                  style={{ borderColor: item.color }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </motion.div>
              ))}
            </OrbitingCircles>

            <OrbitingCircles radius={220} speed={0.7} reverse>
              {orbitItems.slice(4, 8).map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center cursor-pointer"
                  style={{ borderColor: item.color }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </motion.div>
              ))}
            </OrbitingCircles>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="w-28 h-28 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-xl"
              >
                <img 
                  src="/favicon.svg" 
                  alt="EasyJur" 
                  className="w-16 h-16"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
