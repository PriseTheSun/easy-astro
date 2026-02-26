import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  {
    label: 'Soluções',
    children: [
      { label: 'Software de Gestão Jurídica | Escritórios', href: '#' },
      { label: 'Software de Gestão Jurídica | Empresas', href: '#' },
      { label: 'Terceirização de Demandas Jurídicas', href: '#' },
      { label: 'Planos', href: '#' },
    ],
  },
  {
    label: 'Conteúdos',
    children: [
      { label: 'Artigos e Notícias', href: '#' },
      { label: 'Central de Aprendizagem', href: '#' },
      { label: 'Materiais Gratuitos', href: '#' },
      { label: 'Cursos', href: '#' },
      { label: 'E-Books', href: '#' },
      { label: 'Planilhas', href: '#' },
      { label: 'Jurisprudência', href: '#' },
      { label: 'Modelos de Petição', href: '#' },
    ],
  },
  {
    label: 'A EasyJur',
    children: [
      { label: 'Manifesto', href: '#' },
      { label: 'Sobre Nós', href: '#' },
      { label: 'Fale Conosco', href: '#' },
      { label: 'Trabalhe Conosco', href: '#' },
      { label: 'Suporte ao Cliente', href: '#' },
      { label: 'Casos de Sucesso', href: '#' },
      { label: 'Porque Somos Diferentes', href: '#' },
      { label: 'Cálculo do Retorno de Investimento', href: '#' },
    ],
  },
];

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
}

function ShimmerButton({ children, className }: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 font-medium text-white transition-all duration-300",
        "bg-gradient-red hover:shadow-[0_0_40px_-10px_rgba(229,41,63,0.5)]",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
    </button>
  );
}

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative w-14 h-8 rounded-full transition-colors duration-300",
        isDark ? "bg-gray-800" : "bg-gray-200"
      )}
    >
      <motion.div
        animate={{ x: isDark ? 26 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "absolute top-1 w-6 h-6 rounded-full flex items-center justify-center transition-colors",
          isDark ? "bg-primary" : "bg-yellow-400"
        )}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
        ) : (
          <Sun className="w-3.5 h-3.5 text-white" strokeWidth={2} />
        )}
      </motion.div>
    </button>
  );
}

interface HeaderProps {
  onToggleDarkMode?: () => void;
  isDarkMode?: boolean;
}

export default function Header({ onToggleDarkMode, isDarkMode = false }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="EasyJur" className="h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                    activeDropdown === item.label ? "text-primary" : "text-gray-700 hover:text-primary"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
              Entrar
            </button>
            <ShimmerButton>Testar 7 dias Grátis</ShimmerButton>
            <ThemeToggle isDark={isDarkMode} onToggle={onToggleDarkMode || (() => {})} />
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    {item.children && <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === item.label && "rotate-180")} />}
                  </button>
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1"
                      >
                        {item.children.map((child) => (
                          <a key={child.label} href={child.href} className="block py-2 text-sm text-gray-600">
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <button className="w-full text-left py-2 text-gray-700 font-medium">Entrar</button>
                <ShimmerButton className="w-full justify-center">Testar 7 dias Grátis</ShimmerButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
