'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';

export default function CostCalculator() {
  const [assetCount, setAssetCount] = useState(100);
  const [avgAssetValue, setAvgAssetValue] = useState(1500000);
  const [managementHours, setManagementHours] = useState(20);

  const [savings, setSavings] = useState({
    purchaseSavings: 0,
    sellSavings: 0,
    timeSavings: 0,
    totalAnnual: 0,
  });

  useEffect(() => {
    const purchaseSavings = assetCount * avgAssetValue * 0.3 * 0.2;
    const sellSavings = assetCount * avgAssetValue * 0.15 * 0.1;
    const timeSavings = managementHours * 0.7 * 12 * 50000;
    const totalAnnual = purchaseSavings + sellSavings + timeSavings;

    setSavings({
      purchaseSavings,
      sellSavings,
      timeSavings,
      totalAnnual,
    });
  }, [assetCount, avgAssetValue, managementHours]);

  const formatCurrency = (value: number) => {
    if (value >= 100000000) {
      return `${(value / 100000000).toFixed(1)}억원`;
    } else if (value >= 10000) {
      return `${(value / 10000).toFixed(0)}만원`;
    }
    return `${value.toLocaleString()}원`;
  };

  return (
    <section className="py-12 lg:py-24 bg-gray-900" id="calculator">
      <Container>
        <motion.div
          className="text-center mb-6 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-light font-semibold text-sm uppercase tracking-wider">
            Cost Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            우리 기업은 얼마나 아낄 수 있을까?
          </h2>
          <p className="text-gray-400 mt-4">
            간단한 입력만으로 예상 절감액을 확인해보세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          {/* Input Section */}
          <motion.div
            className="bg-gray-800 rounded-2xl p-4 lg:p-6 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">기업 정보 입력</h3>

            {/* Asset Count */}
            <div className="mb-3 lg:mb-5">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-300 text-sm">보유 자산 수량</label>
                <span className="text-brand-light font-bold text-lg">{assetCount}대</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={assetCount}
                onChange={(e) => setAssetCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10대</span>
                <span>1,000대</span>
              </div>
            </div>

            {/* Average Asset Value */}
            <div className="mb-3 lg:mb-5">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-300 text-sm">평균 자산 가치</label>
                <span className="text-brand-light font-bold text-lg">{formatCurrency(avgAssetValue)}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="5000000"
                step="100000"
                value={avgAssetValue}
                onChange={(e) => setAvgAssetValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50만원</span>
                <span>500만원</span>
              </div>
            </div>

            {/* Management Hours */}
            <div className="mb-3 lg:mb-5">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-300 text-sm">월 자산관리 시간</label>
                <span className="text-brand-light font-bold text-lg">{managementHours}시간</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={managementHours}
                onChange={(e) => setManagementHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5시간</span>
                <span>80시간</span>
              </div>
            </div>

            <div className="hidden lg:block bg-gray-700/50 rounded-lg p-3 text-sm text-gray-400 mt-auto">
              <p>* 계산 기준</p>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs">
                <li>리퍼비시 구매 시 30% 절감 (연간 20% 교체 가정)</li>
                <li>매각 시 15% 추가 수익 (연간 10% 매각 가정)</li>
                <li>관리시간 70% 단축 (시급 5만원 기준)</li>
              </ul>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-4 lg:p-6 text-white h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4">예상 연간 절감액</h3>

              {/* 모바일: 총 절감액 상단 표시 */}
              <div className="lg:hidden mb-4 pb-4 border-b border-white/20">
                <div className="text-center">
                  <p className="text-white/70 text-sm mb-1">총 예상 연간 절감액</p>
                  <motion.div
                    className="text-3xl font-bold text-yellow-300"
                    key={`mobile-${savings.totalAnnual}`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {formatCurrency(savings.totalAnnual)}
                  </motion.div>
                </div>
              </div>

              <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span>구매 비용 절감</span>
                    </div>
                    <motion.span
                      className="font-bold text-xl"
                      key={savings.purchaseSavings}
                      initial={{ scale: 1.2, color: '#fde047' }}
                      animate={{ scale: 1, color: '#ffffff' }}
                    >
                      {formatCurrency(savings.purchaseSavings)}
                    </motion.span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span>매각 추가 수익</span>
                    </div>
                    <motion.span
                      className="font-bold text-xl"
                      key={savings.sellSavings}
                      initial={{ scale: 1.2, color: '#fde047' }}
                      animate={{ scale: 1, color: '#ffffff' }}
                    >
                      {formatCurrency(savings.sellSavings)}
                    </motion.span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span>시간 비용 절감</span>
                    </div>
                    <motion.span
                      className="font-bold text-xl"
                      key={savings.timeSavings}
                      initial={{ scale: 1.2, color: '#fde047' }}
                      animate={{ scale: 1, color: '#ffffff' }}
                    >
                      {formatCurrency(savings.timeSavings)}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* 데스크탑: 총 절감액 하단 표시 */}
              <div className="hidden lg:block border-t border-white/20 pt-4">
                <div className="text-center">
                  <p className="text-white/70 text-sm mb-1">총 예상 연간 절감액</p>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-yellow-300"
                    key={`desktop-${savings.totalAnnual}`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {formatCurrency(savings.totalAnnual)}
                  </motion.div>
                </div>
              </div>

              <div className="mt-auto pt-4 space-y-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full bg-white text-brand-primary hover:bg-yellow-300 hover:text-brand-secondary font-bold"
                >
                  무료 상담 신청하기
                </Button>
                <p className="text-center text-white/60 text-sm">
                  전문 컨설턴트가 맞춤 견적을 제안해드립니다
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
