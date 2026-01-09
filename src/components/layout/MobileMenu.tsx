"use client";

import * as React from "react";
import { X, ChevronRight, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ViewState } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onChangeView: (view: ViewState) => void;
}

export function MobileMenu({ isOpen, onClose, onChangeView }: MobileMenuProps) {
  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    onClose();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden transition-all duration-300",
        isOpen ? "visible" : "invisible"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-[80%] max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 gap-6">
          <button
            onClick={() => handleNavClick("home")}
            className="text-lg font-medium text-foreground/80 hover:text-primary flex items-center justify-between border-b border-border/40 pb-4"
          >
            Home
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>
          <button
            onClick={() => handleNavClick("staff")}
            className="text-lg font-medium text-foreground/80 hover:text-primary flex items-center justify-between border-b border-border/40 pb-4"
          >
            Staff & Programs
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>
          <button
            onClick={() => handleNavClick("science-fair")}
            className="text-lg font-medium text-foreground/80 hover:text-primary flex items-center justify-between border-b border-border/40 pb-4"
          >
            Science Fair
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>
          <button
            onClick={() => handleNavClick("seaperch")}
            className="text-lg font-medium text-foreground/80 hover:text-primary flex items-center justify-between border-b border-border/40 pb-4"
          >
            SeaPerch
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick("home")}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
          >
            <Printer className="w-5 h-5" />
            Request 3D Print
          </button>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
