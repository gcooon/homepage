'use client';

import { motion } from 'framer-motion';
import Container from '../common/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

const problems = [
  { icon: '📊', text: '구매 따로' },
  { icon: '🔧', text: '수리 따로' },
  { icon: '💰', text: '매각 따로' },
  { icon: '📋', text: '실사 따로' },
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-600">Problem</h3>
                  <p className="text-gray-500 text-sm">현재 상황</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="bg-red-50 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-3xl mb-2 block">{problem.icon}</span>
                    <span className="text-gray-700 font-medium">{problem.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                <p className="text-red-700 font-medium">
                  여러 업체, 복잡한 프로세스, 높은 비용
                </p>
                <p className="text-red-600 text-sm mt-1">
                  = 시간과 비용 낭비의 악순환
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
              <motion.div
                className="bg-brand-primary text-white p-3 rounded-full shadow-lg"
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Solution</h3>
                  <p className="text-white/70 text-sm">One Tool Plan</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                <div className="text-center">
                  <span className="text-5xl mb-4 block">🔄</span>
                  <h4 className="text-2xl font-bold mb-2">Lifecycle 통합 관리</h4>
                  <p className="text-white/80">
                    구매부터 매각까지, 하나의 플랫폼에서 해결
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-300">
                    <AnimatedCounter end={30} suffix="%" />
                  </div>
                  <div className="text-white/80 text-sm mt-1">비용 절감</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-300">
                    <AnimatedCounter end={70} suffix="%" />
                  </div>
                  <div className="text-white/80 text-sm mt-1">관리시간 단축</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Arrow */}
        <div className="flex lg:hidden justify-center my-6">
          <motion.div
            className="bg-brand-primary text-white p-3 rounded-full shadow-lg rotate-90"
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
