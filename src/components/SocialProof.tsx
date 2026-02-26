import { motion } from 'framer-motion';

const companies = [
  { name: 'OAB', logo: '⚖️' },
  { name: 'G2', logo: '🏆' },
  { name: 'CVM', logo: '📊' },
  { name: 'ISO', logo: '🔒' },
  { name: 'ANPD', logo: '📋' },
  { name: 'TJ', logo: '⚖️' },
  { name: 'STF', logo: '🏛️' },
  { name: 'STJ', logo: '⚖️' },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Trusted by leading law firms across Brazil
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <span className="text-3xl">{company.logo}</span>
              <span className="text-lg font-semibold">{company.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-primary">10.000+</span>
            <span className="text-gray-500">Advogados</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-primary">500+</span>
            <span className="text-gray-500">Escritórios</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-primary">1M+</span>
            <span className="text-gray-500">Processos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-primary">99.9%</span>
            <span className="text-gray-500">Uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
