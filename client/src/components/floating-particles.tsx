interface FloatingParticlesProps {
  count?: number;
}

export default function FloatingParticles({ count = 12 }: FloatingParticlesProps) {
  const particles = Array.from({ length: count }, (_, i) => {
    const isGolden = i % 3 === 0;
    const isPink = i % 3 === 1;
    
    return (
      <div
        key={i}
        className={`absolute animate-float ${
          isGolden 
            ? 'w-2 h-2 bg-yellow-300 animate-twinkle' 
            : isPink 
              ? 'w-1 h-1 bg-pink-300 animate-twinkle'
              : 'w-1 h-1 bg-purple-300 animate-twinkle'
        } rounded-full opacity-80`}
        style={{
          left: `${5 + (i * 8)}%`,
          top: `${10 + (i * 7)}%`,
          animationDelay: `${i * 0.3}s`,
          boxShadow: isGolden 
            ? '0 0 10px rgba(255, 215, 0, 0.8)' 
            : isPink 
              ? '0 0 8px rgba(255, 105, 180, 0.6)'
              : '0 0 6px rgba(168, 85, 247, 0.5)'
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles}
    </div>
  );
}
