"use client";

import * as React from "react";
import { User } from "lucide-react";
import { ADVISORY_DATA } from "@/constants/data";
import type { ViewState } from "@/types";
import { SubNav } from "@/components/layout";
import { Container, Card } from "@/components/ui";

interface AdvisoryViewProps {
  onChangeView: (view: ViewState) => void;
}

export function AdvisoryView({ onChangeView }: AdvisoryViewProps) {
  return (
    <div className="animate-in fade-in duration-500 min-h-screen">
      <SubNav activeView="advisory" onChangeView={onChangeView} />
      
      <Container className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Advisory Committee</h2>
          <p className="text-muted-foreground mt-2">
            Guiding our mission across the Northshore region.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center text-primary/80 mb-10">
          Members
        </h3>

        <div className="space-y-8 max-w-4xl mx-auto">
          {ADVISORY_DATA.map((member, idx) => (
            <Card
              key={idx}
              className="flex flex-col md:flex-row gap-6 items-center md:items-start p-6 bg-card/50 hover:bg-card transition-colors"
            >
              {/* Image */}
              <div className="w-full md:w-32 flex justify-center">
                <div className="relative w-32 h-32 overflow-hidden rounded-full border shadow-sm bg-muted flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-muted-foreground/50" />
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h4>
                <p className="text-base font-medium text-foreground/80 mb-2 leading-relaxed">
                  {member.organization}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-primary text-sm hover:underline"
                >
                  {member.email}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AdvisoryView;
