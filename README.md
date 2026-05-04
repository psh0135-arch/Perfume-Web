# 🌸 Signature Scent — 프리미엄 향수 랜딩페이지

30대 여성 타깃의 감성 마케팅 향수 특가판매 랜딩페이지입니다.  
우디/플로럴 계열 프리미엄 향수를 기간 한정 특가로 소개하며, 구매 전환을 유도하는 구조로 설계되었습니다.

---

## 📌 주요 기능

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 랜딩 홈 | `/` | 메인 랜딩페이지 (전체 섹션) |
| 주문 페이지 | `/order` | 상품 옵션 선택 및 주문 정보 입력 |
| 후기 페이지 | `/reviews` | 30개 고객 후기 + 정렬/필터 기능 |

### 홈 페이지 구성
- **Hero 섹션** — 감성적인 헤드라인 + 카운트다운 타이머 + 특가 가격
- **공감 텍스트 섹션** — 향기와 기억, 나만의 향이라는 테마
- **상품 소개 섹션** — 특가 혜택, 재고 제한, 제품 특징
- **향수 스토리 섹션** — Top / Middle / Base 노트 설명 및 이미지
- **고객 후기 섹션** — 별점, 프로필 이미지 포함 실사용 후기
- **이벤트 섹션** — 후기 작성 시 추첨 경품 제공
- **FAQ 섹션** — 배송, 정품, 교환/반품 안내
- **최종 CTA** — 재고 긴급도 + 특가 주문 유도

---

## 🛠 기술 스택

### Frontend
- **React 18** + TypeScript
- **Vite** (빌드 도구)
- **Wouter** (클라이언트 사이드 라우팅)
- **TanStack Query** (서버 상태 관리)
- **Tailwind CSS** + 커스텀 CSS 애니메이션
- **Shadcn/ui** (Radix UI 기반 컴포넌트)

### Backend
- **Express.js** + TypeScript
- **Drizzle ORM** + PostgreSQL (Neon Serverless)

---

## 🎨 디자인 시스템

- **컬러**: 딥 핑크, 메탈릭 로즈, 골드 베이지
- **폰트**: Playfair Display (세리프) + Inter (산세리프)
- **효과**: 반짝이는 조명 효과, 글로우 버튼, 글라스모피즘 카드
- **애니메이션**: sparkle-bg, shimmer, float, twinkle

---

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

개발 서버는 기본적으로 **http://localhost:5000** 에서 실행됩니다.

---

## 📁 폴더 구조

```
├── client/
│   └── src/
│       ├── components/
│       │   ├── ui/               # Shadcn 기본 컴포넌트
│       │   ├── countdown-timer   # 특가 마감 카운트다운
│       │   ├── faq-item          # FAQ 아코디언 아이템
│       │   ├── floating-particles # 반짝이는 파티클 효과
│       │   ├── fragrance-note-card # 향수 노트 카드
│       │   ├── glass-card        # 글라스모피즘 카드
│       │   ├── glow-button       # 글로우 이펙트 버튼
│       │   ├── review-card       # 고객 후기 카드
│       │   └── sparkle-overlay   # 스파클링 오버레이
│       ├── pages/
│       │   ├── home.tsx          # 메인 랜딩페이지
│       │   ├── order.tsx         # 주문 페이지
│       │   └── reviews.tsx       # 전체 후기 페이지
│       └── App.tsx
├── server/
│   ├── index.ts
│   ├── routes.ts
│   └── storage.ts
└── shared/
    └── schema.ts
```

---

## 🌟 특가 혜택

- 정가 ₩198,000 → **특가 ₩65,000 (67% 할인)**
- 무료배송 + 당일발송
- 100% 정품 보장
- 7일 무료 교환

---

© 2024 Signature Scent. All rights reserved.
