import { motion } from 'framer-motion';

const companies = [
  'Advocacia Silva',
  'Martins & Associados',
  'Costa Advogados',
  'Pereira Legal',
  'Oliveira Sociedade',
  'Santos Advocacia',
  'Lima & Partners',
  'Cardoso Gestão',
  'Nunes Consultoria',
  'Rodrigues Jurídico',
  'Almeida & Coelho',
  'Ferreira Advogados',
];

function CompanyMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex items-center px-4"
          >
            <span className="text-xl font-semibold text-gray-500">
              {company}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            Empresas que confiam na EasyJur
          </p>
        </motion.div>

        <CompanyMarquee />
      </div>
    </section>
  );
}
