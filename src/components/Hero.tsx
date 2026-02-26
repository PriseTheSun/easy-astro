import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeroProps {
  onCTAClick?: () => void;
}

function ShimmerButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full px-8 font-semibold text-white transition-all duration-300",
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-gray-50/30" />
      
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Software Jurídico com IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">Software Jurídico com </span>
              <span className="text-gradient">Inteligência Artificial:</span>
              <br />
              <span className="text-black">Produtividade de Verdade.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Você foca no Direito, nós cuidamos do resto. Automatize tarefas, controle prazos e 
              tenha uma gestão completa do seu escritório com a tecnologia EasyJur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <ShimmerButton className="text-lg" onClick={onCTAClick}>
                EXPERIMENTE GRÁTIS AGORA
                <ArrowRight className="w-5 h-5" />
              </ShimmerButton>
              <button className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary hover:text-primary transition-colors">
                <Play className="w-5 h-5" />
                Ver demonstração
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500">Mais de 10.000 advogados satisfeitos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-8 bg-gray-100 rounded-full flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                <div className="pt-16 p-6 space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                  <div className="h-32 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-lg">⚖</span>
                      </div>
                      <div>
                        <div className="h-3 bg-red-200 rounded w-24 mb-1" />
                        <div className="h-2 bg-red-100 rounded w-16" />
                      </div>
                    </div>
                    <div className="h-2 bg-red-200 rounded w-full mb-2" />
                    <div className="h-2 bg-red-100 rounded w-2/3" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-gray-50 rounded-xl p-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 mb-2" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                    </div>
                    <div className="h-20 bg-gray-50 rounded-xl p-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 mb-2" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                    </div>
                    <div className="h-20 bg-gray-50 rounded-xl p-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 mb-2" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 w-24 h-24 bg-white rounded-2xl shadow-xl p-3 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-gray-500">Satisfação</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 bottom-1/4 w-20 h-20 bg-white rounded-2xl shadow-xl p-3 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">🏆</div>
                  <div className="text-xs text-gray-500">Top 1</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
