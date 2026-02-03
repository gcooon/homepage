'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="flex lg:hidden justify-center py-3">
          <div className="flex flex-col items-start gap-4">
            {/* Logo - Same as desktop */}
            <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 leading-tight">IT 디바이스 통합 서비스</span>
                <span className="font-bold text-gray-900 text-lg leading-tight">ONE TOOL IT</span>
              </div>
            </Link>

            {/* Mobile Navigation - Below logo */}
            <Navigation isMobile />
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center h-20">
          {/* Logo - Full on desktop */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 leading-tight">IT 디바이스 통합 서비스</span>
              <span className="font-bold text-gray-900 text-lg leading-tight">ONE TOOL IT</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="flex flex-1 justify-center">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
