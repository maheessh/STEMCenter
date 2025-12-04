"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="w-full border-b bg-muted/30 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between py-2 h-10">
          <div className="text-muted-foreground">STEM Center @ IHub</div>
          <div className="flex items-center gap-6 text-muted-foreground">
            <Link href="/#contact" className="hover:text-foreground">Hardware & Robots</Link>
            <Link href="/#explore" className="hover:text-foreground">3D Print</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container mx-auto px-4 flex h-14 items-center justify-between sm:h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-primary" />
            <span className="text-base font-semibold tracking-tight md:text-lg">
              Southeastern Northshore STEM Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/#explore" className="hover:text-primary transition-colors">Explore</Link>
            <Link href="/#events" className="hover:text-primary transition-colors">Events</Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 shadow-lg absolute w-full">
            <Link href="/#about" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary">About</Link>
            <Link href="/#explore" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary">Explore</Link>
            <Link href="/#events" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary">Events</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary">Contact</Link>
          </div>
        )}
      </header>
    </>
  );
}