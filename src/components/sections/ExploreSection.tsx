"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { IMAGES } from "@/constants/images";
import type { ViewState } from "@/types";
import { Container, Section, SectionHeader, Card } from "@/components/ui";

interface ExploreCardData {
  title: string;
  img: string;
  view: ViewState;
}

const EXPLORE_CARDS: ExploreCardData[] = [
  { title: "Staff", img: IMAGES.programs.staff, view: "staff" },
  { title: "Advisory Committee", img: IMAGES.programs.advisory, view: "advisory" },
  { title: "Region VIII Science Fair", img: IMAGES.programs.scienceFair, view: "science-fair" },
  { title: "SeaPerch", img: IMAGES.programs.seaperch, view: "seaperch" },
  { title: "STEM Scholars", img: IMAGES.programs.scholars, view: "scholars" },
];

interface ExploreSectionProps {
  onChangeView: (view: ViewState) => void;
}

export function ExploreSection({ onChangeView }: ExploreSectionProps) {
  return (
    <Section id="explore" variant="muted">
      <Container>
        <SectionHeader
          title="Explore Our Programs"
          description="Discover initiatives that are shaping the future of STEM in our region."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE_CARDS.map((card) => (
            <ExploreCard
              key={card.view}
              title={card.title}
              img={card.img}
              onClick={() => onChangeView(card.view)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

interface ExploreCardProps {
  title: string;
  img: string;
  onClick?: () => void;
}

function ExploreCard({ title, img, onClick }: ExploreCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Card>
  );
}

export default ExploreSection;
