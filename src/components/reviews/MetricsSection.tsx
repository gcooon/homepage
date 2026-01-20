'use client';

import Container from '../common/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function MetricsSection() {
  return (
    <section className="section">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <AnimatedCounter
              end={30}
              suffix="%"
              className="text-5xl font-bold text-brand-primary mb-2"
            />
            <div className="text-gray-600">평균 비용 절감률</div>
          </div>
          <div>
            <AnimatedCounter
              end={50}
              suffix="%"
              className="text-5xl font-bold text-brand-primary mb-2"
            />
            <div className="text-gray-600">관리 효율 증가</div>
          </div>
          <div>
            <AnimatedCounter
              end={95}
              suffix="%"
              className="text-5xl font-bold text-brand-primary mb-2"
            />
            <div className="text-gray-600">고객 만족도</div>
          </div>
          <div>
            <AnimatedCounter
              end={90}
              suffix="%"
              className="text-5xl font-bold text-brand-primary mb-2"
            />
            <div className="text-gray-600">재계약률</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
