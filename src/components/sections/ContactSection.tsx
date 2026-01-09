"use client";

import * as React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO, STAFF_DATA } from "@/constants/data";
import { Container, Section, SectionHeader, Card } from "@/components/ui";

export function ContactSection() {
  // Get the director from staff data
  const director = STAFF_DATA.find((s) => s.title === "Director");

  return (
    <Section id="contact" variant="muted">
      <Container className="grid gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <div>
          <SectionHeader
            title="Contact Us"
            description="Get in touch with our team."
          />

          <div className="space-y-6">
            <ContactItem
              icon={MapPin}
              title="Address"
              content={CONTACT_INFO.address}
            />
            <ContactItem
              icon={Phone}
              title="Phone"
              content={CONTACT_INFO.phone}
              href={`tel:+1${CONTACT_INFO.phone.replace(/\D/g, "")}`}
            />
            <ContactItem
              icon={Mail}
              title="Email"
              content={CONTACT_INFO.email}
              href={`mailto:${CONTACT_INFO.email}`}
            />
          </div>
        </div>

        {/* Director Card */}
        {director && (
          <Card className="overflow-hidden">
            <div className="aspect-video w-full bg-muted">
              <img
                src={director.image}
                alt={director.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{director.name}</h3>
              <p className="text-primary font-medium">{director.title}</p>
              {director.phone && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {director.phone}
                </p>
              )}
              <a
                href={`mailto:${director.email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {director.email}
              </a>
            </div>
          </Card>
        )}
      </Container>
    </Section>
  );
}

interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  content: string;
  href?: string;
}

function ContactItem({ icon: Icon, title, content, href }: ContactItemProps) {
  const ContentWrapper = href ? "a" : "div";

  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <ContentWrapper
          {...(href && { href })}
          className={`mt-1 block text-muted-foreground whitespace-pre-line ${
            href ? "hover:text-primary transition-colors" : ""
          }`}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}

export default ContactSection;
