'use client';

import { useState, useCallback, useEffect, useRef, ReactNode } from 'react';

interface FormData {
  name: string;
  company: string;
  employeeCount: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

interface StepOption {
  value: string;
  label: string;
  icon: ReactNode;
  gradient: string;
}

interface Step {
  id: keyof FormData;
  question: string;
  subtext?: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  options?: StepOption[];
  required?: boolean;
}

// Modern SVG Icons with gradient backgrounds
const Icons = {
  person: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  team: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  enterprise: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  chat: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
  handshake: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
};

const steps: Step[] = [
  {
    id: 'name',
    question: '안녕하세요!',
    subtext: '먼저 성함을 알려주세요.',
    type: 'text',
    placeholder: '홍길동',
    required: true,
  },
  {
    id: 'company',
    question: '어떤 회사에서 근무하고 계신가요?',
    subtext: '회사명을 입력해 주세요.',
    type: 'text',
    placeholder: '(주)회사명',
    required: true,
  },
  {
    id: 'employeeCount',
    question: '회사의 직원 규모는 어느 정도인가요?',
    subtext: '가장 가까운 규모를 선택해 주세요.',
    type: 'select',
    options: [
      { value: '1-10', label: '10명 이하', icon: Icons.person, gradient: 'from-violet-500 to-purple-600' },
      { value: '11-50', label: '11~50명', icon: Icons.team, gradient: 'from-blue-500 to-cyan-500' },
      { value: '51-100', label: '51~100명', icon: Icons.building, gradient: 'from-emerald-500 to-teal-500' },
      { value: '100+', label: '100명 이상', icon: Icons.enterprise, gradient: 'from-orange-500 to-amber-500' },
    ],
    required: true,
  },
  {
    id: 'type',
    question: '어떤 도움이 필요하신가요?',
    subtext: '문의 유형을 선택해 주세요.',
    type: 'select',
    options: [
      { value: 'service', label: '서비스 상담', icon: Icons.chat, gradient: 'from-pink-500 to-rose-500' },
      { value: 'quote', label: '견적 요청', icon: Icons.document, gradient: 'from-indigo-500 to-blue-500' },
      { value: 'partnership', label: '파트너십 제안', icon: Icons.handshake, gradient: 'from-cyan-500 to-blue-500' },
      { value: 'other', label: '기타 문의', icon: Icons.sparkles, gradient: 'from-fuchsia-500 to-pink-500' },
    ],
    required: true,
  },
  {
    id: 'email',
    question: '연락받으실 이메일 주소를 알려주세요.',
    subtext: '상담 결과를 이메일로 보내드립니다.',
    type: 'email',
    placeholder: 'example@company.com',
    required: true,
  },
  {
    id: 'phone',
    question: '전화번호도 알려주시면 더 빠른 상담이 가능해요.',
    subtext: '선호하시는 연락처를 입력해 주세요.',
    type: 'tel',
    placeholder: '010-1234-5678',
    required: true,
  },
  {
    id: 'message',
    question: '마지막으로, 문의 내용을 자유롭게 작성해 주세요.',
    subtext: '궁금하신 점이나 요청사항을 상세히 적어주시면 더 정확한 답변을 드릴 수 있어요.',
    type: 'textarea',
    placeholder: '문의 내용을 입력해 주세요...',
    required: true,
  },
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is welcome screen
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    employeeCount: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const currentStepData = steps[currentStep];
  const progress = currentStep >= 0 ? ((currentStep + 1) / steps.length) * 100 : 0;

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return phone.replace(/[^0-9]/g, '').length >= 10;
  };

  const canProceed = useCallback(() => {
    if (currentStep < 0) return true;
    const step = steps[currentStep];
    const value = formData[step.id];
    if (!step.required) return true;
    if (value.trim().length === 0) return false;

    // Additional validation
    if (step.type === 'email' && !isValidEmail(value)) return false;
    if (step.type === 'tel' && !isValidPhone(value)) return false;

    return true;
  }, [currentStep, formData]);

  const submitForm = useCallback(async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '제출에 실패했습니다.');
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : '오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const goToNext = useCallback(() => {
    if (!canProceed() || isAnimating || isSubmitting) return;

    setIsAnimating(true);
    setDirection('next');

    setTimeout(async () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Submit form
        await submitForm();
      }
      setIsAnimating(false);
    }, 300);
  }, [currentStep, canProceed, isAnimating, isSubmitting, submitForm]);

  const goToPrev = useCallback(() => {
    if (currentStep <= -1 || isAnimating) return;

    setIsAnimating(true);
    setDirection('prev');

    setTimeout(() => {
      setCurrentStep(prev => prev - 1);
      setIsAnimating(false);
    }, 300);
  }, [currentStep, isAnimating]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (currentStepData?.type !== 'textarea') {
        e.preventDefault();
        goToNext();
      }
    }
    if (e.key === 'Escape') {
      goToPrev();
    }
  }, [goToNext, goToPrev, currentStepData]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (currentStep >= 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const handleInputChange = (value: string) => {
    if (currentStepData) {
      setFormData(prev => ({
        ...prev,
        [currentStepData.id]: value,
      }));
    }
  };

  const handleSelectOption = (value: string) => {
    if (currentStepData) {
      setFormData(prev => ({
        ...prev,
        [currentStepData.id]: value,
      }));
      // Auto-advance after selection
      setTimeout(() => goToNext(), 400);
    }
  };

  // Welcome Screen
  if (currentStep === -1 && !isSubmitted) {
    return (
      <div className={`min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl rotate-6 opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/40">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            무료 상담 신청
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            몇 가지 간단한 질문에 답변해 주시면<br />
            맞춤형 솔루션을 제안해 드립니다.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            약 2분 소요 • 7개 문항
          </p>
          <button
            onClick={goToNext}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            시작하기
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Completion Screen
  if (isSubmitted) {
    return (
      <div className="min-h-[500px] flex flex-col items-center justify-center animate-fade-in">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-ping opacity-20" />
            <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            감사합니다, {formData.name}님!
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            문의가 성공적으로 접수되었습니다.<br />
            빠른 시일 내에 <span className="font-semibold text-purple-600">{formData.email}</span>로<br />
            연락드리겠습니다.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 text-left mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">접수 내용 요약</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="text-gray-400">회사:</span> {formData.company}</p>
              <p><span className="text-gray-400">규모:</span> {steps[2].options?.find(o => o.value === formData.employeeCount)?.label}</p>
              <p><span className="text-gray-400">문의 유형:</span> {steps[3].options?.find(o => o.value === formData.type)?.label}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setCurrentStep(-1);
              setIsSubmitted(false);
              setFormData({
                name: '',
                company: '',
                employeeCount: '',
                email: '',
                phone: '',
                type: '',
                message: '',
              });
            }}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            새로운 문의하기 →
          </button>
        </div>
      </div>
    );
  }

  // Question Screen
  return (
    <div className="min-h-[500px] flex flex-col">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">
            {currentStep + 1} / {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(progress)}% 완료
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isAnimating
            ? direction === 'next'
              ? 'opacity-0 -translate-y-4'
              : 'opacity-0 translate-y-4'
            : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {currentStepData.question}
          </h2>
          {currentStepData.subtext && (
            <p className="text-gray-500 text-lg">
              {currentStepData.subtext}
            </p>
          )}
        </div>

        {/* Input Field */}
        <div className="flex-1">
          {currentStepData.type === 'select' && currentStepData.options && (
            <div className="grid gap-3">
              {currentStepData.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelectOption(option.value)}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                    formData[currentStepData.id] === option.value
                      ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-violet-50 shadow-lg shadow-purple-500/15 scale-[1.02]'
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 hover:shadow-md'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    formData[currentStepData.id] === option.value ? 'scale-110' : ''
                  }`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <span className={`font-semibold text-[15px] block ${
                      formData[currentStepData.id] === option.value
                        ? 'text-purple-700'
                        : 'text-gray-800 group-hover:text-gray-900'
                    }`}>
                      {option.label}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    formData[currentStepData.id] === option.value
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-300 group-hover:border-gray-400'
                  }`}>
                    {formData[currentStepData.id] === option.value && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentStepData.type === 'textarea' && (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={formData[currentStepData.id]}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={currentStepData.placeholder}
              rows={5}
              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 focus:outline-none transition-colors resize-none placeholder:text-gray-400"
            />
          )}

          {(currentStepData.type === 'text' || currentStepData.type === 'email' || currentStepData.type === 'tel') && (
            <>
              <input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                type={currentStepData.type}
                value={formData[currentStepData.id]}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={currentStepData.placeholder}
                className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 focus:outline-none transition-colors placeholder:text-gray-400"
              />
              {/* Validation hints */}
              {currentStepData.type === 'email' && formData.email.length > 0 && !isValidEmail(formData.email) && (
                <p className="mt-2 text-sm text-orange-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  올바른 이메일 형식을 입력해 주세요
                </p>
              )}
              {currentStepData.type === 'tel' && formData.phone.length > 0 && !isValidPhone(formData.phone) && (
                <p className="mt-2 text-sm text-orange-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  전화번호는 10자리 이상 입력해 주세요
                </p>
              )}
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            onClick={goToPrev}
            disabled={currentStep <= 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              currentStep <= 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            이전
          </button>

          <button
            onClick={goToNext}
            disabled={!canProceed() || isSubmitting}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              canProceed() && !isSubmitting
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                제출 중...
              </>
            ) : currentStep === steps.length - 1 ? '제출하기' : '다음'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Error message */}
        {submitError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {submitError}
          </div>
        )}

        {/* Keyboard hint */}
        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-400">
          {currentStep > 0 && (
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono">ESC</kbd>
              이전
            </span>
          )}
          <span className="flex items-center gap-1">
            <kbd className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono">Enter</kbd>
            다음
          </span>
        </div>
      </div>
    </div>
  );
}
