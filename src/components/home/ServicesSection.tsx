'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import { services, Service } from '@/lib/data/services';

function ServiceCard({ service, index, expandedId, setExpandedId }: {
  service: Service;
  index: number;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
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
          ${expandedId === service.id ? 'ring-2 ring-brand-primary' : 'hover:shadow-xl hover:-translate-y-1'}
        `}
        onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
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
              <span className="text-4xl">{service.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.subtitle}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedId === service.id ? 180 : 0 }}
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
          <AnimatePresence>
            {expandedId === service.id && (
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
                    <div className="flex items-start gap-2">
                      <span className="text-lg">💡</span>
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
          {expandedId !== service.id && (
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
