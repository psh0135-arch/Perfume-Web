interface FloatingParticlesProps {
  count?: number;
}

export default function FloatingParticles({ count = 6 }: FloatingParticlesProps) {
  const particles = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className="floating-particle absolute animate-float"
      style={{
        left: `${10 + i * 15}%`,
        animationDelay: `${i * 0.5}s`,
      }}
    />
  ));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles}
    </div>
  );
}
