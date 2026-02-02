'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';

// 아이콘 컴포넌트들
const ShoppingCartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CurrencyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WrenchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// 콤팩트 입력 컴포넌트
interface CompactInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}

function CompactInput({ label, value, onChange, min, max, step, suffix = '' }: CompactInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, '');
    const numValue = Number(rawValue) || min;
    onChange(Math.min(max, Math.max(min, numValue)));
  };

  const increment = () => onChange(Math.min(max, value + step));
  const decrement = () => onChange(Math.max(min, value - step));

  const formatDisplay = (v: number) => {
    if (v >= 10000 && !suffix) return `${(v / 10000).toFixed(0)}만원`;
    return v.toLocaleString() + suffix;
  };

  return (
    <div className="bg-gray-700/50 rounded-lg p-2.5">
      <label className="text-gray-400 text-xs block mb-1.5">{label}</label>
      <div className="flex items-center gap-1.5">
        <button
          onClick={decrement}
          className="w-7 h-7 bg-gray-600 hover:bg-gray-500 rounded text-white text-base flex items-center justify-center transition-colors"
        >
          -
        </button>
        <input
          type="text"
          value={formatDisplay(value)}
          onChange={handleInputChange}
          className="flex-1 bg-gray-800 text-brand-light text-center px-1 py-1.5 rounded text-sm font-bold border border-gray-600 focus:border-brand-light focus:outline-none min-w-0"
        />
        <button
          onClick={increment}
          className="w-7 h-7 bg-gray-600 hover:bg-gray-500 rounded text-white text-base flex items-center justify-center transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function CostCalculator() {
  // 자산 현황
  const [assetCount, setAssetCount] = useState(10);
  const [avgAssetValue, setAvgAssetValue] = useState(500000);

  // 자산 현황 추가
  const [deviceAge, setDeviceAge] = useState<'under3' | '3to5' | 'over5'>('3to5');
  const [replacementRate, setReplacementRate] = useState(20);

  // 운영 정보
  const [itStaffCount, setItStaffCount] = useState(1);
  const [managementHours, setManagementHours] = useState(20);
  const [maintenanceCost, setMaintenanceCost] = useState(100000);

  // 시급은 고정값으로 계산에만 사용
  const hourlyRate = 12000;

  // 리스크 요소
  const [annualLoss, setAnnualLoss] = useState(3);

  // 계산 결과
  const [savings, setSavings] = useState({
    purchaseSavings: 0,
    sellSavings: 0,
    maintenanceSavings: 0,
    laborSavings: 0,
    lossPreventionSavings: 0,
    totalAnnual: 0,
  });

  // 모달 상태
  const [showMethodModal, setShowMethodModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // 연식에 따른 교체율 가중치
  const ageMultiplier = deviceAge === 'under3' ? 0.8 : deviceAge === '3to5' ? 1 : 1.3;

  useEffect(() => {
    // 1. 구매 비용 절감 = (디바이스 수 × 교체 비율 × 평균 단가 × 30%)
    const purchaseSavings = assetCount * (replacementRate / 100) * avgAssetValue * 0.3 * ageMultiplier;

    // 2. 매각 추가 수익 = (디바이스 수 × 교체 비율 × 평균 단가 × 15%)
    const sellSavings = assetCount * (replacementRate / 100) * avgAssetValue * 0.15;

    // 3. 유지보수 절감 = (현재 유지보수 비용 × 12 × 20%)
    const maintenanceSavings = maintenanceCost * 12 * 0.2;

    // 4. 인건비 절감 = (월 관리시간 × 담당인원 × 30% × 시급 × 12)
    const laborSavings = managementHours * itStaffCount * 0.3 * hourlyRate * 12;

    // 5. 자산 손실 방지 = (연간 분실 건수 × 평균 자산 단가 × 80%)
    const lossPreventionSavings = annualLoss * avgAssetValue * 0.8;

    const totalAnnual = purchaseSavings + sellSavings + maintenanceSavings + laborSavings + lossPreventionSavings;

    setSavings({
      purchaseSavings,
      sellSavings,
      maintenanceSavings,
      laborSavings,
      lossPreventionSavings,
      totalAnnual,
    });
  }, [assetCount, avgAssetValue, managementHours, deviceAge, replacementRate, itStaffCount, hourlyRate, maintenanceCost, annualLoss, ageMultiplier]);

  const formatCurrency = (value: number) => {
    if (value >= 100000000) {
      return `${(value / 100000000).toFixed(1)}억원`;
    } else if (value >= 10000) {
      return `${Math.round(value / 10000).toLocaleString()}만원`;
    }
    return `${value.toLocaleString()}원`;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/send-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          savings,
          inputs: {
            assetCount,
            avgAssetValue,
            deviceAge,
            replacementRate,
            itStaffCount,
            managementHours,
            maintenanceCost,
            annualLoss,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '이메일 발송에 실패했습니다.');
      }

      setEmailSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : '오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-gray-900" id="calculator">
      <Container>
        <motion.div
          className="text-center mb-6 lg:mb-8"
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
            기업 정보를 입력하고 예상 절감액을 실시간으로 확인하세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* 입력 섹션 */}
          <motion.div
            className="bg-gray-800 rounded-2xl p-4 lg:p-5 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* 자산 현황 */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center text-[10px]">1</span>
                자산 현황
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <CompactInput
                  label="보유 디바이스 수"
                  value={assetCount}
                  onChange={setAssetCount}
                  min={10}
                  max={500}
                  step={10}
                  suffix="대"
                />
                <CompactInput
                  label="평균 디바이스 단가"
                  value={avgAssetValue}
                  onChange={setAvgAssetValue}
                  min={300000}
                  max={3000000}
                  step={100000}
                />
              </div>
            </div>

            {/* 자산 연식 및 교체 */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center text-[10px]">2</span>
                자산 연식 및 교체
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-2.5">
                  <label className="text-gray-400 text-xs block mb-1.5">평균 디바이스 연식</label>
                  <div className="flex gap-1.5">
                    {[
                      { value: 'under3', label: '3년↓' },
                      { value: '3to5', label: '3-5년' },
                      { value: 'over5', label: '5년↑' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setDeviceAge(option.value as 'under3' | '3to5' | 'over5')}
                        className={`flex-1 py-1.5 rounded text-xs font-medium transition-all ${
                          deviceAge === option.value
                            ? 'bg-brand-primary text-white'
                            : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                <CompactInput
                  label="연간 교체 비율"
                  value={replacementRate}
                  onChange={setReplacementRate}
                  min={10}
                  max={50}
                  step={5}
                  suffix="%"
                />
              </div>
            </div>

            {/* 운영 정보 */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center text-[10px]">3</span>
                운영 정보
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <CompactInput
                  label="IT 담당 인원"
                  value={itStaffCount}
                  onChange={setItStaffCount}
                  min={1}
                  max={5}
                  step={1}
                  suffix="명"
                />
                <CompactInput
                  label="월 관리시간/인"
                  value={managementHours}
                  onChange={setManagementHours}
                  min={5}
                  max={80}
                  step={5}
                  suffix="시간"
                />
              </div>
            </div>

            {/* 리스크 요소 */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center text-[10px]">4</span>
                리스크 요소
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <CompactInput
                  label="유지보수 월비용"
                  value={maintenanceCost}
                  onChange={setMaintenanceCost}
                  min={100000}
                  max={2000000}
                  step={100000}
                />
                <CompactInput
                  label="연간 분실/도난 건수"
                  value={annualLoss}
                  onChange={setAnnualLoss}
                  min={0}
                  max={20}
                  step={1}
                  suffix="건"
                />
              </div>
            </div>

            {/* 계산 방식 보기 */}
            <button
              onClick={() => setShowMethodModal(true)}
              className="w-full text-sm text-brand-light hover:text-white transition-colors flex items-center justify-center gap-1 mt-auto pt-4"
            >
              <InfoIcon />
              계산 방식 보기
            </button>
          </motion.div>

          {/* 결과 섹션 */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-4 lg:p-5 text-white h-full flex flex-col">
              {/* 총 절감액 + 추가 지표 */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/20">
                <div>
                  <p className="text-white/70 text-sm mb-1">예상 연간 총 절감액</p>
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold text-yellow-300"
                    key={savings.totalAnnual}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {formatCurrency(savings.totalAnnual)}
                  </motion.div>
                </div>
                <div className="text-right space-y-1">
                  <div>
                    <span className="text-white/60 text-xs">월간 </span>
                    <span className="text-white font-bold">{formatCurrency(savings.totalAnnual / 12)}</span>
                  </div>
                  <div>
                    <span className="text-white/60 text-xs">3년 </span>
                    <span className="text-white font-bold">{formatCurrency(savings.totalAnnual * 3)}</span>
                  </div>
                </div>
              </div>

              {/* 항목별 절감액 - 콤팩트 리스트 with 막대차트 */}
              <div className="space-y-2 mb-4">
                {(() => {
                  const items = [
                    { icon: <ShoppingCartIcon />, title: '구매 비용 절감', amount: savings.purchaseSavings, color: 'from-blue-400 to-cyan-400', barColor: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
                    { icon: <CurrencyIcon />, title: '매각 추가 수익', amount: savings.sellSavings, color: 'from-yellow-400 to-orange-400', barColor: 'bg-gradient-to-r from-yellow-400 to-orange-400' },
                    { icon: <WrenchIcon />, title: '유지보수 절감', amount: savings.maintenanceSavings, color: 'from-green-400 to-teal-400', barColor: 'bg-gradient-to-r from-green-400 to-teal-400' },
                    { icon: <ClockIcon />, title: '인건비 절감', amount: savings.laborSavings, color: 'from-purple-400 to-pink-400', barColor: 'bg-gradient-to-r from-purple-400 to-pink-400' },
                    { icon: <ShieldIcon />, title: '자산 손실 방지', amount: savings.lossPreventionSavings, color: 'from-red-400 to-rose-400', barColor: 'bg-gradient-to-r from-red-400 to-rose-400' },
                  ];
                  const maxAmount = Math.max(...items.map(item => item.amount), 1);

                  return items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2 shrink-0 w-32">
                        <div className={`w-7 h-7 bg-gradient-to-br ${item.color} rounded-md flex items-center justify-center text-white [&>svg]:w-4 [&>svg]:h-4`}>
                          {item.icon}
                        </div>
                        <span className="text-white/90 text-sm">{item.title}</span>
                      </div>
                      <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${item.barColor}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.amount / maxAmount) * 100}%` }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        />
                      </div>
                      <motion.span
                        className="font-bold text-white text-sm shrink-0 w-20 text-right"
                        key={item.amount}
                        initial={{ scale: 1.1, color: '#fde047' }}
                        animate={{ scale: 1, color: '#ffffff' }}
                        transition={{ duration: 0.3 }}
                      >
                        {formatCurrency(item.amount)}
                      </motion.span>
                    </div>
                  ));
                })()}
              </div>

              {/* 이메일 폼 + CTA */}
              <div className="space-y-3 mt-auto">
                {!emailSubmitted ? (
                  <div className="space-y-2">
                    <form onSubmit={handleEmailSubmit} className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일을 입력하세요"
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40 disabled:opacity-50"
                        required
                        disabled={isSubmitting}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-yellow-400 text-brand-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            발송 중...
                          </>
                        ) : (
                          '리포트 받기'
                        )}
                      </button>
                    </form>
                    {submitError && (
                      <p className="text-red-300 text-xs text-center">{submitError}</p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-2 bg-green-500/20 rounded-lg">
                    <p className="text-green-300 font-medium">리포트가 {email}로 발송되었습니다!</p>
                  </div>
                )}

                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full bg-white text-brand-primary hover:bg-yellow-300 hover:text-brand-secondary font-bold"
                >
                  무료 상담 신청하기
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* 계산 방식 모달 */}
      <AnimatePresence>
        {showMethodModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setShowMethodModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">계산 방식</h3>
                <button
                  onClick={() => setShowMethodModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 text-gray-300 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">1. 구매 비용 절감</h4>
                  <p className="text-gray-400">디바이스 수 × 교체 비율 × 평균 단가 × 30%</p>
                  <p className="text-xs text-gray-500 mt-1">리퍼비시 구매 시 신품 대비 30% 절감 효과</p>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">2. 매각 추가 수익</h4>
                  <p className="text-gray-400">디바이스 수 × 교체 비율 × 평균 단가 × 15%</p>
                  <p className="text-xs text-gray-500 mt-1">전문 매각 채널 통해 15% 높은 가격 실현</p>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">3. 유지보수 절감</h4>
                  <p className="text-gray-400">현재 유지보수 월 비용 × 12 × 20%</p>
                  <p className="text-xs text-gray-500 mt-1">통합 유지보수 계약으로 연간 20% 절감</p>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">4. 인건비 절감</h4>
                  <p className="text-gray-400">월 관리시간 × 담당 인원 × 30% × 시급 × 12</p>
                  <p className="text-xs text-gray-500 mt-1">자동화된 관리로 월 관리시간 30% 단축</p>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">5. 자산 손실 방지</h4>
                  <p className="text-gray-400">연간 분실 건수 × 평균 자산 단가 × 80%</p>
                  <p className="text-xs text-gray-500 mt-1">실시간 자산 추적으로 80% 손실 방지</p>
                </div>
              </div>

              <button
                onClick={() => setShowMethodModal(false)}
                className="w-full mt-6 bg-brand-primary text-white py-3 rounded-lg font-bold hover:bg-brand-secondary transition-colors"
              >
                확인
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
