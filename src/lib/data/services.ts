export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  background: string;
  marketContext: string;
  features: ServiceFeature[];
  stats?: {
    value: string;
    label: string;
  }[];
  isFree?: boolean;
}

export const services: Service[] = [
  {
    id: 'sell',
    title: '매각',
    subtitle: '최고가 & 보안 파기',
    description: '데이터 보안과 최고가 매각을 동시에 실현합니다.',
    icon: 'currency',
    background: 'from-purple-600 to-indigo-700',
    marketContext: '기업들은 중고 자산 처분 시 "데이터 유출"과 "헐값 매각"을 가장 우려합니다.',
    features: [
      {
        title: '보안이 곧 자산',
        description: '국정원 권고 기준 데이터 완전 삭제(Wiping) 인증서 발급'
      },
      {
        title: '최고가 보장 메커니즘',
        description: '자체 B2C 플랫폼 판매 데이터 기반, 업계 평균 대비 15~20% 높은 매입가'
      },
      {
        title: '비교 견적 시스템',
        description: '1개 업체 의존이 아닌 5개 파트너사 비교 견적으로 최적가 제시'
      }
    ],
    stats: [
      { value: '15-20%', label: '높은 매입가' },
      { value: '5개', label: '파트너사 비교' },
      { value: '100%', label: '보안 인증' }
    ]
  },
  {
    id: 'buy',
    title: '구매',
    subtitle: '예산 절감 최적화',
    description: '신품급 리퍼비시로 최대 50% 비용을 절감하세요.',
    icon: 'cart',
    background: 'from-blue-600 to-cyan-600',
    marketContext: '2025년 기업 IT 예산 축소로 "신품급 중고(Refurbished)" 수요가 폭증하고 있습니다.',
    features: [
      {
        title: '신품 같은 A급 리퍼비시',
        description: '신품 대비 30~50% 비용 절감, 품질은 신품과 동일'
      },
      {
        title: '커스텀 오더',
        description: '개발자용(고사양), 영업용(경량), 사무용(가성비) 직무별 추천 패키지'
      },
      {
        title: '브랜드 네트워크',
        description: '삼성/LG/HP/Dell/Apple 공식 파트너십으로 품질 보증'
      }
    ],
    stats: [
      { value: '30-50%', label: '비용 절감' },
      { value: '5.9%', label: '시장 성장률' },
      { value: '5대', label: '브랜드 파트너' }
    ]
  },
  {
    id: 'rental',
    title: '렌탈',
    subtitle: '유연한 운영',
    description: '초기 투자비 0원, 월 구독료로 IT 자산을 운영하세요.',
    icon: 'refresh',
    background: 'from-green-600 to-teal-600',
    marketContext: '소유에서 "구독/렌탈"로 전환하는 OpEx 선호 트렌드가 확산되고 있습니다.',
    features: [
      {
        title: '단기부터 장기까지',
        description: '프로젝트 단위(1개월)부터 연간 계약까지 유연한 선택'
      },
      {
        title: 'DaaS 서비스',
        description: '기기+SW+유지보수를 월 구독료 하나로 해결하는 Device as a Service'
      },
      {
        title: '즉시 교체 보장',
        description: '고장 시 24시간 내 대체 장비 발송으로 업무 공백 최소화'
      }
    ],
    stats: [
      { value: '0원', label: '초기 투자비' },
      { value: '24h', label: '교체 보장' },
      { value: '1개월~', label: '유연한 계약' }
    ]
  },
  {
    id: 'maintenance',
    title: '유지보수',
    subtitle: '업무 연속성 보장',
    description: '전담 엔지니어가 자산의 안정적 운영을 책임집니다.',
    icon: 'wrench',
    background: 'from-orange-500 to-amber-600',
    marketContext: 'IT 인력이 부족한 중소/중견기업은 자산 관리자가 없어 고장 대응이 느립니다.',
    features: [
      {
        title: '전담 엔지니어 배정',
        description: '기업별 전담 매니저가 모든 히스토리를 관리'
      },
      {
        title: '정기 점검 서비스',
        description: '고장 나기 전 방문하여 클리닝/성능 점검으로 사전 예방'
      },
      {
        title: '업그레이드 서비스',
        description: '노후 장비 SSD/RAM 교체로 수명 2년 연장'
      }
    ],
    stats: [
      { value: '2년', label: '수명 연장' },
      { value: '전담', label: '엔지니어 배정' },
      { value: '정기', label: '예방 점검' }
    ]
  },
  {
    id: 'audit',
    title: '자산실사',
    subtitle: '데이터 가시성',
    description: 'QR/바코드 기반 전수 조사로 99.9% 정확도를 실현합니다.',
    icon: 'clipboard',
    background: 'from-pink-600 to-rose-600',
    marketContext: '엑셀 수기 관리의 부정확성으로 분실율 평균 5~10%가 발생하고 있습니다.',
    features: [
      {
        title: 'QR/바코드 기반 전수 조사',
        description: '사람이 아닌 시스템으로 99.9% 정확도 실현'
      },
      {
        title: '회계 데이터 연동',
        description: '감가상각 현황, 잔존가치 자동 계산 리포트 제공'
      },
      {
        title: '자산 상태 진단 리포트',
        description: '실사 후 상세한 자산 상태 진단 리포트 제공'
      }
    ],
    stats: [
      { value: '99.9%', label: '정확도' },
      { value: '자동', label: '회계 연동' },
      { value: '5-10%', label: '분실율 감소' }
    ]
  },
  {
    id: 'saas',
    title: '자산관리 솔루션',
    subtitle: '무료 제공',
    description: '서비스 이용 고객에게 무료로 제공되는 통합 관리 플랫폼입니다.',
    icon: 'gift',
    background: 'from-gray-500 to-gray-600',
    marketContext: '기기(ITAM)와 소프트웨어(SaaS) 비용의 통합 관리 니즈가 증가하고 있습니다.',
    features: [
      {
        title: '스마트 대시보드',
        description: '구매일, 보증만료일, 교체주기 알림 자동화'
      },
      {
        title: '비용 절감 시뮬레이션',
        description: '"우리 기업은 얼마나 아낄 수 있을까?" 계산기 기능'
      },
      {
        title: '엑셀 탈출',
        description: '엑셀 업로드만으로 DB 자동 구축'
      }
    ],
    stats: [
      { value: '무료', label: '이용 요금' },
      { value: '통합', label: '대시보드' },
      { value: '1분', label: 'DB 구축' }
    ],
    isFree: true
  }
];
