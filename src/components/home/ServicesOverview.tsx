import Container from '../common/Container';
import Card from '../common/Card';
import ScrollReveal from '../ui/ScrollReveal';
import { services } from '@/lib/data/services';

export default function ServicesOverview() {
  return (
    <section className="section bg-gray-50">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">완전한 자산 생애주기 관리</h2>
            <p className="section-subtitle">
              자산실사부터 폐기까지, 원킷이 모두 책임집니다
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <Card className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
