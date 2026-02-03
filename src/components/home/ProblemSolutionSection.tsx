'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

// Problem Icons
const ProblemIcon = ({ type }: { type: string }) => {
  const icons: Record<string, ReactNode> = {
    chart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    wrench: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    currency: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    clipboard: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  };
  return icons[type] || icons.chart;
};

const problems = [
  {
    titlePrefix: '복잡한 ',
    titleHighlight: '멀티 벤더',
    titleSuffix: ' 관리',
    description: '구매·매각·렌탈·유지보수 업체가 모두 다름',
    color: 'from-slate-400 to-slate-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    titlePrefix: '',
    titleHighlight: '비효율적',
    titleSuffix: ' 프로세스',
    description: '중복 커뮤니케이션과 문서 작업의 반복',
    color: 'from-slate-400 to-slate-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    titlePrefix: '',
    titleHighlight: '비용과 시간',
    titleSuffix: '의 낭비',
    description: '최적가를 놓치고 관리 인력 투입 과다',
    color: 'from-slate-400 to-slate-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">
            Problem & Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            파편화된 자산관리, 아직도 계속하시겠습니까?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Problem Side */}
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-100 rounded-2xl p-8 shadow-lg border border-slate-300 h-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-700">PROBLEM</h3>
              </div>

              <div className="bg-slate-200/50 rounded-xl p-6 mb-6 border border-slate-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-slate-700"><span className="text-red-600">IT자산관리의 어려움</span></h4>
                  <p className="text-slate-600 font-medium">
                    담당자의 업무 과부하와 비용낭비
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 hover:shadow-md transition-all duration-300 flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-12 h-12 flex-shrink-0 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center text-white shadow-md`}>
                      {problem.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-bold text-xl">
                        {problem.titlePrefix}<span className="text-red-600">{problem.titleHighlight}</span>{problem.titleSuffix}
                      </h4>
                      <p className="text-gray-600 text-base font-medium">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Arrow */}
            <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
              <motion.div
                className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-3 rounded-full shadow-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 shadow-xl text-white relative overflow-hidden h-full">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Solution</h3>
                    <p className="text-white/70 text-sm">One Tool IT</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 mb-4 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">IT자산 라이프사이클 통합 관리</h4>
                    <p className="text-white/80">
                      구매부터 매각까지, 하나의 플랫폼에서 해결
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-400/20 rounded-xl p-4 mb-4 backdrop-blur-sm border border-yellow-400/30 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg">
                      <span className="text-yellow-300">IT자산 자동 견적</span> & <span className="text-yellow-300">매각 제안</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg">
                      <span className="text-yellow-300">최저가 구매</span>와 <span className="text-yellow-300">최고가 매각</span> 타이밍 알림
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm border border-white/10">
                    <div className="text-3xl font-bold text-yellow-300">
                      <AnimatedCounter end={30} suffix="%" />
                    </div>
                    <div className="text-white/80 text-sm mt-1">비용 절감</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm border border-white/10">
                    <div className="text-3xl font-bold text-yellow-300">
                      <AnimatedCounter end={70} suffix="%" />
                    </div>
                    <div className="text-white/80 text-sm mt-1">관리시간 단축</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Arrow */}
        <div className="flex lg:hidden justify-center my-6">
          <motion.div
            className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-3 rounded-full shadow-lg rotate-90"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
