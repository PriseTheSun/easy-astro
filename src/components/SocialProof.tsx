import { motion } from 'framer-motion';

import impB3 from '../assets/images/Impulsionados/b3-a-bolsa-do-brasil.png';
import impBossanova from '../assets/images/Impulsionados/bossanova.png';
import impTransunion from '../assets/images/Impulsionados/transunion-brasil.png';
import impSafra from '../assets/images/Impulsionados/banco-safra.png';
import impGoogle from '../assets/images/Impulsionados/google-cloud-for-startups.png';
import impAws from '../assets/images/Impulsionados/amazon-webservices.png';
import impRtm from '../assets/images/Impulsionados/rtm-br.png';
import impAb2l from '../assets/images/Impulsionados/ab2l-associacao-brasileira-de-lawtechs-e-legaltechs.png';
import impAbracrim from '../assets/images/Impulsionados/abracrim-associacao-brasileira-dos-advogados-criminalistas.png';

const companies = [
  { name: 'B3', img: impB3 },
  { name: 'Bossanova', img: impBossanova },
  { name: 'Transunion', img: impTransunion },
  { name: 'Safra', img: impSafra },
  { name: 'Google Cloud', img: impGoogle },
  { name: 'AWS', img: impAws },
  { name: 'RTM', img: impRtm },
  { name: 'AB2L', img: impAb2l },
  { name: 'Abracrim', img: impAbracrim },
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
        className="flex gap-16 whitespace-nowrap"
      >
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex items-center px-6"
          >
            <img 
              src={company.img.src} 
              alt={company.name} 
              className="h-24 w-auto object-contain"
              style={{ minWidth: '100px' }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-16 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Parceiros e Investidores
          </p>
        </motion.div>

        <CompanyMarquee />
      </div>
    </section>
  );
}
