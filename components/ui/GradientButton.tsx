"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  download?: boolean;
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
  download = false,
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-primary text-white border-2 border-primary hover:shadow-pink-md",
    outline:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
    ghost:
      "bg-surface text-primary border-2 border-surface hover:bg-primary hover:text-white hover:border-primary",
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full font-jakarta font-medium",
    "transition-all duration-300 cursor-pointer select-none",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const MotionWrapper = motion.div;

  const content = (
    <MotionWrapper
      whileHover={disabled ? {} : { scale: 1.03, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="inline-flex"
    >
      {href ? (
        <Link
          href={href}
          className={baseClasses}
          {...(download ? { download: true } : {})}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={baseClasses}
        >
          {children}
        </button>
      )}
    </MotionWrapper>
  );

  return content;
}
