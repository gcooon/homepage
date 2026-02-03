'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface NavigationProps {
  isMobile?: boolean;
}

export default function Navigation({ isMobile = false }: NavigationProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('/');

  useEffect(() => {
    // Only run scroll spy on home page
    if (pathname !== '/') {
      setActiveSection(pathname);
      return;
    }

    const handleScroll = () => {
      const sections = ['services', 'calculator'];
      const scrollPosition = window.scrollY + 150;

      // Check if at top of page
      if (scrollPosition < 300) {
        setActiveSection('/');
        return;
      }

      // Find current section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`/#${sectionId}`);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For home page link, scroll to top
    if (href === '/') {
      if (pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('/');
      }
      return;
    }

    // For hash links on the same page
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(href);
      }
    }
  };

  const isActive = (href: string) => {
    if (pathname === '/') {
      return activeSection === href;
    }
    return pathname === href;
  };

  return (
    <nav className={cn(
      "flex",
      isMobile
        ? "flex-wrap justify-start gap-x-4 gap-y-2"
        : "items-center space-x-8"
    )}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={cn(
            "transition-colors hover:text-brand-primary relative whitespace-nowrap",
            isMobile ? "text-sm font-semibold" : "text-base font-bold",
            isActive(item.href)
              ? "text-brand-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-primary"
              : "text-gray-800"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
