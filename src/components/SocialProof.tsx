import { motion } from 'framer-motion';
import { Scale, Shield, Award, Building2, FileCheck, Globe, CheckCircle2, Star } from 'lucide-react';

const companies = [
  { name: 'OAB', icon: Scale, color: 'text-primary' },
  { name: 'G2 Awards', icon: Award, color: 'text-yellow-500' },
  { name: 'ISO 27001', icon: Shield, color: 'text-green-600' },
  { name: 'LGPD', icon: FileCheck, color: 'text-blue-600' },
  { name: 'TJSP', icon: Building2, color: 'text-gray-700' },
  { name: 'STF', icon: Globe, color: 'text-gray-800' },
  { name: 'ANPD', icon: CheckCircle2, color: 'text-green-500' },
  { name: 'STJ', icon: Scale, color: 'text-gray-600' },
];

const stats = [
  { value: '10.000+', label: 'Advogados' },
  { value: '500+', label: 'Escritórios' },
  { value: '1M+', label: 'Processos' },
  { value: '99.9%', label: 'Uptime' },
];

function CompanyMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-16 whitespace-nowrap"
      >
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4"
          >
            <company.icon 
              className={`w-8 h-8 ${company.color}`}
              strokeWidth={1.5}
            />
            <span className="text-xl font-semibold text-gray-400">
              {company.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F9F9F9] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
           Trusted by leading law firms across Brazil
          </p>
        </motion.div>

        <CompanyMarquee />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-8 lg:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" strokeWidth={1.5} />
                <span className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</span>
              </div>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
