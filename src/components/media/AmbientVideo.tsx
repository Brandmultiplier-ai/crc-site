"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

interface AmbientVideoProps extends Omit<
  ComponentPropsWithoutRef<"video">,
  "autoPlay" | "muted" | "loop" | "playsInline" | "children"
> {
  src: string;
}

/**
 * A silent looping clip, started from script rather than the autoplay attribute: React sets `muted`
 * as a property, not an attribute, and mobile browsers only autoplay muted media. Under reduced
 * motion the clip stays on its poster frame.
 */
export function AmbientVideo({ src, ...rest }: AmbientVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {
      // Autoplay refused (data saver, low power mode): the poster stays up, which is fine.
    });
  }, []);

  return (
    <video ref={ref} muted loop playsInline {...rest}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
