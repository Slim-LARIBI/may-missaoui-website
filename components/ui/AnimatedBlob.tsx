import { cn } from "@/lib/utils";

interface AnimatedBlobProps {
  className?: string;
  color?: string;
  size?: number;
  animationClass?: string;
  opacity?: number;
}

export default function AnimatedBlob({
  className,
  color = "#FF2D78",
  size = 600,
  animationClass = "animate-blob-1",
  opacity = 0.15,
}: AnimatedBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute rounded-full pointer-events-none", animationClass, className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 40% 40%, ${color}, transparent 70%)`,
        filter: "blur(80px)",
        opacity,
      }}
    />
  );
}
