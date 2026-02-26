import { motion } from 'framer-motion';
import { Send, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import logoBranca from '../assets/images/logo-branca.webp';

const footerLinks = {
  institucional: [
    { label: 'Sobre nós', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Contato', href: '#' },
  ],
  produto: [
    { label: 'Funcionalidades', href: '#' },
    { label: 'Preços', href: '#' },
    { label: 'API', href: '#' },
  ],
  suporte: [
    { label: 'Help Center', href: '#' },
    { label: 'Treinamentos', href: '#' },
    { label: 'Webinars', href: '#' },
  ],
  legal: [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src={logoBranca.src} alt="EasyJur" className="h-12" />
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              A plataforma de gestão jurídica mais completa do Brasil. 
              Tecnologia de ponta para advogados modernos.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">Receba nossas novidades</h4>
              <p className="text-gray-400 text-sm">Conteúdos exclusivos sobre gestão jurídica</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 md:w-64 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-gradient-red rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-shadow flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span className="md:hidden lg:inline">Inscrever-se</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 EasyJur. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Todos os sistemas operacionais</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
