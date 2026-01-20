import Button from '../common/Button';
import Container from '../common/Container';

export default function CTASection() {
  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(135deg, #8039df 0%, #6b21a8 100%)'
      }}
    >
      <Container>
        <div className="text-center text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl md:text-2xl text-white/90">
            원킷과 함께 자산관리를 혁신하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              href="/contact"
              size="xl"
              className="bg-white text-brand-primary hover:bg-gray-100"
            >
              무료 상담 신청
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-brand-primary"
            >
              서비스 자료 다운로드
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
