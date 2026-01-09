import * as React from "react";
import { IMAGES } from "@/constants/images";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <img
      src={IMAGES.logo}
      alt="STEM Center Logo"
      className={`${sizeClasses[size]} w-auto object-contain ${className || ""}`}
    />
  );
}

export default Logo;
