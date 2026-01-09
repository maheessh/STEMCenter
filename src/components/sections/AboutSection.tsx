"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { PARISHES_SERVED, EXTERNAL_LINKS } from "@/constants/data";
import { IMAGES } from "@/constants/images";
import { Container, Section, Badge } from "@/components/ui";

export function AboutSection() {
  return (
    <Section id="about">
      <Container className="grid gap-12 lg:grid-cols-2 items-start">
        {/* Content */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The Northshore Regional STEM Center
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connecting five parishes through education and opportunity.
            </p>
          </div>

          <div className="prose prose-gray text-muted-foreground">
            <p className="mb-4">
              Led by Southeastern Louisiana University and Northshore Technical
              Community College in partnership with LaSTEM.
            </p>
            <p>
              We serve as a hub for industry, government, educational, and
              community organizations to collaborate effectively on STEM
              initiatives that benefit our entire region.
            </p>
          </div>

          <a
            href={EXTERNAL_LINKS.lastem}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Learn more about LaSTEM
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Map Card */}
        <div className="bg-card rounded-2xl border p-6 shadow-sm">
          <div className="overflow-hidden rounded-xl border bg-white p-2">
            <img
              src={IMAGES.regionMap}
              alt="Map of Louisiana Region 9 parishes"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Serving Parishes:</h4>
            <div className="flex flex-wrap gap-2">
              {PARISHES_SERVED.map((parish) => (
                <Badge key={parish} variant="interactive">
                  {parish}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutSection;
