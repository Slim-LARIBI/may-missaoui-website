"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  prefix = "",
  value,
  suffix = "",
  label,
  duration = 2000,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="font-serif text-4xl font-normal text-primary leading-none mb-2 tabular-nums">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="font-jakarta text-sm font-medium text-neutral uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
