'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import ScrollReveal from '../ui/ScrollReveal';

// SVG Icons for features
const FeatureIcon = ({ type, className = "w-8 h-8" }: { type: string; className?: string }) => {
  const icons: Record<string, ReactNode> = {
    ai: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    trophy: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    link: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    diamond: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  };
  return icons[type] || icons.ai;
};

// Blob SVG component
const BlobShape = ({ className = "", color = "purple" }: { className?: string; color?: string }) => {
  const colors: Record<string, string> = {
    purple: 'fill-purple-100',
    blue: 'fill-blue-100',
    green: 'fill-green-100',
    orange: 'fill-orange-100',
    pink: 'fill-pink-100',
  };

  return (
    <svg className={`absolute ${className} ${colors[color]} opacity-50`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.5,-57.2C59.9,-46.8,67.5,-30.6,71.1,-13.1C74.7,4.4,74.3,23.2,66.2,37.8C58.1,52.4,42.3,62.8,25.1,68.5C7.9,74.2,-10.7,75.2,-27.9,69.8C-45.1,64.4,-60.9,52.6,-70.1,36.8C-79.3,21,-81.9,1.2,-77.4,-16.5C-72.9,-34.2,-61.3,-49.8,-46.7,-59.7C-32.1,-69.6,-14.5,-73.8,1.8,-76C18.1,-78.2,35.1,-67.6,47.5,-57.2Z" transform="translate(100 100)" />
    </svg>
  );
};

const features = [
  {
    id: 1,
    title: 'AI 엔진 자동 제안',
    description: '최적 시점, 견적, 의사결정을 AI가 자동으로 제안합니다',
    iconType: 'ai',
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'B2C + B2B 통합 역량',
    description: '1위 유통망과 기업 운영 노하우의 완벽한 결합',
    iconType: 'trophy',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    title: '완전 수직 통합',
    description: '매입부터 재판매까지 원스톱 처리',
    iconType: 'link',
    color: 'green',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    id: 4,
    title: '6년 검증된 실물 역량',
    description: '중고 노트북 B2C 1위 달성 경험',
    iconType: 'check',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    id: 5,
    title: '불필요한 비용 0원',
    description: '자산 관리 효율을 극대화하여 비용 절감',
    iconType: 'diamond',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Blobs */}
      <BlobShape className="-top-20 -left-20 w-96 h-96" color="purple" />
      <BlobShape className="top-1/2 -right-32 w-80 h-80" color="blue" />
      <BlobShape className="bottom-0 left-1/4 w-72 h-72" color="green" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
              원킷이 다른 이유
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              검증된 역량과 혁신적인 기술의 만남
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 100}>
              <motion.div
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <FeatureIcon type={feature.iconType} className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
