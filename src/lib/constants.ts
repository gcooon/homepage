export const BRAND = {
  name: "One Tool IT",
  nameKr: "원툴IT",
  slogan: "B2B IT 자산관리 전문 솔루션",
  company: "One Tool IT",
  color: "#8039df",
} as const;

export const CONTACT = {
  email: "contact@onetoolplan.com",
  phone: "1588-0000",
  address: "서울특별시 강남구 테헤란로 123",
} as const;

export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "서비스", href: "/#services" },
  { label: "비용 계산", href: "/#calculator" },
  { label: "회사 소개", href: "/about" },
  { label: "무료견적문의", href: "/contact" },
] as const;
