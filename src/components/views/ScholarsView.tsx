"use client";

import * as React from "react";
import { GraduationCap } from "lucide-react";
import { SCHOLARS_FEATURES } from "@/constants/data";
import type { ViewState } from "@/types";
import { SubNav } from "@/components/layout";
import { Container, Card, Button } from "@/components/ui";

interface ScholarsViewProps {
  onChangeView: (view: ViewState) => void;
}

export function ScholarsView({ onChangeView }: ScholarsViewProps) {
  return (
    <div className="animate-in fade-in duration-500 min-h-screen">
      <SubNav activeView="scholars" onChangeView={onChangeView} />
      
      <Container className="py-12">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-foreground mb-6">
            STEM Scholars Program
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            The Southeastern STEM Scholars program is designed for high school
            students. It provides students who have expressed interest in
            pursuing STEM careers with experiences that are vital to success in
            their career pathways.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOLARS_FEATURES.map((item, i) => (
            <Card
              key={i}
              className="p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-bold text-lg text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Applications for the 2026-2027 STEM Scholars cohort are now open.
            Join a community of aspiring scientists, engineers, and innovators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Apply Now</Button>
            <Button variant="secondary" asChild>
              <a href="mailto:stemcenter@southeastern.edu">
                Request More Info
              </a>
            </Button>
          </div>
        </div>

        {/* Program Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Program Highlights</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Apply",
                desc: "Submit your application with transcript and essay",
              },
              {
                step: "2",
                title: "Interview",
                desc: "Meet with program coordinators",
              },
              {
                step: "3",
                title: "Join",
                desc: "Begin your STEM journey with cohort activities",
              },
              {
                step: "4",
                title: "Succeed",
                desc: "Complete projects and prepare for college",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ScholarsView;
