"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants/data";
import type { ViewState } from "@/types";
import { Container } from "@/components/ui";

interface SubNavProps {
  activeView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export function SubNav({ activeView, onChangeView }: SubNavProps) {
  return (
    <div className="border-b bg-muted/30 sticky top-16 z-40 backdrop-blur-sm">
      <Container className="py-4 md:py-6">
        <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-3">
          Explore This Section
        </div>
        <div className="flex flex-wrap gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => onChangeView(item.view)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-semibold transition-all",
                activeView === item.view
                  ? "bg-primary text-white shadow-md"
                  : "bg-background hover:bg-muted text-foreground/70 border hover:text-primary"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SubNav;
