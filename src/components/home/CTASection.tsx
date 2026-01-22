'use client';

import { motion } from 'framer-motion';
import Button from '../common/Button';
import Container from '../common/Container';

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8039df 0%, #6b21a8 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center text-white space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            지금 시작하세요
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold">
            엑셀 관리는 이제 그만,<br />
            <span className="text-yellow-300">One Tool Plan</span>으로 전환하세요
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            비용 30% 절감, 관리시간 70% 단축<br />
            지금 바로 무료 상담을 신청하세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href="/contact"
                size="xl"
                className="bg-white text-brand-primary hover:bg-yellow-300 hover:text-brand-secondary font-bold shadow-xl"
              >
                무료견적문의
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href="#calculator"
                variant="secondary"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-brand-primary"
              >
                비용 절감액 계산하기
              </Button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: '✓', text: '무료 상담' },
              { icon: '✓', text: '맞춤 견적' },
              { icon: '✓', text: '24시간 응대' },
              { icon: '✓', text: '전문 컨설팅' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
