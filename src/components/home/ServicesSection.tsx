'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import { services, Service } from '@/lib/data/services';

// SVG Icon Components
const ServiceIcon = ({ icon, className = "w-8 h-8" }: { icon: string; className?: string }) => {
  const icons: Record<string, ReactNode> = {
    currency: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    cart: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    refresh: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    wrench: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    clipboard: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    gift: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  };
  return icons[icon] || icons.currency;
};

function ServiceCard({ service, index, expandedIds, toggleExpanded }: {
  service: Service;
  index: number;
  expandedIds: Set<string>;
  toggleExpanded: (id: string) => void;
}) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        className={`
          bg-white rounded-2xl overflow-hidden shadow-lg border
          transition-all duration-300 cursor-pointer h-full
          ${service.isFree ? 'border-gray-200 opacity-90' : 'border-gray-100'}
          ${expandedIds.has(service.id) ? 'ring-2 ring-brand-primary' : 'hover:shadow-xl hover:-translate-y-1'}
        `}
        onClick={() => toggleExpanded(service.id)}
      >
        {/* Card Header */}
        <div className={`bg-gradient-to-r ${service.background} p-6 text-white relative`}>
          {service.isFree && (
            <span className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
              FREE
            </span>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <ServiceIcon icon={service.icon} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.subtitle}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedIds.has(service.id) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-4">{service.description}</p>

          {/* Stats */}
          {service.stats && (
            <div className="grid grid-cols-3 gap-2 mb-4">
              {service.stats.map((stat, i) => (
                <div key={i} className="text-center bg-gray-50 rounded-lg p-2">
                  <div className={`font-bold text-sm ${service.isFree ? 'text-green-600' : 'text-brand-primary'}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Expandable Content */}
          <AnimatePresence initial={false}>
            {expandedIds.has(service.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-100">
                  {/* Market Context */}
                  <div className={`rounded-lg p-4 mb-4 ${service.isFree ? 'bg-gray-50' : 'bg-purple-50'}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${service.isFree ? 'bg-gray-200' : 'bg-purple-100'}`}>
                        <svg className={`w-4 h-4 ${service.isFree ? 'text-gray-600' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{service.marketContext}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${service.isFree ? 'bg-green-100' : 'bg-brand-primary/10'}`}>
                          <svg className={`w-3 h-3 ${service.isFree ? 'text-green-600' : 'text-brand-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full mt-4 py-3 rounded-lg font-semibold transition-colors ${
                      service.isFree
                        ? 'bg-gray-600 text-white hover:bg-gray-700'
                        : 'bg-brand-primary text-white hover:bg-brand-secondary'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = '/contact';
                    }}
                  >
                    {service.isFree ? '서비스 문의하기' : '무료 견적 받기'}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Click hint */}
          {!expandedIds.has(service.id) && (
            <p className={`text-sm font-medium text-center mt-2 ${service.isFree ? 'text-gray-500' : 'text-brand-primary'}`}>
              클릭하여 자세히 보기 →
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  // Initialize with all service IDs expanded by default
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(services.map(s => s.id))
  );

  const toggleExpanded = (id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-24 bg-white" id="services">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            IT 자산의 전체 라이프사이클을 관리합니다
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            매각부터 구매, 렌탈, 유지보수, 자산실사까지
            <br className="hidden md:block" />
            One Tool Plan 하나로 모든 것을 해결하세요.
          </p>
        </motion.div>

        {/* All Services - 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              expandedIds={expandedIds}
              toggleExpanded={toggleExpanded}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
