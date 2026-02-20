'use client';

import { motion } from 'framer-motion';
import Button from '../common/Button';
import Container from '../common/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-violet-200/40 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
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
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200/50 px-4 py-2 rounded-full text-sm font-semibold text-violet-700">
                <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                IT 자산관리 전문 솔루션
              </span>
            </motion.div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                아직도 엑셀로
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  자산 관리
                </span>
                하시나요?
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                관리부터 구매·매각·렌탈까지, 올케어 서비스
              </p>
            </div>

            <div className="space-y-3 py-2">
              {[
                { highlight: '자산 현황', text: '실시간 파악 + 거래 타이밍 알림' },
                { highlight: '입퇴사 자산', text: '회수 → 매각/재배치 원클릭 연결' },
                { highlight: '교체 적기', text: '알림 → 리퍼비시 30% 절감 견적' },
                { highlight: '관리 솔루션', text: '무료 제공, 거래까지 원스톱' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg">
                    <span className="font-bold text-violet-600">{item.highlight}</span> {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 font-bold"
              >
                무료 자산 현황 진단받기
              </Button>
              <Button
                href="#calculator"
                variant="secondary"
                size="lg"
                className="border-2 border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50"
              >
                우리 회사 절감액 계산하기
              </Button>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: 30, suffix: '%', label: '비용 절감' },
                { value: 70, suffix: '%', label: '관리시간 단축' },
                { value: 100, suffix: '+', label: '기업 고객' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                  />
                  <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Modern SaaS Dashboard Mockup */}
          <motion.div
            className="mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-gray-400 border border-gray-200 flex items-center gap-2">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      app.onetoolit.com
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-5">
                  {/* Top Stats Row */}
                  <div className="grid grid-cols-4 gap-3 mb-5">
                    {[
                      { label: '총 자산', value: '2,847', unit: '대', color: 'from-violet-500 to-purple-500', icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2' },
                      { label: '운용 중', value: '2,312', unit: '대', color: 'from-emerald-500 to-teal-500', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                      { label: '유휴 자산', value: '127', unit: '대', color: 'from-amber-500 to-orange-500', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
                      { label: '절감 금액', value: '4.2', unit: '억', color: 'from-blue-500 to-cyan-500', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-100"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}>
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                          </svg>
                        </div>
                        <div className="text-[10px] text-gray-400 font-medium">{stat.label}</div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}<span className="text-xs text-gray-400 ml-0.5">{stat.unit}</span></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    {/* Donut Chart */}
                    <motion.div
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="text-xs font-semibold text-gray-700 mb-3">자산 유형별 현황</div>
                      <div className="flex items-center justify-center">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient1)" strokeWidth="12" strokeDasharray="125.6 251.2" strokeLinecap="round" transform="rotate(-90 50 50)" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient2)" strokeWidth="12" strokeDasharray="75.4 251.2" strokeDashoffset="-125.6" strokeLinecap="round" transform="rotate(-90 50 50)" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient3)" strokeWidth="12" strokeDasharray="50.2 251.2" strokeDashoffset="-201" strokeLinecap="round" transform="rotate(-90 50 50)" />
                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#a78bfa" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#06b6d4" />
                              <stop offset="100%" stopColor="#22d3ee" />
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#f59e0b" />
                              <stop offset="100%" stopColor="#fbbf24" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="flex justify-center gap-3 mt-3">
                        {[
                          { label: '노트북', color: 'bg-violet-500' },
                          { label: '모니터', color: 'bg-cyan-500' },
                          { label: '기타', color: 'bg-amber-500' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${item.color}`} />
                            <span className="text-[10px] text-gray-500">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Bar Chart */}
                    <motion.div
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="text-xs font-semibold text-gray-700 mb-3">월별 자산 변동</div>
                      <div className="flex items-end justify-between h-20 gap-1.5">
                        {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-violet-500 to-purple-400 rounded-t-sm"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.9 + i * 0.05, duration: 0.5 }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        {['1월', '2월', '3월', '4월', '5월', '6월', '7월'].map((month, i) => (
                          <span key={i} className="text-[8px] text-gray-400">{month}</span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Alert Cards */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="text-xs font-semibold text-gray-700 mb-2">스마트 알림</div>
                    {[
                      { icon: '💰', text: '노트북 3대 매각 적기 도래', tag: '수익 예상 120만원', tagColor: 'bg-emerald-100 text-emerald-700' },
                      { icon: '🔄', text: '모니터 5대 교체 추천', tag: '리퍼 30% 절감', tagColor: 'bg-blue-100 text-blue-700' },
                      { icon: '📦', text: '퇴사자 장비 3대 회수 완료', tag: '재배치 대기', tagColor: 'bg-amber-100 text-amber-700' },
                    ].map((alert, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 bg-white rounded-lg p-2.5 border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                      >
                        <span className="text-base">{alert.icon}</span>
                        <span className="text-xs text-gray-700 flex-1">{alert.text}</span>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${alert.tagColor}`}>{alert.tag}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-violet-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
              >
                무료 솔루션 제공
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl -z-10 rotate-12" />
              <div className="absolute -top-8 -left-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl -z-10 -rotate-12" />
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
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-violet-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
