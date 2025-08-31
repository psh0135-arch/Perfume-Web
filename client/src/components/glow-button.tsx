import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  [key: string]: any;
}

export default function GlowButton({ 
  children, 
  className = "", 
  onClick, 
  size = "md",
  ...props 
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-3 text-base",
    md: "px-8 py-4 text-lg",
    lg: "px-12 py-5 text-xl"
  };

  return (
    <button
      className={cn(
        "glow-button rounded-full font-semibold text-primary-foreground transition-all duration-300 hover:scale-105",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      data-testid="glow-button"
      {...props}
    >
      {children}
    </button>
  );
}
