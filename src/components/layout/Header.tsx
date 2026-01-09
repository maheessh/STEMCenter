"use client";

import * as React from "react";
import { Menu, Printer, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks";
import type { ViewState } from "@/types";
import { Logo } from "./Logo";
import { Container } from "@/components/ui";

interface HeaderProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  onMenuOpen: () => void;
}

export function Header({ currentView, onChangeView, onMenuOpen }: HeaderProps) {
  const scrolled = useScrolled(20);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-muted/50 border-b text-xs md:text-sm text-muted-foreground">
        <Container className="flex justify-between items-center h-10">
          <span className="font-medium">STEM Center @ IHub</span>
          <div className="flex gap-4">
            <button
              onClick={() => onChangeView("hardware")}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Cpu className="w-3 h-3" /> Hardware
            </button>
            <button
              onClick={() => onChangeView("home")}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Printer className="w-3 h-3" /> 3D Print
            </button>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-sm"
            : "bg-background/95 backdrop-blur"
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onChangeView("home")}
            className="flex items-center gap-3 group text-left"
          >
            <Logo />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none tracking-tight group-hover:text-primary transition-colors">
                Southeastern
              </span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Northshore STEM Center
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => onChangeView("home")}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors",
                currentView === "home" && "text-primary font-bold"
              )}
            >
              Home
            </button>
            <button
              onClick={() => onChangeView("staff")}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors",
                currentView !== "home" && "text-primary font-bold"
              )}
            >
              Explore
            </button>
            <button
              onClick={() => onChangeView("home")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => onChangeView("home")}
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 rounded-full transition-all shadow-md font-semibold hover:shadow-lg hover:-translate-y-0.5"
            >
              Request Print
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuOpen}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </Container>
      </header>
    </>
  );
}

export default Header;
