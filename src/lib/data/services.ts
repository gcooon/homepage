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
  isHighlighted?: boolean;
}

export const services: Service[] = [
  {
    id: 'buy',
    title: '구매',
    subtitle: '예산 절감 최적화',
    description: '신품 대비 최대 50% 비용 절감 구조로 IT 자산을 도입하세요.',
    icon: 'cart',
    background: 'from-indigo-500 to-violet-600',
    marketContext: '기업 IT 예산 축소로 "신품급 중고(Refurbished)" 수요가 폭증하고 있습니다.',
    features: [
      {
        title: '신품 같은 A급 리퍼비시',
        description: '신품 대비 30~50% 비용 절감, 품질은 신품과 동일'
      },
      {
        title: '커스텀 오더',
        description: '불필요한 스펙 제거, 직무별 구성으로 과잉 비용 재확인'
      },
      {
        title: '브랜드 네트워크',
        description: '공식 파트너십으로 품질 보증 및 유통 비용 절감'
      }
    ],
    stats: [
      { value: '30-50%', label: '비용 절감' },
      { value: '5대', label: '브랜드 파트너' },
      { value: '비교', label: '견적 제공' }
    ]
  },
  {
    id: 'sell',
    title: '매각',
    subtitle: '최고가 & 보안 파기',
    description: '데이터 보안과 최고가 매각을 동시에 실현합니다.',
    icon: 'currency',
    background: 'from-violet-600 to-purple-700',
    marketContext: '기업들은 중고 자산 처분 시 "데이터 유출"과 "헐값 매각"을 가장 우려합니다.',
    features: [
      {
        title: '보안이 곧 자산',
        description: '국정원 권고 기준 준수, 데이터 완전 소각 후 삭제 인증서 제공'
      },
      {
        title: '최고가 보장 메커니즘',
        description: '자체 B2C 플랫폼 판매 데이터 기반, 타사대비 20% 추가 매입가'
      },
      {
        title: '비교 견적 시스템',
        description: '1개 업체 의존이 아닌 5개 파트너사 비교 견적으로 최적가 제시'
      }
    ],
    stats: [
      { value: '20%', label: '추가 매입가' },
      { value: '5개', label: '파트너사 비교' },
      { value: '100%', label: '보안 인증' }
    ]
  },
  {
    id: 'rental',
    title: '렌탈',
    subtitle: '유연한 운영',
    description: '초기 투자비 0원, 월 구독료로 IT 자산을 운영하세요.',
    icon: 'refresh',
    background: 'from-purple-500 to-indigo-600',
    marketContext: '소유에서 "구독/렌탈"로 전환하는 OpEx 선호 트렌드가 확산되고 있습니다.',
    features: [
      {
        title: '초기 투자비 0원',
        description: '큰 돈 안들이고 IT 자산 바로 도입, 월 과금 구조로 부담 최소화'
      },
      {
        title: 'DaaS 서비스',
        description: '자산 운영, 유지, 교체까지 포함. IT관리 비용 리스크 원툴플랜이 전부 부담'
      },
      {
        title: '24시간 내 즉시 교체 보장',
        description: '제품 이상시 24시간 내 대체 장비 발송으로 업무 공백 최소화'
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
    background: 'from-violet-500 to-purple-600',
    marketContext: 'IT 인력이 부족한 중소/중견기업은 자산 관리자가 없어 고장 대응이 느립니다.',
    features: [
      {
        title: '전담 엔지니어 배정',
        description: '고장부터 복구까지 기업별 전담 엔지니어 관리'
      },
      {
        title: '정기 점검 서비스',
        description: '정기 방문으로 사전 고장 예방 및 자산 관리'
      },
      {
        title: '수명 연장 업그레이드',
        description: '노후 장비 간단한 하드웨어 업그레이드로 수명 2년 연장'
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
    background: 'from-indigo-600 to-purple-700',
    marketContext: '엑셀 수기 관리의 부정확성으로 분실율 평균 5~10%가 발생하고 있습니다.',
    features: [
      {
        title: '전수 자산 파악, 누락 없음',
        description: 'QR/바코드 기반으로 위치, 사용자 즉시 확인'
      },
      {
        title: '회계 자산 데이터 연동',
        description: '회계, 감가상각 자동 연동, 수기기입 제거'
      },
      {
        title: '자산 상태 진단 리포트',
        description: '실사 리포트로 상세한 자산 상태 진단 리포트 제공'
      }
    ],
    stats: [
      { value: '99.9%', label: '정확도' },
      { value: '자동', label: '회계 연동' },
      { value: '5-10%', label: '분실율 감소' }
    ]
  }
];
