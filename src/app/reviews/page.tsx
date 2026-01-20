import { Metadata } from 'next';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import MetricsSection from '@/components/reviews/MetricsSection';

export const metadata: Metadata = {
  title: '고객 사례',
  description: '고객의 성공이 우리의 성공입니다. 원킷과 함께한 기업들의 이야기.',
};

const testimonials = [
  {
    company: 'KBS',
    author: '김철수',
    position: '자산관리팀 팀장',
    content: '원킷 도입 후 자산 관리 효율이 50% 이상 증가했습니다. AI 자동 제안 덕분에 의사결정 시간도 크게 단축되었습니다.',
    rating: 5,
  },
  {
    company: '대웅제약',
    author: '이영희',
    position: 'IT 담당자',
    content: '통합 플랫폼으로 모든 IT 자산을 한눈에 관리할 수 있어 매우 편리합니다.',
    rating: 5,
  },
  {
    company: 'OTIS',
    author: '박민준',
    position: '운영팀장',
    content: '매각 시 최고가를 보장받아 비용 절감 효과가 탁월했습니다.',
    rating: 5,
  },
];

export default function ReviewsPage() {
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
              고객의 성공이 우리의 성공입니다
            </h1>
            <p className="text-xl text-white/90">
              원킷과 함께한 기업들의 이야기
            </p>
          </div>
        </Container>
      </section>

      {/* 성과 지표 */}
      <MetricsSection />

      {/* 고객 후기 */}
      <section className="section bg-gray-50">
        <Container>
          <h2 className="section-title text-center mb-12">고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm font-medium text-brand-primary">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
