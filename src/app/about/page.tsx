import { Metadata } from 'next';
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
    icon: '🤝',
  },
  {
    title: '혁신',
    description: 'AI 기반 자동화',
    icon: '💡',
  },
  {
    title: '효율',
    description: '불필요한 비용 제로',
    icon: '⚡',
  },
  {
    title: '지속가능성',
    description: '재순환/재활용',
    icon: '♻️',
  },
];

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
              <Card key={value.title} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
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
