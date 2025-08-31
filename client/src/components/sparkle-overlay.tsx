export default function SparkleOverlay() {
  return (
    <div className="sparkle-overlay" data-testid="sparkle-overlay">
      {/* Fixed sparkling stars */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-pink-300 rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-80 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-96 left-2/3 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-pink-300 rounded-full animate-twinkle" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-60 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-80 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-twinkle" style={{ animationDelay: '0.3s' }}></div>
    </div>
  );
}