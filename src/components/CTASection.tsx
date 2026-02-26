import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import priscilaImage from '../assets/images/Priscila.avif';

function ShimmerButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button
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

export default function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 border border-primary/10 rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/20 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-3xl transform rotate-3" />
              <div className="relative bg-gray-800 rounded-3xl overflow-hidden h-full">
                <img 
                  src={priscilaImage.src} 
                  alt="Priscila - Especialista EasyJur" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl p-3 flex items-center justify-center"
              >
                <MessageCircle className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ainda tem dúvidas sobre qual software{' '}
              <span className="text-gradient">jurídico escolher?</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8">
              Converse com um de nossos especialistas e descubra como a EasyJur pode 
              transformar a gestão do seu escritório. Receba uma consultoria personalizada 
              sem compromisso.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Análise personalizada das suas necessidades',
                'Demonstração gratuita do sistema',
                'Suporte especializado em português',
                'Resposta em até 24 horas',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <ShimmerButton className="text-lg">
              FALAR COM ESPECIALISTA
              <ArrowRight className="w-5 h-5" />
            </ShimmerButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
