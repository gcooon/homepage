'use client';

import { motion } from 'framer-motion';
import Button from '../common/Button';
import Container from '../common/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image - IT devices */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`
        }}
      />

      {/* Dark Gray Gradient Overlay - professional IT look */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.85) 0%, rgba(55, 65, 81, 0.9) 100%)'
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
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
            style={{ touchAction: 'manipulation' }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{ touchAction: 'manipulation' }}
            >
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white">
                B2B IT 디바이스 종합 서비스
              </span>
            </motion.div>

            <div className="space-y-1">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FCD34D]">
                매각·구매·렌탈·유지보수·자산실사
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                IT자산의 모든 서비스
              </h1>
            </div>

            <div className="space-y-3 text-white">
              <div className="text-lg md:text-xl font-bold space-y-1">
                <p>✓ 노트북·모니터·데스크탑·태블릿 <span className="text-[#FCD34D]">모든 IT 디바이스</span></p>
                <p>✓ 리퍼비시로 <span className="text-[#FCD34D]">30% 비용 절감</span></p>
                <p>✓ 신제품도 <span className="text-[#FCD34D]">최적가 비교견적</span></p>
                <p>✓ 자산교체·매각·운영 <span className="text-[#FCD34D]">완전 무료 관리</span></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="font-bold shadow-xl border-white text-white hover:bg-white hover:text-gray-800"
              >
                무료견적문의
              </Button>
              <Button
                href="#calculator"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-800"
              >
                비용 절감액 확인하기
              </Button>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ touchAction: 'manipulation' }}
            >
              <div className="text-center">
                <AnimatedCounter
                  end={30}
                  suffix="%"
                  className="text-3xl md:text-4xl font-bold text-white"
                />
                <div className="text-sm text-white/80 mt-1">비용 절감</div>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  end={70}
                  suffix="%"
                  className="text-3xl md:text-4xl font-bold text-white"
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
            style={{ touchAction: 'manipulation' }}
          >
            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30">
                {/* Dashboard Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="ml-2 text-white text-base font-medium">노트북·모니터·데스크탑·태블릿 모든 IT 디바이스</span>
                </div>

                {/* Service Cards */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/15 rounded-lg p-4 text-center backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-300">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-base">구매</div>
                      <div className="text-[#FCD34D] text-sm font-semibold mt-1">30-50% 절감</div>
                    </div>
                    <div className="bg-white/15 rounded-lg p-4 text-center backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-300">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-base">매각</div>
                      <div className="text-[#FCD34D] text-sm font-semibold mt-1">15-20% 높은 가격</div>
                    </div>
                    <div className="bg-white/15 rounded-lg p-4 text-center backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-300">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-base">렌탈</div>
                      <div className="text-[#FCD34D] text-sm font-semibold mt-1">초기비용 0원</div>
                    </div>
                  </div>

                  {/* Device Stack */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-white text-base font-medium mb-3">처리 가능 디바이스</div>
                    <div className="flex flex-wrap gap-2">
                      {['노트북', 'PC', '모니터', '프린터', '서버', '태블릿'].map((device, i) => (
                        <motion.span
                          key={i}
                          className="bg-white/15 text-white text-sm px-3 py-1.5 rounded-full"
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
                    <div className="text-white text-sm font-medium">서비스 브랜드</div>
                    <div className="flex justify-between items-center bg-white/10 rounded-lg px-4 py-3">
                      {[
                        { name: 'LG', className: 'font-bold text-lg' },
                        { name: 'SAMSUNG', className: 'font-bold text-sm tracking-[0.05em]' },
                        { name: 'Apple', className: 'font-bold text-base' },
                        { name: 'HP', className: 'font-bold text-lg italic' },
                        { name: 'DELL', className: 'font-bold text-base italic tracking-wide' },
                      ].map((brand, i) => (
                        <motion.span
                          key={i}
                          className={`text-white hover:opacity-80 transition-opacity cursor-default ${brand.className}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileHover={{ opacity: 0.8 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                        >
                          {brand.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#FCD34D] text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
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
        style={{ touchAction: 'manipulation' }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
