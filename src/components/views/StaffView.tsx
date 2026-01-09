"use client";

import * as React from "react";
import { Phone, Mail } from "lucide-react";
import { STAFF_DATA } from "@/constants/data";
import type { ViewState } from "@/types";
import { SubNav } from "@/components/layout";
import { Container, Card } from "@/components/ui";

interface StaffViewProps {
  onChangeView: (view: ViewState) => void;
}

export function StaffView({ onChangeView }: StaffViewProps) {
  return (
    <div className="animate-in fade-in duration-500 min-h-screen">
      <SubNav activeView="staff" onChangeView={onChangeView} />
      
      <Container className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-primary">Our Team</h2>
        
        <div className="space-y-6">
          {STAFF_DATA.map((staff, idx) => (
            <Card
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-8 hover:shadow-md"
            >
              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {staff.name}
                </h3>
                <p className="text-lg font-medium text-muted-foreground mb-4">
                  {staff.title}
                </p>
                
                <div className="space-y-1 text-sm md:text-base">
                  {staff.phone && (
                    <div className="flex items-center justify-center md:justify-start gap-2 text-foreground/80">
                      <Phone className="w-4 h-4 text-primary/70" />
                      <a
                        href={`tel:${staff.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {staff.phone}
                      </a>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center md:justify-start gap-2 text-foreground/80">
                    <Mail className="w-4 h-4 text-primary/70" />
                    <a
                      href={`mailto:${staff.email}`}
                      className="hover:text-primary hover:underline"
                    >
                      {staff.email}
                    </a>
                  </div>
                  
                  {staff.organization && (
                    <div className="mt-4 text-sm font-medium text-muted-foreground/80 uppercase tracking-wide">
                      {staff.organization}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Avatar */}
              <div className="shrink-0">
                <div className="h-40 w-40 rounded-full border-4 border-muted overflow-hidden bg-muted">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default StaffView;
