import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  return (
    <div 
      className={cn("glass-card rounded-xl", className)}
      data-testid="glass-card"
      {...props}
    >
      {children}
    </div>
  );
}
