"use client";

import * as React from "react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/constants/images";
import { EXTERNAL_LINKS } from "@/constants/data";
import type { ViewState } from "@/types";
import { SubNav } from "@/components/layout";
import { Container, Card, Button } from "@/components/ui";

interface SeaPerchViewProps {
  onChangeView: (view: ViewState) => void;
}

export function SeaPerchView({ onChangeView }: SeaPerchViewProps) {
  return (
    <div className="animate-in fade-in duration-500 min-h-screen">
      <SubNav activeView="seaperch" onChangeView={onChangeView} />
      
      <Container className="py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary mb-4">
              SeaPerch Challenge
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SeaPerch is an innovative underwater robotics program that equips
              students, educators, and parents with the resources they need to
              build an underwater remotely operated vehicle (ROV). It's a great
              place to start on your journey to build a bot and use it for good.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a
                  href={EXTERNAL_LINKS.seaperch}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit SeaPerch Website
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-2">
              <img
                src={IMAGES.programs.seaperch}
                alt="SeaPerch underwater robotics"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Training Card */}
          <Card className="p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold mb-4 text-primary">
              New Coaches Training
            </h3>
            <p className="text-muted-foreground mb-4">
              A comprehensive workshop designed to equip new coaches with
              knowledge and tools. Gain an overview, learn best practices, and
              receive hands-on experience building an ROV.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                No prior experience necessary
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                All materials provided
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Includes a SeaPerch kit
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Register for Training
            </Button>
          </Card>

          {/* Regional Competition Card */}
          <Card className="p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold mb-4 text-primary">
              2026 Spring Regional
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Saturday, March 7th</p>
                  <p className="text-xs text-muted-foreground">8:00am - 2:00pm</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Kinesiology Building</p>
                  <p className="text-xs text-muted-foreground">
                    400 Mane Street, Hammond, LA 70401
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              All teams are invited to register and compete. Need a kit? Let us
              know!
            </p>
            <Button className="w-full">Register Team</Button>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="bg-muted/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're an educator looking to start a program, a student
            interested in underwater robotics, or a sponsor wanting to support
            STEM education, we're here to help.
          </p>
          <Button variant="secondary" asChild>
            <a href="mailto:stemcenter@southeastern.edu">Contact Us</a>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default SeaPerchView;
