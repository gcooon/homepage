'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface NavigationProps {
  isMobile?: boolean;
}

export default function Navigation({ isMobile = false }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn(
      "flex",
      isMobile
        ? "flex-wrap justify-center gap-x-4 gap-y-2"
        : "items-center space-x-8"
    )}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors hover:text-brand-primary relative whitespace-nowrap",
            isMobile ? "text-sm font-semibold" : "text-base font-bold",
            pathname === item.href
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
