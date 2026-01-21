import { Metadata } from 'next';
import { ReactNode } from 'react';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';

export const metadata: Metadata = {
  title: '회사 소개',
  description: '도구모음, 자산관리의 새로운 기준. 6년간 쌓아온 신뢰와 혁신.',
};

const history = [
  { year: '2019', event: '회사 설립' },
  { year: '2020', event: 'B2C 마켓플레이스 론칭' },
  { year: '2022', event: 'B2C 1위 달성' },
  { year: '2024', event: '연매출 80억 달성' },
  { year: '2026', event: '원킷 브랜드 런칭' },
  { year: '2028', event: '연매출 300억 목표' },
];

const values = [
  {
    title: '신뢰',
    description: '6년 검증된 실물 역량',
    iconType: 'trust',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    title: '혁신',
    description: 'AI 기반 자동화',
    iconType: 'innovation',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: '효율',
    description: '불필요한 비용 제로',
    iconType: 'efficiency',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: '지속가능성',
    description: '재순환/재활용',
    iconType: 'sustainability',
    gradient: 'from-green-500 to-teal-600',
  },
];

// Value Icon Component
const ValueIcon = ({ type, className = "w-8 h-8" }: { type: string; className?: string }) => {
  const icons: Record<string, ReactNode> = {
    trust: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    innovation: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    efficiency: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    sustainability: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };
  return icons[type] || icons.trust;
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section text-white"
        style={{
          background: 'linear-gradient(135deg, #8039df 0%, #6b21a8 100%)'
        }}
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              도구모음, 자산관리의 새로운 기준
            </h1>
            <p className="text-xl text-white/90">
              6년간 쌓아온 신뢰와 혁신
            </p>
          </div>
        </Container>
      </section>

      {/* 회사 소개 */}
      <section className="section">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">회사 소개</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                도구모음은 2019년 설립 이래 전자제품 재순환 및 자산관리 분야에서
                혁신을 주도해온 기업입니다.
              </p>
              <p>
                현재 중고 노트북 B2C 마켓플레이스 1위를 달성하며 연매출 80억원을
                기록하고 있습니다. 이제 원킷(OneKit) 브랜드를 통해 AI 기반
                통합자산관리 플랫폼으로 확장합니다.
              </p>
              <p className="font-semibold text-brand-primary">
                비전: AI 기반 통합자산관리 플랫폼 선도<br />
                미션: 기업 자산의 가치를 극대화하고 효율성을 혁신
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 회사 연혁 */}
      <section className="section bg-gray-50">
        <Container>
          <h2 className="section-title text-center mb-12">회사 연혁</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {history.map((item, index) => (
                <div key={item.year} className="flex items-start">
                  <div className="flex-shrink-0 w-32">
                    <div className="text-2xl font-bold text-brand-primary">{item.year}</div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <p className="text-lg">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 핵심 가치 */}
      <section className="section">
        <Container>
          <h2 className="section-title text-center mb-12">핵심 가치</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center group hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <ValueIcon type={value.iconType} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
