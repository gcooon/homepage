import Container from '../common/Container';
import ScrollReveal from '../ui/ScrollReveal';

const features = [
  {
    id: 1,
    title: 'AI 엔진 자동 제안',
    description: '최적 시점, 견적, 의사결정을 AI가 자동으로 제안합니다',
    icon: '🤖',
  },
  {
    id: 2,
    title: 'B2C + B2B 통합 역량',
    description: '1위 유통망과 기업 운영 노하우의 완벽한 결합',
    icon: '🏆',
  },
  {
    id: 3,
    title: '완전 수직 통합',
    description: '매입부터 재판매까지 원스톱 처리',
    icon: '🔗',
  },
  {
    id: 4,
    title: '6년 검증된 실물 역량',
    description: '중고 노트북 B2C 1위 달성 경험',
    icon: '✅',
  },
  {
    id: 5,
    title: '불필요한 비용 0원',
    description: '자산 관리 효율을 극대화하여 비용 절감',
    icon: '💎',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">원킷이 다른 이유</h2>
            <p className="section-subtitle">
              검증된 역량과 혁신적인 기술의 만남
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={200}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600">{feature.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">이미지 영역</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
