"use client";

import * as React from "react";
import { PARTNER_LOGOS } from "@/constants/data";
import { Container } from "@/components/ui";

export function PartnersSection() {
  return (
    <div className="border-y bg-muted/30">
      <Container className="py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {PARTNER_LOGOS.map((partner) => (
            <img
              key={partner.name}
              src={partner.image}
              alt={partner.name}
              className={`${partner.height} w-auto object-contain`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PartnersSection;
