import { Metadata } from 'next';
import Container from '@/components/common/Container';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: '문의하기',
  description: '언제든 문의하세요. 원킷 전문가가 빠르게 답변드립니다.',
};

export default function ContactPage() {
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
              언제든 문의하세요
            </h1>
            <p className="text-xl text-white/90">
              원킷 전문가가 빠르게 답변드립니다
            </p>
          </div>
        </Container>
      </section>

      {/* 문의 폼 & 연락처 */}
      <section className="section">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* 문의 폼 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">상담 신청</h2>
              <ContactForm />
            </div>

            {/* 연락처 정보 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold mb-1">이메일</h3>
                    <p className="text-gray-600">{CONTACT.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold mb-1">전화</h3>
                    <p className="text-gray-600">{CONTACT.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🏢</div>
                  <div>
                    <h3 className="font-semibold mb-1">주소</h3>
                    <p className="text-gray-600">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">⏰</div>
                  <div>
                    <h3 className="font-semibold mb-1">운영 시간</h3>
                    <p className="text-gray-600">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
