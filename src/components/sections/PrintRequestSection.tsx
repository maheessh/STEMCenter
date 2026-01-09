"use client";

import * as React from "react";
import { useState } from "react";
import { UploadCloud, Check, Loader2 } from "lucide-react";
import { Container, Section, SectionHeader, Button, Input, Textarea, Card } from "@/components/ui";

export function PrintRequestSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  if (isSubmitted) {
    return (
      <Section id="3d-print" variant="primary">
        <Container>
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Request Submitted!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your 3D print request. We'll review it and get back to you within 2-3 business days.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Request
            </Button>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="3d-print" variant="primary">
      <Container>
        <SectionHeader
          title="3D Print Request"
          description="Submit your .STL or .OBJ files and we'll print them for you."
          centered
        />

        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="First Name"
                placeholder="Jane"
                required
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                required
              />
            </div>

            <Input
              type="email"
              label="Email"
              placeholder="jane@school.edu"
              required
            />

            <Textarea
              label="Project Description"
              placeholder="Tell us about your project and what you need printed..."
              rows={4}
              required
            />

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Upload File
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".stl,.obj"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/20 p-10 hover:bg-muted/40 transition-colors">
                  <UploadCloud className="mb-4 h-10 w-10 text-muted-foreground" />
                  {fileName ? (
                    <p className="text-sm font-medium text-primary">{fileName}</p>
                  ) : (
                    <>
                      <p className="mb-1 text-sm font-medium">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        STL, OBJ up to 25MB
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </form>
        </Card>
      </Container>
    </Section>
  );
}

export default PrintRequestSection;
