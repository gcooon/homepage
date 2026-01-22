'use client';

import { motion } from 'framer-motion';
import Button from '../common/Button';
import Container from '../common/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2847 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium" style={{ color: '#00D9FF' }}>
                B2B IT 디바이스 통합 솔루션
              </span>
            </motion.div>

            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold" style={{ color: '#00D9FF' }}>
                매각·구매·렌탈·유지보수·자산실사
              </p>
              <h1 className="font-bold leading-tight text-white">
                <span className="text-2xl md:text-3xl lg:text-4xl">IT 디바이스의 모든 서비스</span><br />
                <span className="text-3xl md:text-4xl lg:text-5xl"><strong className="text-white">원툴플랜</strong>이 해결합니다</span>
              </h1>
            </div>

            <div className="space-y-3 text-white/90">
              <p className="text-xl md:text-2xl font-semibold">
                운영·교체·매각 전체 흐름을 <span className="font-bold text-2xl md:text-3xl" style={{ color: '#00D9FF' }}>무료</span>로 관리해드려요
              </p>
              <div className="text-xl md:text-2xl font-bold space-y-1">
                <p>✓ 리퍼비시로 <span style={{ color: '#FF6B35' }}>30% 비용 절감</span></p>
                <p>✓ 매각 시 <span style={{ color: '#FF6B35' }}>15% 추가 수익</span></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="font-bold shadow-xl hover:opacity-90 bg-[#00D9FF] text-[#0A1628]"
              >
                무료견적문의
              </Button>
              <Button
                href="#calculator"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary"
              >
                비용 절감액 확인하기
              </Button>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <AnimatedCounter
                  end={30}
                  suffix="%"
                  className="text-3xl md:text-4xl font-bold text-[#FF6B35]"
                />
                <div className="text-sm text-white/80 mt-1">비용 절감</div>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  end={70}
                  suffix="%"
                  className="text-3xl md:text-4xl font-bold text-[#FF6B35]"
                />
                <div className="text-sm text-white/80 mt-1">관리시간 단축</div>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  end={100}
                  suffix="+"
                  className="text-3xl md:text-4xl font-bold text-white"
                />
                <div className="text-sm text-white/80 mt-1">기업 고객</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
                {/* Dashboard Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-white/60 text-sm">One Tool Plan Dashboard</span>
                </div>

                {/* Service Cards */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-bold">구매</div>
                      <div className="text-green-400 text-xs mt-1">30-50% 절감</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-bold">매각</div>
                      <div className="text-green-400 text-xs mt-1">15-20% 높은 가격</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div className="text-white font-bold">렌탈</div>
                      <div className="text-green-400 text-xs mt-1">초기비용 0원</div>
                    </div>
                  </div>

                  {/* Device Stack */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/60 text-xs mb-3">처리 가능 디바이스</div>
                    <div className="flex flex-wrap gap-2">
                      {['노트북', 'PC', '모니터', '프린터', '서버', '태블릿'].map((device, i) => (
                        <motion.span
                          key={i}
                          className="bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          {device}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Brand Partners */}
                  <div className="space-y-2">
                    <div className="text-white/60 text-xs">서비스 브랜드</div>
                    <div className="flex justify-between items-center bg-white/5 rounded-lg px-4 py-3">
                      {['Samsung', 'LG', 'HP', 'Dell', 'Apple'].map((brand, i) => (
                        <motion.span
                          key={i}
                          className="text-white/70 text-xs font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                        >
                          {brand}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
              >
                3개 파트너사 비교견적
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
