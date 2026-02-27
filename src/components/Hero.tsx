import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from '../lib/utils';
import DashboardMockup from './DashboardMockup';

import profile1 from '../assets/images/profiles/Screenshot_1.png';
import profile2 from '../assets/images/profiles/Screenshot_2.png';
import profile3 from '../assets/images/profiles/Screenshot_3.png';
import profile4 from '../assets/images/profiles/Screenshot_4.png';
import profile5 from '../assets/images/profiles/Screenshot_5.png';

interface HeroProps {
  onCTAClick?: () => void;
}

function ShimmerButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 font-semibold text-white transition-all duration-300 whitespace-nowrap",
        "bg-gradient-red hover:shadow-[0_0_40px_-10px_rgba(229,41,63,0.5)]",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
    </button>
  );
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="text-sm font-semibold text-primary">A plataforma nº #1 em eficiência jurídica.</span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-black dark:text-white">Software Jurídico com </span>
              <span className="text-gradient">Inteligência Artificial</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Você foca no Direito, nós cuidamos da gestão. Automatize tarefas, controle prazos 
              e tenha um escritório mais produtivo com a EasyJur.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <ShimmerButton onClick={onCTAClick}>
                Experimente Grátis
                <ArrowRight className="w-4 h-4" />
              </ShimmerButton>
              <button className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:border-primary hover:text-primary transition-colors whitespace-nowrap bg-white dark:bg-gray-800">
                <Play className="w-4 h-4" />
                Ver Demonstração
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start sm:justify-start gap-4 sm:gap-8 pt-2">
              <div className="flex -space-x-3">
                {[profile1, profile2, profile3, profile4, profile5].map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={`Profile ${idx + 1}`}
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                  />
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mais de 10 mil advogados</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
