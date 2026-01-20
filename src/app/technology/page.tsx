import { Metadata } from 'next';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';

export const metadata: Metadata = {
  title: 'AI 기술',
  description: 'AI가 제안하는 최적의 자산관리. 원킷의 혁신적인 AI 기술.',
};

const aiFeatures = [
  {
    title: '자산 가치 예측',
    description: '시장 데이터 분석과 감가상각 예측으로 정확한 자산 가치 산정',
    icon: '📊',
  },
  {
    title: '최적 시점 제안',
    description: '매각/교체 타이밍을 AI가 자동으로 추천',
    icon: '⏰',
  },
  {
    title: '견적 자동 생성',
    description: '실시간 시장가 반영한 정확한 견적',
    icon: '💰',
  },
  {
    title: '비용 최적화',
    description: '불필요한 지출 탐지 및 절감 방안 제시',
    icon: '⚡',
  },
  {
    title: '리스크 관리',
    description: '자산 상태 모니터링 및 위험 요소 조기 감지',
    icon: '🛡️',
  },
];

export default function TechnologyPage() {
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
              AI가 만드는 스마트한 자산관리
            </h1>
            <p className="text-xl text-white/90">
              데이터 기반 의사결정, 최적화 자동 제안
            </p>
          </div>
        </Container>
      </section>

      {/* AI 핵심 기능 */}
      <section className="section">
        <Container>
          <div className="text-center mb-12">
            <h2 className="section-title">AI 핵심 기능</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature) => (
              <Card key={feature.title}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 프로세스 플로우 */}
      <section className="section bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="section-title">AI 작동 프로세스</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {['데이터 수집', 'AI 분석', '제안 생성', '의사결정', '실행'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-2">
                    {index + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block mx-4">
                    <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
