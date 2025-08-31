import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ReviewCard from "@/components/review-card";
import SparkleOverlay from "@/components/sparkle-overlay";

export default function Reviews() {
  const [sortBy, setSortBy] = useState("latest");
  const [filterBy, setFilterBy] = useState("all");

  const allReviews = [
    {
      name: "김지영",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "정말 오래 지속되고 향이 너무 고급스러워요. 주변에서 향수 뭘 쓰냐고 자꾸 물어봐요 ㅎㅎ",
      date: "2024.01.15"
    },
    {
      name: "박민정",
      profileImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "첫 스프레이부터 완전 반했어요! 플로럴인데 너무 달지 않고 세련된 느낌이에요.",
      date: "2024.01.12"
    },
    {
      name: "이수진",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "이 가격에 이런 품질이라니! 백화점 브랜드 못지않아요. 재주문 예정입니다.",
      date: "2024.01.10"
    },
    {
      name: "최유나",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "향이 정말 독특하고 매력적이에요. 하루종일 기분이 좋아져요!",
      date: "2024.01.08"
    },
    {
      name: "정하은",
      profileImage: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "생각보다 지속력이 좋네요. 은은하면서도 존재감 있는 향이에요.",
      date: "2024.01.07"
    },
    {
      name: "강소영",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "포장도 예쁘고 향도 완벽해요! 선물로도 좋을 것 같아요.",
      date: "2024.01.06"
    },
    {
      name: "윤서현",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "우디 계열 좋아하는데 이건 정말 제 취향이에요. 계속 맡고 싶어져요.",
      date: "2024.01.05"
    },
    {
      name: "임채원",
      profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "향이 너무 좋아서 매일 뿌리고 있어요. 사무실에서도 반응이 좋아요!",
      date: "2024.01.04"
    },
    {
      name: "한예린",
      profileImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "처음엔 조금 강한 것 같았는데 시간이 지나면서 정말 좋아졌어요.",
      date: "2024.01.03"
    },
    {
      name: "오가은",
      profileImage: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "여성스럽고 우아한 향이에요. 데이트할 때 뿌리면 칭찬 많이 받아요.",
      date: "2024.01.02"
    },
    {
      name: "신다은",
      profileImage: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "향수 초보인데도 부담없이 쓸 수 있어요. 깔끔하고 좋아요!",
      date: "2024.01.01"
    },
    {
      name: "안지우",
      profileImage: "https://images.unsplash.com/photo-1541216970279-affbdf9c37fd?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "배송도 빠르고 향도 기대 이상이에요. 친구들한테도 추천했어요.",
      date: "2023.12.30"
    },
    {
      name: "조민서",
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "이런 향 찾고 있었는데 드디어 찾았어요! 완전 만족합니다.",
      date: "2023.12.29"
    },
    {
      name: "황유진",
      profileImage: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "직장에서 뿌리기 좋은 향이에요. 너무 강하지 않아서 부담없어요.",
      date: "2023.12.28"
    },
    {
      name: "송아름",
      profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "향수병도 예쁘고 향도 고급져요. 화장대에 놓기만 해도 기분 좋아져요.",
      date: "2023.12.27"
    },
    {
      name: "배수현",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "겨울에 딱 어울리는 향이에요. 따뜻하면서도 세련된 느낌!",
      date: "2023.12.26"
    },
    {
      name: "문혜진",
      profileImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "플로럴 향을 좋아하는데 이건 정말 취향저격이에요. 로맨틱해요!",
      date: "2023.12.25"
    },
    {
      name: "서지혜",
      profileImage: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "향이 변화하는 게 느껴져요. 시간이 지날수록 더 좋아져요.",
      date: "2023.12.24"
    },
    {
      name: "구민지",
      profileImage: "https://images.unsplash.com/photo-1440133197387-5a6020d5ace2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "20대부터 30대까지 나이 상관없이 좋을 것 같아요. 완전 추천!",
      date: "2023.12.23"
    },
    {
      name: "남보라",
      profileImage: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "처음 써보는 브랜드인데 품질이 정말 좋네요. 믿고 쓸 수 있어요.",
      date: "2023.12.22"
    },
    {
      name: "유다현",
      profileImage: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "향수 마니아인데 이 가격에 이 퀄리티는 정말 놀라워요!",
      date: "2023.12.21"
    },
    {
      name: "홍예은",
      profileImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "친구 결혼식에 뿌리고 갔는데 신부보다 향이 좋다고 농담하더라고요 ㅋㅋ",
      date: "2023.12.20"
    },
    {
      name: "전소희",
      profileImage: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "향이 너무 독특해서 처음엔 당황했는데 지금은 너무 좋아요!",
      date: "2023.12.19"
    },
    {
      name: "김나연",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "회사 동료들이 향수 뭐 쓰는지 계속 물어봐요. 비밀로 하고 싶어요 ㅎㅎ",
      date: "2023.12.18"
    },
    {
      name: "이효정",
      profileImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "탑노트부터 베이스노트까지 완벽한 변화를 보여줘요. 예술작품 같아요!",
      date: "2023.12.17"
    },
    {
      name: "박지원",
      profileImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "향수 초보자도 쉽게 사용할 수 있어요. 부담스럽지 않고 좋아요.",
      date: "2023.12.16"
    },
    {
      name: "최수아",
      profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "스프레이 한 번에 하루종일 지속돼요. 가성비가 너무 좋아요!",
      date: "2023.12.15"
    },
    {
      name: "정현아",
      profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "이 향수 덕분에 자신감이 생겼어요. 매일 뿌리고 나가요!",
      date: "2023.12.14"
    },
    {
      name: "강혜림",
      profileImage: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      review: "포장이 정말 정성스러워요. 선물 받는 기분이었어요. 향도 완벽!",
      date: "2023.12.13"
    },
    {
      name: "윤서영",
      profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "드디어 제 시그니처 향을 찾았어요! 이제 다른 향수는 못 써요.",
      date: "2023.12.12"
    }
  ];

  const filteredReviews = allReviews.filter(review => {
    if (filterBy === "all") return true;
    if (filterBy === "5star") return review.rating === 5;
    if (filterBy === "4star") return review.rating === 4;
    return true;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative" style={{ 
      background: 'linear-gradient(135deg, hsl(350, 30%, 96%) 0%, hsl(340, 25%, 97%) 50%, hsl(330, 20%, 98%) 100%)',
      boxShadow: 'inset 0 0 100px rgba(255, 215, 0, 0.1), inset 0 0 60px rgba(255, 105, 180, 0.08)'
    }}>
      <SparkleOverlay />
      
      {/* Header */}
      <header className="bg-card/50 backdrop-blur-sm border-b border-border py-4" data-testid="reviews-header">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-secondary hover:text-accent" data-testid="back-to-home">
                <i className="fas fa-arrow-left mr-2"></i>
                홈으로 돌아가기
              </Button>
            </Link>
            <h1 className="text-2xl font-serif font-bold text-contrast text-shadow">고객 후기</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Reviews stats */}
          <section className="text-center mb-12" data-testid="reviews-stats">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-contrast text-shadow">
              실제 구매고객 후기
            </h2>
            
            <div className="flex justify-center items-center gap-6 mb-8" data-testid="overall-rating">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-accent text-2xl"></i>
                ))}
              </div>
              <span className="text-3xl font-bold text-accent">4.8/5</span>
              <span className="text-muted-foreground text-lg">({allReviews.length}개 후기)</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">만족도</div>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-secondary">4.9/5</div>
                <div className="text-sm text-muted-foreground">향 평점</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">96%</div>
                <div className="text-sm text-muted-foreground">재구매율</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-accent">9.2/10</div>
                <div className="text-sm text-muted-foreground">지속력</div>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="flex flex-col sm:flex-row gap-4 mb-8" data-testid="reviews-filters">
            <div className="flex-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-card" data-testid="sort-select">
                  <SelectValue placeholder="정렬 기준" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">최신순</SelectItem>
                  <SelectItem value="rating">평점순</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="bg-card" data-testid="filter-select">
                  <SelectValue placeholder="평점 필터" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 후기</SelectItem>
                  <SelectItem value="5star">⭐⭐⭐⭐⭐ (5점)</SelectItem>
                  <SelectItem value="4star">⭐⭐⭐⭐ (4점)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Reviews grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="reviews-grid">
            {sortedReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </section>

          {/* Back to product CTA */}
          <section className="text-center mt-16" data-testid="back-to-product-cta">
            <div className="max-w-md mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
              <h3 className="text-xl font-serif font-bold mb-4 text-secondary">
                이 후기들이 마음에 드시나요?
              </h3>
              <p className="text-muted-foreground mb-6">
                지금 특가 혜택으로 만나보세요!
              </p>
              <Link href="/order">
                <Button className="w-full glow-button text-primary-foreground font-semibold" data-testid="order-from-reviews">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  지금 주문하기
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}