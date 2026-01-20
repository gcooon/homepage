import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';
import { BRAND, NAV_ITEMS, CONTACT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo/onekit-logo-white.svg"
              alt="원킷(OneKit)"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-400 mb-2">{BRAND.slogan}</p>
            <p className="text-gray-400">{BRAND.company}</p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
            </ul>
          </div>
        </div>

        {/* 하단바 */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 {BRAND.company}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
