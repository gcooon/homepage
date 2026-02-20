import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: '문의하기',
  description: '언제든 문의하세요. 원킷 전문가가 빠르게 답변드립니다.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form Section - Takes more space */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12">
              <ContactForm />
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-2 order-1 lg:order-2 lg:sticky lg:top-24">
            {/* Hero Text */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                지금 바로 상담 가능
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                비즈니스 성장을<br />
                함께 고민합니다
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                복잡한 IT 문제, 혼자 고민하지 마세요.<br />
                전문가가 맞춤형 솔루션을 제안해 드립니다.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">이메일</p>
                    <a href={`mailto:${CONTACT.email}`} className="font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">전화</p>
                    <a href={`tel:${CONTACT.phone}`} className="font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">오피스</p>
                    <p className="font-semibold text-gray-900">{CONTACT.address}</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">운영 시간</p>
                    <p className="font-semibold text-gray-900">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">안심하고 문의하세요</p>
                  <p className="text-sm text-gray-600">
                    입력하신 정보는 상담 목적으로만 사용되며,<br />
                    안전하게 보호됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
