"use client";

import * as React from "react";
import { Award, Calendar, Users, Clock, Cpu } from "lucide-react";
import { ELEMENTARY_SCHEDULE, JUNIOR_SENIOR_SCHEDULE } from "@/constants/data";
import type { ViewState, ScheduleItem } from "@/types";
import { SubNav } from "@/components/layout";
import { Container, Card, Button } from "@/components/ui";

interface ScienceFairViewProps {
  onChangeView: (view: ViewState) => void;
}

export function ScienceFairView({ onChangeView }: ScienceFairViewProps) {
  return (
    <div className="animate-in fade-in duration-500 min-h-screen">
      <SubNav activeView="science-fair" onChangeView={onChangeView} />
      
      <Container className="py-12">
        {/* Hero Banner */}
        <div className="rounded-3xl bg-primary/5 p-8 md:p-12 text-center mb-12">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Region VIII Science Fair
          </h2>
          <div className="space-y-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            <p className="font-semibold text-primary">2026 Fair Information</p>
            <p>Location: Pennington Student Activities Center</p>
            <p>1350 N. General Pershing Street, Hammond, LA 70401</p>
          </div>
        </div>

        {/* Schedules */}
        <div className="grid gap-8 lg:grid-cols-2">
          <ScheduleCard
            title="Elementary Division (Feb 5th)"
            subtitle="Grades 4-6 (Not eligible for state)"
            schedule={ELEMENTARY_SCHEDULE}
          />
          <ScheduleCard
            title="Junior/Senior Division (Feb 6th)"
            subtitle="Grades 6-12"
            schedule={JUNIOR_SENIOR_SCHEDULE}
          />
        </div>

        {/* Registration Section */}
        <div className="mt-12 bg-muted/20 rounded-2xl p-8 border">
          <h3 className="text-2xl font-bold mb-6">Registration & Fees</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Deadlines</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>
                  Entry Registration Deadline:{" "}
                  <strong>Monday, January 26th, 2026</strong>
                </li>
                <li>
                  Fee Payment Deadline:{" "}
                  <strong>Friday, January 30th, 2026</strong>
                </li>
              </ul>
              <h4 className="font-semibold text-lg mb-2">Fees (Per Student)</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Elementary Fair: <strong>$15.00</strong>
                </li>
                <li>
                  Junior & Senior Fair: <strong>$25.00</strong>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Card className="p-4">
                <p className="text-sm font-medium mb-2">Mailing Checks?</p>
                <p className="text-xs text-muted-foreground">
                  Make checks out to: Southeastern Louisiana University
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Mail to: Southeastern Northshore STEM Center
                  <br />
                  Attn: Region VIII Science Fair
                  <br />
                  SLU 10345, Hammond, LA 70402
                </p>
              </Card>
              <Button className="w-full">Pay Fees Online</Button>
            </div>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Get Involved</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <VolunteerCard
              icon={Users}
              title="Judges"
              description="Industry pros or science backgrounds needed. No fair experience required!"
              action="Volunteer as Judge"
            />
            <VolunteerCard
              icon={Clock}
              title="Event Staff"
              description="2-hour slots for setup, check-in, and welcoming guests. No experience needed."
              action="Volunteer as Staff"
            />
            <VolunteerCard
              icon={Cpu}
              title="Vendors"
              description="Organizations can set up STEM activity booths for students and families."
              action="Contact Us"
              href="mailto:stemcenter@southeastern.edu"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

interface ScheduleCardProps {
  title: string;
  subtitle: string;
  schedule: ScheduleItem[];
}

function ScheduleCard({ title, subtitle, schedule }: ScheduleCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
        <Calendar className="w-5 h-5" /> {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
      <div className="space-y-4 relative pl-4 border-l-2 border-primary/20">
        {schedule.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
            <p className="text-sm font-bold">{item.time}</p>
            <p className="text-sm text-muted-foreground">{item.event}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

interface VolunteerCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  action: string;
  href?: string;
}

function VolunteerCard({
  icon: Icon,
  title,
  description,
  action,
  href,
}: VolunteerCardProps) {
  const ActionElement = href ? "a" : "button";

  return (
    <Card className="p-6 text-center hover:border-primary transition-colors">
      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <ActionElement
        {...(href && { href })}
        className="text-primary text-sm font-semibold hover:underline"
      >
        {action}
      </ActionElement>
    </Card>
  );
}

export default ScienceFairView;
