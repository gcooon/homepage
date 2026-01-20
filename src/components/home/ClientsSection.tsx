import Container from '../common/Container';
import ScrollReveal from '../ui/ScrollReveal';

const clients = [
  'KBS', '대웅제약', 'OTIS', '삼성화재',
  '중고나라', '번개장터', '알앤텍', '오누이'
];

export default function ClientsSection() {
  return (
    <section className="section bg-gray-50">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">믿고 선택한 파트너사</h2>
            <p className="section-subtitle">
              업계 선도 기업들이 원킷과 함께합니다
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24"
              >
                <p className="text-lg font-semibold text-gray-600">{client}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
