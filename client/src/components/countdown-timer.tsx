import { useState, useEffect } from "react";

interface CountdownTimerProps {
  className?: string;
}

export default function CountdownTimer({ className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const endTime = Date.now() + (12 * 60 * 60 * 1000) + (34 * 60 * 1000) + (56 * 1000);

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`glass-card rounded-lg p-6 max-w-md mx-auto ${className}`} data-testid="countdown-timer">
      <p className="text-sm text-muted-foreground mb-3">특가 마감까지</p>
      <div className="flex justify-center gap-4 text-2xl font-bold">
        <div className="text-center">
          <div className="text-accent" data-testid="countdown-hours">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground">시간</div>
        </div>
        <div className="text-secondary">:</div>
        <div className="text-center">
          <div className="text-accent" data-testid="countdown-minutes">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground">분</div>
        </div>
        <div className="text-secondary">:</div>
        <div className="text-center">
          <div className="text-accent" data-testid="countdown-seconds">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground">초</div>
        </div>
      </div>
    </div>
  );
}
