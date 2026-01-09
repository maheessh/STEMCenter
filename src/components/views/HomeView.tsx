"use client";

import * as React from "react";
import type { ViewState } from "@/types";
import {
  HeroSection,
  PartnersSection,
  AboutSection,
  ExploreSection,
  HardwareSection,
  PrintRequestSection,
  ContactSection,
} from "@/components/sections";

interface HomeViewProps {
  onChangeView: (view: ViewState) => void;
}

export function HomeView({ onChangeView }: HomeViewProps) {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ExploreSection onChangeView={onChangeView} />
      <HardwareSection />
      <PrintRequestSection />
      <ContactSection />
    </>
  );
}

export default HomeView;
