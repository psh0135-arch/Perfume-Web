import { useState } from "react";
import { Link } from "wouter";
import GlowButton from "@/components/glow-button";
import GlassCard from "@/components/glass-card";
import CountdownTimer from "@/components/countdown-timer";
import SparkleOverlay from "@/components/sparkle-overlay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Order() {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("single");

  const productOptions = [
    {
      id: "single",
      name: "단품 구매",
      price: 65000,
      originalPrice: 198000,
      discount: "67% 할인",
      description: "Enchanted Garden EDP 50ml"
    },
    {
      id: "bundle",
      name: "2개 세트",
      price: 120000,
      originalPrice: 396000,
      discount: "70% 할인",
      description: "Enchanted Garden EDP 50ml × 2개",
      popular: true
    },
    {
      id: "premium",
      name: "프리미엄 세트",
      price: 180000,
      originalPrice: 594000,
      discount: "70% 할인",
      description: "Enchanted Garden EDP 50ml × 3개 + 미니향수 세트"
    }
  ];

  const selectedProduct = productOptions.find(option => option.id === selectedOption);

  return (
    <div className="min-h-screen bg-background text-foreground relative" style={{ 
      background: 'linear-gradient(135deg, hsl(350, 30%, 96%) 0%, hsl(340, 25%, 97%) 50%, hsl(330, 20%, 98%) 100%)',
      boxShadow: 'inset 0 0 100px rgba(255, 215, 0, 0.1), inset 0 0 60px rgba(255, 105, 180, 0.08)'
    }}>
      <SparkleOverlay />
      {/* Header with back button */}
      <header className="bg-card/50 backdrop-blur-sm border-b border-border py-4" data-testid="order-header">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-secondary hover:text-accent" data-testid="back-button">
                <i className="fas fa-arrow-left mr-2"></i>
                돌아가기
              </Button>
            </Link>
            <h1 className="text-xl font-serif font-bold text-secondary">주문하기</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Product summary */}
          <section className="mb-8" data-testid="product-summary">
            <GlassCard className="p-6">
              <div className="flex items-center gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&h=200&fit=crop" 
                  alt="Enchanted Garden EDP"
                  className="w-24 h-24 rounded-lg object-cover"
                  data-testid="product-thumbnail"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-2" data-testid="product-title">
                    Enchanted Garden EDP 50ml
                  </h2>
                  <div className="flex items-center gap-4" data-testid="product-price-summary">
                    <span className="text-2xl font-bold text-accent">₩65,000</span>
                    <span className="text-lg text-muted-foreground line-through">₩198,000</span>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-bold">67% OFF</span>
                  </div>
                </div>
                <CountdownTimer className="max-w-xs" />
              </div>
            </GlassCard>
          </section>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product options */}
            <section data-testid="product-options">
              <h3 className="text-xl font-semibold mb-6 text-foreground">상품 옵션 선택</h3>
              
              <div className="space-y-4 mb-6">
                {productOptions.map((option) => (
                  <div key={option.id} className="relative">
                    {option.popular && (
                      <div className="absolute -top-2 left-4 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold z-10">
                        인기
                      </div>
                    )}
                    <label 
                      className={`block cursor-pointer ${selectedOption === option.id ? 'ring-2 ring-secondary' : ''}`}
                      data-testid={`option-${option.id}`}
                    >
                      <input
                        type="radio"
                        name="productOption"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="sr-only"
                      />
                      <GlassCard className={`p-4 transition-all ${selectedOption === option.id ? 'bg-secondary/10' : ''}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-lg text-secondary">{option.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold text-accent">₩{option.price.toLocaleString()}</span>
                              <span className="text-sm text-muted-foreground line-through">₩{option.originalPrice.toLocaleString()}</span>
                              <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs">{option.discount}</span>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 ${selectedOption === option.id ? 'bg-secondary border-secondary' : 'border-muted'}`}>
                            {selectedOption === option.id && (
                              <div className="w-full h-full rounded-full bg-secondary"></div>
                            )}
                          </div>
                        </div>
                      </GlassCard>
                    </label>
                  </div>
                ))}
              </div>
            </section>

            {/* Order form */}
            <section data-testid="order-form">
              <h3 className="text-xl font-semibold mb-6 text-foreground">주문 정보</h3>
              
              <GlassCard className="p-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">이름 *</Label>
                    <Input 
                      id="name" 
                      placeholder="받는 분 성함을 입력해주세요"
                      className="bg-background/50"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-foreground">연락처 *</Label>
                    <Input 
                      id="phone" 
                      placeholder="010-0000-0000"
                      className="bg-background/50"
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address" className="text-foreground">배송지 주소 *</Label>
                    <Input 
                      id="address" 
                      placeholder="주소를 입력해주세요"
                      className="bg-background/50"
                      data-testid="input-address"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="delivery-request" className="text-foreground">배송 요청사항</Label>
                    <Select>
                      <SelectTrigger className="bg-background/50" data-testid="select-delivery-request">
                        <SelectValue placeholder="배송 요청사항을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="door">문 앞에 놓아주세요</SelectItem>
                        <SelectItem value="security">경비실에 맡겨주세요</SelectItem>
                        <SelectItem value="direct">직접 받겠습니다</SelectItem>
                        <SelectItem value="call">부재시 연락주세요</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </form>
              </GlassCard>
            </section>
          </div>

          {/* Order summary */}
          <section className="mt-8" data-testid="order-summary">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">주문 요약</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">상품</span>
                  <span className="font-medium" data-testid="summary-product">
                    {selectedProduct?.name}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">상품 금액</span>
                  <span className="font-medium" data-testid="summary-price">
                    ₩{selectedProduct?.price.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">배송비</span>
                  <span className="font-medium text-accent" data-testid="summary-shipping">
                    무료
                  </span>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">총 결제금액</span>
                    <span className="text-2xl font-bold text-accent" data-testid="summary-total">
                      ₩{selectedProduct?.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <GlowButton className="w-full" size="lg" data-testid="order-submit-button">
                  <i className="fas fa-credit-card mr-3"></i>
                  결제하기
                </GlowButton>
                
                <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground" data-testid="payment-trust-signals">
                  <span><i className="fas fa-lock mr-1"></i> 안전한 결제</span>
                  <span><i className="fas fa-shield-alt mr-1"></i> 개인정보보호</span>
                  <span><i className="fas fa-certificate mr-1"></i> SSL 보안</span>
                </div>
                
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                  <p className="text-sm text-accent font-medium" data-testid="urgency-message">
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    재고가 얼마 남지 않았습니다! 지금 주문하세요.
                  </p>
                </div>
              </div>
            </GlassCard>
          </section>
        </div>
      </div>
    </div>
  );
}