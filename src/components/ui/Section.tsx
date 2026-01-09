import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "primary";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24",
          variant === "muted" && "bg-muted/30",
          variant === "primary" && "bg-primary/5",
          className
        )}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, description, centered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-12",
          centered && "mx-auto text-center max-w-2xl",
          className
        )}
        {...props}
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

export { Section, SectionHeader };
