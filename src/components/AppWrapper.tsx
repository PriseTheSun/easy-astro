import { useState, type ReactNode } from 'react';
import Header from './Header';

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      {children}
    </>
  );
}
