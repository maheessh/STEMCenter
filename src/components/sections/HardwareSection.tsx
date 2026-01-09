"use client";

import * as React from "react";
import { Cpu } from "lucide-react";
import { HARDWARE_ITEMS } from "@/constants/data";
import { Container, Section, SectionHeader, Card } from "@/components/ui";

export function HardwareSection() {
  return (
    <Section id="hardware">
      <Container>
        <SectionHeader
          title="Hardware & Robots"
          description="Hands-on equipment available for loan to educators and students."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HARDWARE_ITEMS.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <Cpu className="h-5 w-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                {item.category && (
                  <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default HardwareSection;
