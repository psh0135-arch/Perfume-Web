import { useState, useEffect } from "react";
import CountdownTimer from "@/components/countdown-timer";
import GlowButton from "@/components/glow-button";
import GlassCard from "@/components/glass-card";
import FloatingParticles from "@/components/floating-particles";
import ReviewCard from "@/components/review-card";
import FragranceNoteCard from "@/components/fragrance-note-card";
import FAQItem from "@/components/faq-item";
import SparkleOverlay from "@/components/sparkle-overlay";
import firstImpressionImage from "@assets/generated_images/first_impression_romance_image_7e799164.png";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reviews = [
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
    }
  ];

  const fragranceNotes = [
    {
      title: "Top Notes",
      subtitle: "첫 인상의 설렘",
      description: "베르가못, 핑크 페퍼, 레몬의\n상큼하고 활기찬 시작",
      image: firstImpressionImage,
      duration: "0-15분",
      noteType: "top" as const
    },
    {
      title: "Middle Notes", 
      subtitle: "마음의 울림",
      description: "장미, 자스민, 피오니의\n우아하고 로맨틱한 꽃향기",
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop",
      duration: "15분-4시간",
      noteType: "middle" as const
    },
    {
      title: "Base Notes",
      subtitle: "깊은 여운", 
      description: "샌달우드, 앰버, 바닐라의\n따뜻하고 관능적인 마무리",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      duration: "4-10시간",
      noteType: "base" as const
    }
  ];

  const faqs = [
    {
      question: "배송은 얼마나 걸리나요?",
      answer: "평일 오후 2시 이전 주문 시 당일 발송되며, 1-2일 내 수령 가능합니다. 제주도 및 도서산간 지역은 추가 1일이 소요될 수 있습니다.",
      icon: "fas fa-shipping-fast"
    },
    {
      question: "정품 보장이 되나요?",
      answer: "네, 100% 정품만을 취급합니다. 모든 제품에는 정품 인증서가 동봉되며, 만약 가품으로 판명될 경우 전액 환불 및 배상해드립니다.",
      icon: "fas fa-certificate"
    },
    {
      question: "교환/반품이 가능한가요?",
      answer: "미개봉 제품에 한해 수령 후 7일 내 교환/반품 가능합니다. 단순 변심의 경우 왕복 배송비는 고객 부담입니다.",
      icon: "fas fa-undo"
    },
    {
      question: "향이 얼마나 오래 지속되나요?",
      answer: "EDP(Eau de Parfum) 타입으로 8-10시간 지속됩니다. 개인차 및 환경에 따라 차이가 있을 수 있습니다.",
      icon: "fas fa-clock"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <SparkleOverlay />
      {/* Hero Section */}
      <section 
        className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        data-testid="hero-section"
      >
        <FloatingParticles />
        
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight hero-text" data-testid="hero-title">
              <span className="text-contrast">나만의 시그니처</span><br/>
              <span className="text-secondary font-black">향기를 찾아서</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium text-shadow" data-testid="hero-subtitle">
              기억 속 그 순간을 되살리는 특별한 향기<br/>
              우디 & 플로럴의 완벽한 조화
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-testid="hero-pricing">
              <span className="text-3xl md:text-4xl font-black text-accent text-shadow-strong">67% 할인</span>
              <span className="text-lg text-muted-foreground line-through font-semibold">₩198,000</span>
              <span className="text-2xl md:text-3xl font-black text-secondary text-shadow-strong">₩65,000</span>
            </div>
            
            <GlowButton href="/order" className="mb-8" data-testid="hero-cta-button">
              <i className="fas fa-sparkles mr-2"></i>
              지금 특가로 만나기
            </GlowButton>
            
            <CountdownTimer />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
          <i className="fas fa-chevron-down text-2xl text-secondary"></i>
        </div>
      </section>

      {/* 공감 텍스트 섹션 */}
      <section className="py-20 bg-card relative overflow-hidden" data-testid="empathy-section" style={{ 
        background: 'linear-gradient(135deg, hsl(350, 15%, 92%) 0%, hsl(340, 20%, 94%) 50%, hsl(330, 25%, 96%) 100%)',
        boxShadow: 'inset 0 0 60px rgba(255, 215, 0, 0.1), inset 0 0 40px rgba(255, 105, 180, 0.05)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-contrast text-shadow" data-testid="empathy-title">
              향기는 기억을 부른다
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="empathy-text-1">
                  그날의 설렘, 그 순간의 떨림이<br/>
                  향기 한 스프레이로 되살아납니다.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="empathy-text-2">
                  나만의 향기는 곧 나의 이야기.<br/>
                  매일 새로운 자신감을 선사하는<br/>
                  특별한 시그니처를 만나보세요.
                </p>
                <div className="flex items-center gap-3" data-testid="social-proof">
                  <i className="fas fa-heart text-secondary text-xl"></i>
                  <span className="text-accent font-medium">이미 12,847명이 선택한 향기</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="h-96 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <i className="fas fa-sparkles text-6xl mb-4 text-secondary"></i>
                    <p className="text-lg font-serif">향기의 아름다움</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상품 소개 섹션 */}
      <section className="py-20 bg-background relative overflow-hidden" data-testid="product-section" style={{ 
        background: 'linear-gradient(135deg, hsl(350, 30%, 96%) 0%, hsl(340, 25%, 97%) 50%, hsl(330, 20%, 98%) 100%)',
        boxShadow: 'inset 0 0 80px rgba(255, 192, 203, 0.15), inset 0 0 40px rgba(255, 215, 0, 0.08)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-contrast text-shadow" data-testid="product-title">
                Premium <span className="text-secondary font-black">Signature</span> Collection
              </h2>
              <p className="text-xl text-muted-foreground">우디 & 플로럴의 완벽한 조화</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <GlassCard className="p-8">
                  <div className="flex items-center gap-3 mb-6" data-testid="product-badges">
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                      한정 특가
                    </span>
                    <span className="text-accent font-semibold">재고 23개 남음</span>
                  </div>
                  
                  <h3 className="text-3xl font-serif font-bold mb-4 text-secondary" data-testid="product-name">
                    Enchanted Garden EDP 50ml
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-6" data-testid="product-pricing">
                    <span className="text-4xl font-bold text-accent">₩65,000</span>
                    <span className="text-xl text-muted-foreground line-through">₩198,000</span>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-bold">67% OFF</span>
                  </div>
                  
                  <div className="space-y-4 mb-8" data-testid="product-features">
                    <div className="flex items-center gap-3">
                      <i className="fas fa-leaf text-secondary"></i>
                      <span>자연에서 추출한 프리미엄 오일 100%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-clock text-secondary"></i>
                      <span>8-10시간 지속되는 롱래스팅</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-certificate text-secondary"></i>
                      <span>프랑스 정품 인증서 포함</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-shipping-fast text-secondary"></i>
                      <span>무료배송 + 당일발송</span>
                    </div>
                  </div>
                  
                  <GlowButton href="/order" className="w-full" data-testid="product-cta-button">
                    <i className="fas fa-shopping-cart mr-2"></i>
                    지금 특가로 주문하기
                  </GlowButton>
                </GlassCard>
              </div>
              
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=800&fit=crop" 
                  alt="고급스러운 향수 병과 우아한 패키징" 
                  className="rounded-xl shadow-2xl w-full h-auto"
                  data-testid="product-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 향수 스토리 섹션 */}
      <section className="py-20 bg-card" data-testid="fragrance-story-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-contrast text-shadow" data-testid="fragrance-story-title">
                향기의 여정
              </h2>
              <p className="text-xl text-muted-foreground">세 개의 노트가 만들어내는 완벽한 하모니</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {fragranceNotes.map((note, index) => (
                <FragranceNoteCard key={index} {...note} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section className="py-20 bg-background relative overflow-hidden" data-testid="reviews-section" style={{ 
        background: 'linear-gradient(135deg, hsl(350, 30%, 96%) 0%, hsl(340, 25%, 97%) 50%, hsl(330, 20%, 98%) 100%)',
        boxShadow: 'inset 0 0 100px rgba(255, 105, 180, 0.12), inset 0 0 50px rgba(255, 215, 0, 0.06)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-contrast text-shadow" data-testid="reviews-title">
                <span className="text-secondary font-black">실제 후기</span>
              </h2>
              <p className="text-xl text-muted-foreground">이미 경험한 고객들의 솔직한 이야기</p>
              
              <div className="flex justify-center items-center gap-4 mt-6" data-testid="overall-rating">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-accent text-xl"></i>
                  ))}
                </div>
                <span className="text-2xl font-bold text-accent">4.9/5</span>
                <span className="text-muted-foreground">(2,847개 후기)</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                className="bg-secondary/20 text-secondary px-6 py-3 rounded-full font-medium hover:bg-secondary/30 transition-colors"
                data-testid="more-reviews-button"
              >
                더 많은 후기 보기 <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 이벤트 섹션 */}
      <section className="py-20 bg-card" data-testid="event-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard className="p-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-accent" data-testid="event-title">
                <i className="fas fa-gift mr-3"></i>
                구매 후기 이벤트
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8" data-testid="event-description">
                구매 후 정성스러운 후기를 남겨주시면<br/>
                추첨을 통해 특별한 선물을 드려요!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8" data-testid="event-prizes">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="font-bold text-accent mb-2">1등 (1명)</h3>
                  <p className="text-sm text-muted-foreground">동일 향수 1개 추가증정</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🎁</div>
                  <h3 className="font-bold text-secondary mb-2">2등 (3명)</h3>
                  <p className="text-sm text-muted-foreground">프리미엄 미니향수 세트</p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <div className="text-3xl mb-3">💝</div>
                  <h3 className="font-bold text-accent mb-2">3등 (10명)</h3>
                  <p className="text-sm text-muted-foreground">스타벅스 기프티콘</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground" data-testid="event-terms">
                이벤트 기간: 2024년 1월 31일까지 | 당첨자 발표: 2024년 2월 5일
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-background" data-testid="faq-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground" data-testid="faq-title">
                자주 묻는 질문
              </h2>
              <p className="text-xl text-muted-foreground">궁금한 점이 있으시면 언제든 문의해주세요</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 마지막 CTA */}
      <section className="py-20 bg-card relative overflow-hidden" data-testid="final-cta-section" style={{ 
        background: 'linear-gradient(135deg, hsl(350, 15%, 92%) 0%, hsl(340, 20%, 94%) 50%, hsl(330, 25%, 96%) 100%)',
        boxShadow: 'inset 0 0 120px rgba(255, 215, 0, 0.2), inset 0 0 60px rgba(255, 105, 180, 0.15)'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-contrast text-shadow" data-testid="final-cta-title">
              특별한 순간을 위한<br/>
              <span className="text-secondary font-black">나만의 향기</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8" data-testid="final-cta-description">
              지금 이 순간이 지나면, 이 특가는 다시 오지 않습니다.<br/>
              당신만의 시그니처 향기를 만나보세요.
            </p>
            
            <GlassCard className="p-8 mb-8 max-w-md mx-auto">
              <div className="text-center" data-testid="stock-indicator">
                <p className="text-sm text-muted-foreground mb-2">남은 재고</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <div className="bg-destructive w-2 h-2 rounded-full animate-pulse"></div>
                  <span className="text-xl font-bold text-destructive">단 23개</span>
                </div>
                
                <div className="bg-muted rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-destructive to-accent h-3 rounded-full" style={{ width: '23%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground">77% 판매 완료</p>
              </div>
            </GlassCard>
            
            <div className="space-y-4">
              <GlowButton href="/order" size="lg" className="block mx-auto" data-testid="final-cta-button">
                <i className="fas fa-sparkles mr-3"></i>
                특가로 향기 입기
              </GlowButton>
              
              <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground" data-testid="trust-signals">
                <span><i className="fas fa-shield-alt mr-1"></i> 100% 정품보장</span>
                <span><i className="fas fa-truck mr-1"></i> 무료배송</span>
                <span><i className="fas fa-undo mr-1"></i> 7일 무료교환</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12" data-testid="footer">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-4">Signature Scent</h3>
                <p className="text-muted-foreground text-sm">
                  나만의 특별한 향기를 찾는 여정에<br/>
                  함께하겠습니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">고객지원</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>고객센터: 1588-1234</li>
                  <li>운영시간: 9:00-18:00</li>
                  <li>이메일: help@signature.com</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">쇼핑정보</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>배송안내</li>
                  <li>교환/반품</li>
                  <li>적립금 안내</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">소셜미디어</h4>
                <div className="flex space-x-4">
                  <i className="fab fa-instagram text-2xl text-secondary hover:text-accent cursor-pointer transition-colors"></i>
                  <i className="fab fa-facebook text-2xl text-secondary hover:text-accent cursor-pointer transition-colors"></i>
                  <i className="fab fa-youtube text-2xl text-secondary hover:text-accent cursor-pointer transition-colors"></i>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Signature Scent. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
