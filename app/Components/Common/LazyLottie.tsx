"use client";
import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

interface LazyLottieProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export default function LazyLottie({
  src,
  loop = true,
  autoplay = true,
  className,
  width,
  height,
}: LazyLottieProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width, height }} className={className}>
      {isVisible && (
        <DotLottieReact
          src={src}
          loop={loop}
          autoplay={autoplay}
          className="w-full h-full"
          width={width}
          height={height}
        />
      )}
    </div>
  );
}
