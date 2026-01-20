'use client';

import Button from '../common/Button';
import Container from '../common/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8039df 0%, #6b21a8 100%)'
      }}
    >
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                AI통합자산관리서비스
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              AI가 제안하는<br />
              최적의 자산관리
            </h1>

            <p className="text-xl md:text-2xl text-white/90">
              원킷(OneKit)과 함께<br />
              기업 자산의 생애주기를 혁신하세요
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-brand-primary hover:bg-gray-100"
              >
                무료 상담 신청
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary"
              >
                서비스 둘러보기
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <AnimatedCounter
                  end={80}
                  suffix="억"
                  className="text-3xl font-bold text-white"
                />
                <div className="text-sm text-white/80">연매출 (2024)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1위</div>
                <div className="text-sm text-white/80">B2C 마켓플레이스</div>
              </div>
              <div>
                <AnimatedCounter
                  end={10}
                  suffix="+"
                  className="text-3xl font-bold text-white"
                />
                <div className="text-sm text-white/80">주요 고객사</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-slide-up">
            <div className="w-full h-96 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <p className="text-white/50">일러스트레이션 영역</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
