"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the page has been scrolled past a threshold
 * @param threshold - The scroll position in pixels to trigger the state change
 * @returns boolean indicating if the page has scrolled past the threshold
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

export default useScrolled;
