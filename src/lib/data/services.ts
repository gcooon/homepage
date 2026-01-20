export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'audit',
    title: '자산실사',
    description: '정확한 자산 현황 파악으로 관리의 시작',
    icon: '🔍',
  },
  {
    id: 'management',
    title: '자산관리',
    description: '통합 플랫폼에서 한눈에 관리',
    icon: '📊',
  },
  {
    id: 'purchase',
    title: '매입',
    description: '최적 가격으로 신속하게 매입',
    icon: '💰',
  },
  {
    id: 'rental',
    title: '렌탈',
    description: '유연한 자산 활용 솔루션',
    icon: '🔄',
  },
  {
    id: 'maintenance',
    title: '유지보수',
    description: '안정적인 자산 운영 지원',
    icon: '🔧',
  },
  {
    id: 'sale',
    title: '매각',
    description: '최고가 매각 보장',
    icon: '📈',
  },
  {
    id: 'optimization',
    title: '최적화',
    description: 'AI 기반 비용 절감',
    icon: '⚡',
  },
  {
    id: 'disposal',
    title: '폐기',
    description: '친환경 재활용 처리',
    icon: '♻️',
  },
];
