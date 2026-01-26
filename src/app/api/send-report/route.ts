import { NextRequest, NextResponse } from 'next/server';

interface SavingsData {
  purchaseSavings: number;
  sellSavings: number;
  maintenanceSavings: number;
  laborSavings: number;
  lossPreventionSavings: number;
  totalAnnual: number;
}

interface InputData {
  assetCount: number;
  avgAssetValue: number;
  deviceAge: string;
  replacementRate: number;
  itStaffCount: number;
  managementHours: number;
  maintenanceCost: number;
  annualLoss: number;
}

interface ReportRequest {
  email: string;
  savings: SavingsData;
  inputs: InputData;
}

function formatCurrency(value: number): string {
  if (value >= 100000000) {
    return `${(value / 100000000).toFixed(1)}억원`;
  } else if (value >= 10000) {
    return `${Math.round(value / 10000).toLocaleString()}만원`;
  }
  return `${value.toLocaleString()}원`;
}

function formatDeviceAge(age: string): string {
  switch (age) {
    case 'under3': return '3년 미만';
    case '3to5': return '3-5년';
    case 'over5': return '5년 이상';
    default: return age;
  }
}

function generateEmailHtml(data: ReportRequest): string {
  const { savings, inputs } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>One Tool Plan 비용 절감 분석 리포트</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0052CC 0%, #00875A 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">One Tool Plan</h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">비용 절감 분석 리포트</p>
            </td>
          </tr>

          <!-- Total Savings -->
          <tr>
            <td style="padding: 30px;">
              <div style="background: linear-gradient(135deg, #0052CC 0%, #00875A 100%); border-radius: 12px; padding: 30px; text-align: center;">
                <p style="color: rgba(255, 255, 255, 0.8); margin: 0 0 10px 0; font-size: 14px;">예상 연간 총 절감액</p>
                <h2 style="color: #FDE047; margin: 0; font-size: 42px; font-weight: bold;">${formatCurrency(savings.totalAnnual)}</h2>
                <div style="margin-top: 20px; display: flex; justify-content: center; gap: 30px;">
                  <div style="display: inline-block; margin: 0 15px;">
                    <p style="color: rgba(255, 255, 255, 0.7); margin: 0; font-size: 12px;">월간 절감액</p>
                    <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">${formatCurrency(savings.totalAnnual / 12)}</p>
                  </div>
                  <div style="display: inline-block; margin: 0 15px;">
                    <p style="color: rgba(255, 255, 255, 0.7); margin: 0; font-size: 12px;">3년 누적 효과</p>
                    <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">${formatCurrency(savings.totalAnnual * 3)}</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <!-- Savings Breakdown -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 18px; font-weight: bold;">항목별 절감액</h3>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 15px; background-color: #EBF4FF; border-radius: 8px; margin-bottom: 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #0052CC; font-weight: 500;">구매 비용 절감</td>
                        <td style="text-align: right; color: #1a1a1a; font-weight: bold;">${formatCurrency(savings.purchaseSavings)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 15px; background-color: #FFF8E6; border-radius: 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #B8860B; font-weight: 500;">매각 추가 수익</td>
                        <td style="text-align: right; color: #1a1a1a; font-weight: bold;">${formatCurrency(savings.sellSavings)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 15px; background-color: #E6F6F0; border-radius: 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #00875A; font-weight: 500;">유지보수 절감</td>
                        <td style="text-align: right; color: #1a1a1a; font-weight: bold;">${formatCurrency(savings.maintenanceSavings)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 15px; background-color: #F3E8FF; border-radius: 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #7C3AED; font-weight: 500;">인건비 절감</td>
                        <td style="text-align: right; color: #1a1a1a; font-weight: bold;">${formatCurrency(savings.laborSavings)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 15px; background-color: #FEE2E2; border-radius: 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #DC2626; font-weight: 500;">자산 손실 방지</td>
                        <td style="text-align: right; color: #1a1a1a; font-weight: bold;">${formatCurrency(savings.lossPreventionSavings)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Input Summary -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 18px; font-weight: bold;">입력 정보 요약</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #666; border-bottom: 1px solid #e0e0e0;">보유 디바이스 수</td>
                        <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #e0e0e0;">${inputs.assetCount.toLocaleString()}대</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666; border-bottom: 1px solid #e0e0e0;">평균 디바이스 단가</td>
                        <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #e0e0e0;">${formatCurrency(inputs.avgAssetValue)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666; border-bottom: 1px solid #e0e0e0;">평균 디바이스 연식</td>
                        <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #e0e0e0;">${formatDeviceAge(inputs.deviceAge)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666; border-bottom: 1px solid #e0e0e0;">연간 교체 비율</td>
                        <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #e0e0e0;">${inputs.replacementRate}%</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666; border-bottom: 1px solid #e0e0e0;">IT 담당 인원</td>
                        <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #e0e0e0;">${inputs.itStaffCount}명</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666; border-bottom: 1px solid #e0e0e0;">월 관리시간/인</td>
                        <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #e0e0e0;">${inputs.managementHours}시간</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666; border-bottom: 1px solid #e0e0e0;">현재 유지보수 월 비용</td>
                        <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500; border-bottom: 1px solid #e0e0e0;">${formatCurrency(inputs.maintenanceCost)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666;">연간 분실/도난 건수</td>
                        <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500;">${inputs.annualLoss}건</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 0 30px 40px 30px; text-align: center;">
              <p style="color: #666; margin: 0 0 20px 0; font-size: 14px;">
                더 자세한 상담이 필요하시다면 전문가와 상담하세요.
              </p>
              <a href="https://onetoolplan.com/contact" style="display: inline-block; background: linear-gradient(135deg, #0052CC 0%, #00875A 100%); color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                무료 상담 신청하기
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #999; margin: 0; font-size: 12px;">
                본 리포트는 입력하신 정보를 기반으로 예상 절감액을 산출한 것으로,<br>
                실제 결과는 기업 환경에 따라 달라질 수 있습니다.
              </p>
              <p style="color: #999; margin: 15px 0 0 0; font-size: 12px;">
                &copy; 2024 One Tool Plan. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ReportRequest = await request.json();
    const { email, savings, inputs } = body;

    if (!email || !savings || !inputs) {
      return NextResponse.json(
        { error: '필수 데이터가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // Resend API 키가 없는 경우 테스트 모드로 동작
    if (!process.env.RESEND_API_KEY) {
      console.log('RESEND_API_KEY not set, running in test mode');
      console.log('Email would be sent to:', email);
      console.log('Savings data:', savings);
      return NextResponse.json({
        success: true,
        message: '테스트 모드: 이메일 발송이 시뮬레이션되었습니다.',
        testMode: true
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'One Tool Plan <noreply@jinsimused.com>',
        to: email,
        subject: `[One Tool Plan] 비용 절감 분석 리포트 - 연간 ${formatCurrency(savings.totalAnnual)} 절감 가능`,
        html: generateEmailHtml(body),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return NextResponse.json(
        { error: data.message || '이메일 발송에 실패했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '리포트가 이메일로 발송되었습니다.',
      id: data.id
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
