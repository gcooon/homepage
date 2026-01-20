export const BRAND = {
  name: "원킷",
  nameEn: "OneKit",
  slogan: "AI통합자산관리서비스",
  company: "도구모음",
  color: "#8039df",
} as const;

export const CONTACT = {
  email: "contact@onekit.co.kr",
  phone: "1234-5678",
  address: "서울특별시 강남구...",
} as const;

export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "서비스 소개", href: "/services" },
  { label: "AI 기술", href: "/technology" },
  { label: "회사 소개", href: "/about" },
  { label: "고객 사례", href: "/reviews" },
  { label: "문의하기", href: "/contact" },
] as const;
