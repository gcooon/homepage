import { NextRequest, NextResponse } from 'next/server';

interface ContactRequest {
  name: string;
  company: string;
  employeeCount: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

function getEmployeeCountLabel(value: string): string {
  switch (value) {
    case '1-10': return '10명 이하';
    case '11-50': return '11~50명';
    case '51-100': return '51~100명';
    case '100+': return '100명 이상';
    default: return value;
  }
}

function getTypeLabel(value: string): string {
  switch (value) {
    case 'service': return '서비스 상담';
    case 'quote': return '견적 요청';
    case 'partnership': return '파트너십 제안';
    case 'other': return '기타 문의';
    default: return value;
  }
}

function generateNotificationEmail(data: ContactRequest): string {
  const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>새로운 상담 신청</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8039df 0%, #6b21a8 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">새로운 상담 신청이 접수되었습니다</h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 14px;">${now}</p>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 18px; font-weight: bold; border-bottom: 2px solid #8039df; padding-bottom: 10px;">신청자 정보</h2>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; display: inline-block; width: 100px;">이름</span>
                    <span style="color: #1a1a1a; font-weight: 600;">${data.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; display: inline-block; width: 100px;">회사명</span>
                    <span style="color: #1a1a1a; font-weight: 600;">${data.company}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; display: inline-block; width: 100px;">직원 규모</span>
                    <span style="color: #1a1a1a; font-weight: 600;">${getEmployeeCountLabel(data.employeeCount)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; display: inline-block; width: 100px;">이메일</span>
                    <a href="mailto:${data.email}" style="color: #8039df; font-weight: 600; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; display: inline-block; width: 100px;">전화번호</span>
                    <a href="tel:${data.phone}" style="color: #8039df; font-weight: 600; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #666; display: inline-block; width: 100px;">문의 유형</span>
                    <span style="display: inline-block; background-color: #f3e8ff; color: #8039df; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${getTypeLabel(data.type)}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 18px; font-weight: bold; border-bottom: 2px solid #8039df; padding-bottom: 10px;">문의 내용</h2>
              <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; color: #333; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 30px 30px 30px; text-align: center;">
              <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #8039df 0%, #6b21a8 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; font-size: 14px; margin-right: 10px;">
                이메일 답장하기
              </a>
              <a href="tel:${data.phone}" style="display: inline-block; background-color: #ffffff; color: #8039df; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; font-size: 14px; border: 2px solid #8039df;">
                전화하기
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #999; margin: 0; font-size: 12px;">
                이 메일은 One Tool IT 홈페이지의 상담 신청 폼에서 자동 발송되었습니다.
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

function generateConfirmationEmail(data: ContactRequest): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>상담 신청이 접수되었습니다</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8039df 0%, #6b21a8 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">One Tool IT</h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">상담 신청이 접수되었습니다</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; margin: 0 auto 25px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 40px; line-height: 80px;">✓</span>
              </div>
              <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 24px;">
                ${data.name}님, 감사합니다!
              </h2>
              <p style="color: #666; margin: 0; font-size: 16px; line-height: 1.6;">
                상담 신청이 정상적으로 접수되었습니다.<br>
                담당자가 확인 후 <strong>영업일 기준 1일 이내</strong>에<br>
                연락드리겠습니다.
              </p>
            </td>
          </tr>

          <!-- Summary -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #f8f9fa; border-radius: 12px; padding: 25px;">
                <h3 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">접수 내용 요약</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; color: #666;">회사명</td>
                    <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500;">${data.company}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;">직원 규모</td>
                    <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500;">${getEmployeeCountLabel(data.employeeCount)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;">문의 유형</td>
                    <td style="padding: 8px 0; text-align: right; color: #1a1a1a; font-weight: 500;">${getTypeLabel(data.type)}</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 30px 30px 30px; text-align: center;">
              <p style="color: #666; margin: 0 0 15px 0; font-size: 14px;">
                급한 문의는 아래 연락처로 문의해 주세요.
              </p>
              <p style="margin: 0;">
                <a href="tel:1588-0000" style="color: #8039df; text-decoration: none; font-weight: bold;">1588-0000</a>
                <span style="color: #ccc; margin: 0 10px;">|</span>
                <a href="mailto:contact@onetoolplan.com" style="color: #8039df; text-decoration: none; font-weight: bold;">contact@onetoolplan.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #999; margin: 0; font-size: 12px;">
                &copy; 2024 One Tool IT. All rights reserved.
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
    const body: ContactRequest = await request.json();
    const { name, company, employeeCount, email, phone, type, message } = body;

    // Validation
    if (!name || !company || !employeeCount || !email || !phone || !type || !message) {
      return NextResponse.json(
        { error: '필수 항목이 누락되었습니다.' },
        { status: 400 }
      );
    }

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@onetoolplan.com';

    // Resend API 키가 없는 경우 테스트 모드로 동작
    if (!process.env.RESEND_API_KEY) {
      console.log('RESEND_API_KEY not set, running in test mode');
      console.log('Admin notification would be sent to:', ADMIN_EMAIL);
      console.log('Confirmation email would be sent to:', email);
      console.log('Form data:', body);
      return NextResponse.json({
        success: true,
        message: '테스트 모드: 이메일 발송이 시뮬레이션되었습니다.',
        testMode: true
      });
    }

    // 1. 관리자에게 알림 이메일 발송
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'One Tool IT <onboarding@resend.dev>',
        to: ADMIN_EMAIL,
        subject: `[상담신청] ${company} - ${name}님 (${getTypeLabel(type)})`,
        html: generateNotificationEmail(body),
      }),
    });

    if (!adminEmailResponse.ok) {
      const errorData = await adminEmailResponse.json();
      console.error('Admin email error:', errorData);
      return NextResponse.json(
        { error: '이메일 발송에 실패했습니다.' },
        { status: 500 }
      );
    }

    // 2. 신청자에게 확인 이메일 발송
    const confirmEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'One Tool IT <onboarding@resend.dev>',
        to: email,
        subject: '[One Tool IT] 상담 신청이 접수되었습니다',
        html: generateConfirmationEmail(body),
      }),
    });

    if (!confirmEmailResponse.ok) {
      console.error('Confirmation email failed, but admin was notified');
    }

    return NextResponse.json({
      success: true,
      message: '상담 신청이 완료되었습니다.'
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
