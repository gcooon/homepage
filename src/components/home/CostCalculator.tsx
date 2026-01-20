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
    <section className="py-24 bg-gray-900" id="calculator">
      <Container>
        <motion.div
          className="text-center mb-12"
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <motion.div
            className="bg-gray-800 rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">기업 정보 입력</h3>

            {/* Asset Count */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-300">보유 자산 수량</label>
                <span className="text-brand-light font-bold text-xl">{assetCount}대</span>
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
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-300">평균 자산 가치</label>
                <span className="text-brand-light font-bold text-xl">{formatCurrency(avgAssetValue)}</span>
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
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-300">월 자산관리 시간</label>
                <span className="text-brand-light font-bold text-xl">{managementHours}시간</span>
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

            <div className="bg-gray-700/50 rounded-lg p-4 text-sm text-gray-400">
              <p>* 계산 기준</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>리퍼비시 구매 시 30% 절감 (연간 20% 교체 가정)</li>
                <li>매각 시 15% 추가 수익 (연간 10% 매각 가정)</li>
                <li>관리시간 70% 단축 (시급 5만원 기준)</li>
              </ul>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">예상 연간 절감액</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛒</span>
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

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💰</span>
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

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⏰</span>
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

              <div className="border-t border-white/20 pt-6">
                <div className="text-center">
                  <p className="text-white/70 mb-2">총 예상 연간 절감액</p>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-yellow-300"
                    key={savings.totalAnnual}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {formatCurrency(savings.totalAnnual)}
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
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

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: '🔒', text: '보안 인증' },
                { icon: '📊', text: '100+ 고객사' },
                { icon: '⭐', text: '만족도 98%' },
              ].map((badge, i) => (
                <div key={i} className="bg-gray-800 rounded-lg p-3 text-center">
                  <span className="text-2xl block mb-1">{badge.icon}</span>
                  <span className="text-gray-400 text-xs">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
