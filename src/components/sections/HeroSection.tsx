"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { HERO_IMAGES } from "@/constants/data";
import { IMAGES } from "@/constants/images";
import { Container, Button } from "@/components/ui";

export function HeroSection() {
  return (
    <section id="home" className="py-16 md:py-24 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            LaSTEM Region 9 • Northshore
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6 leading-tight">
            Southeastern Northshore{" "}
            <span className="text-primary">STEM Center</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            The Louisiana Regional Science, Technology, Engineering, and Math
            (LaSTEM) Network connects communities to improve STEM education
            across the Northshore region.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#explore">Explore programs</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#contact">Contact us</a>
            </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="order-1 lg:order-2">
          <ImageCarousel images={HERO_IMAGES} />
        </div>
      </Container>
    </section>
  );
}

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full">
      {/* Decorative Elements */}
      <img
        src={IMAGES.decorative.topLeft}
        alt=""
        className="pointer-events-none absolute -left-8 -top-8 z-30 h-24 w-24 select-none drop-shadow-lg"
        aria-hidden="true"
      />
      <img
        src={IMAGES.decorative.bottomRight}
        alt=""
        className="pointer-events-none absolute -bottom-8 -right-8 z-30 h-24 w-24 select-none drop-shadow-lg"
        aria-hidden="true"
      />

      {/* Carousel Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted shadow-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`STEM Center activities - Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
