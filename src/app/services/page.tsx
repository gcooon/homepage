import { Metadata } from 'next';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import { services } from '@/lib/data/services';

export const metadata: Metadata = {
  title: '서비스 소개',
  description: '자산 생애주기 전체를 관리하는 원킷의 8가지 핵심 서비스',
};

export default function ServicesPage() {
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
              자산 생애주기 전체를 하나로
            </h1>
            <p className="text-xl text-white/90">
              실사부터 폐기까지, 원킷이 모두 책임집니다
            </p>
          </div>
        </Container>
      </section>

      {/* 생애주기 다이어그램 */}
      <section className="section">
        <Container>
          <div className="text-center mb-12">
            <h2 className="section-title">완전한 자산 생애주기 관리</h2>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-4xl h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">생애주기 다이어그램 영역</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 각 서비스 상세 */}
      <section className="section bg-gray-50">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">✓</span>
                      <span>AI 기반 최적화 제안</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">✓</span>
                      <span>실시간 모니터링</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">✓</span>
                      <span>통합 관리 플랫폼</span>
                    </li>
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
