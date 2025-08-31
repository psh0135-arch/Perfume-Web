import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  size?: "sm" | "md" | "lg";
  [key: string]: any;
}

export default function GlowButton({ 
  children, 
  className = "", 
  onClick, 
  href,
  size = "md",
  ...props 
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-3 text-base",
    md: "px-8 py-4 text-lg",
    lg: "px-12 py-5 text-xl"
  };

  const buttonClasses = cn(
    "glow-button rounded-full font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 inline-block text-center",
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href}>
        <span
          className={buttonClasses}
          data-testid="glow-button"
          {...props}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      data-testid="glow-button"
      {...props}
    >
      {children}
    </button>
  );
}
