import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '원킷(OneKit) - AI통합자산관리서비스';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #8039df 0%, #6b21a8 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* 로고 아이콘 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x="20"
              y="28"
              fontSize="24"
              fontWeight="bold"
              fill="#8039df"
              textAnchor="middle"
            >
              1
            </text>
          </svg>
        </div>

        {/* 브랜드명 */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          원킷
        </div>

        {/* 영문명 */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: '600',
            marginBottom: '40px',
            opacity: 0.9,
            display: 'flex',
          }}
        >
          OneKit
        </div>

        {/* 슬로건 */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: '500',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '16px 48px',
            borderRadius: '50px',
            display: 'flex',
          }}
        >
          AI통합자산관리서비스
        </div>

        {/* 하단 태그라인 */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            fontSize: '28px',
            opacity: 0.8,
            display: 'flex',
          }}
        >
          AI가 제안하는 최적의 자산관리
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
