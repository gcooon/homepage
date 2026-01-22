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

  const firstRowItems = NAV_ITEMS.slice(0, 3);
  const secondRowItems = NAV_ITEMS.slice(3);

  const renderLink = (item: typeof NAV_ITEMS[number]) => (
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
  );

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2">
        <nav className="flex justify-center gap-x-4">
          {firstRowItems.map(renderLink)}
        </nav>
        <nav className="flex justify-end gap-x-4">
          {secondRowItems.map(renderLink)}
        </nav>
      </div>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      {NAV_ITEMS.map(renderLink)}
    </nav>
  );
}
