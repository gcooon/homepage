'use client';

import { motion } from 'framer-motion';
import Container from '../common/Container';

const flowSteps = [
  {
    id: 'manage',
    title: '자산관리',
    subtitle: '통합관리 + 입퇴사',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-brand-primary to-brand-secondary',
    isMain: true,
  },
  {
    id: 'buy',
    title: '구매',
    subtitle: '리퍼비시 30% 절감',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'sell',
    title: '매각',
    subtitle: '최고가 보안 파기',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'rental',
    title: '렌탈',
    subtitle: '초기비용 0원',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'maintenance',
    title: '유지보수',
    subtitle: '수명 2년 연장',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'audit',
    title: '자산실사',
    subtitle: '99.9% 정확도',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function LifecycleFlowSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-light font-semibold text-sm uppercase tracking-wider">
            One-Stop Lifecycle
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-white">
            관리하면서 최적의 <span className="text-[#FCD34D]">구매·매각 타이밍</span>까지
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            자산관리 솔루션이 거래 시점을 자동으로 알려드립니다.
            <br className="hidden md:block" />
            관리부터 거래까지, 하나의 플랫폼에서 원스톱으로.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden md:flex items-center justify-center gap-4">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  className={`relative ${step.isMain ? 'scale-110' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`
                      w-28 h-28 rounded-2xl bg-gradient-to-br ${step.color}
                      flex flex-col items-center justify-center text-white
                      shadow-lg hover:shadow-xl transition-all duration-300
                      hover:-translate-y-1 cursor-pointer
                      ${step.isMain ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-900' : ''}
                    `}
                  >
                    <div className="mb-2">{step.icon}</div>
                    <div className="font-bold text-sm">{step.title}</div>
                    <div className="text-xs text-white/80 mt-0.5">{step.subtitle}</div>
                  </div>
                  {step.isMain && (
                    <motion.div
                      className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: 'spring' }}
                    >
                      무료
                    </motion.div>
                  )}
                </motion.div>

                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="mx-2 text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Cycle Arrow - 재투자 */}
          <motion.div
            className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <span className="text-sm font-medium">매각 수익으로 재투자</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
          </motion.div>

          {/* Mobile Flow */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`${step.isMain ? 'col-span-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`
                    w-full p-4 rounded-xl bg-gradient-to-br ${step.color}
                    flex items-center gap-3 text-white
                    shadow-lg
                    ${step.isMain ? 'ring-2 ring-yellow-400' : ''}
                  `}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm flex items-center gap-2">
                      {step.title}
                      {step.isMain && (
                        <span className="bg-yellow-400 text-gray-900 text-xs px-1.5 py-0.5 rounded">무료</span>
                      )}
                    </div>
                    <div className="text-xs text-white/80">{step.subtitle}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white font-medium">
              관리 솔루션이 <span className="text-[#FCD34D]">"이 자산 지금 매각하면 120만원"</span> 같은 거래 타이밍을 자동 알림
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
