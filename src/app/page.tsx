"use client";

import * as React from "react";
import { useViewState, useMobileMenu } from "@/hooks";
import { Header, Footer, MobileMenu } from "@/components/layout";
import {
  HomeView,
  StaffView,
  AdvisoryView,
  ScienceFairView,
  SeaPerchView,
  ScholarsView,
} from "@/components/views";

export default function STEMCenterApp() {
  const { currentView, setCurrentView } = useViewState();
  const { isOpen, open, close } = useMobileMenu();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header
        currentView={currentView}
        onChangeView={setCurrentView}
        onMenuOpen={open}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={close}
        onChangeView={setCurrentView}
      />

      {/* Main Content */}
      <main className="flex-1">
        {currentView === "home" && <HomeView onChangeView={setCurrentView} />}
        {currentView === "staff" && <StaffView onChangeView={setCurrentView} />}
        {currentView === "advisory" && (
          <AdvisoryView onChangeView={setCurrentView} />
        )}
        {currentView === "science-fair" && (
          <ScienceFairView onChangeView={setCurrentView} />
        )}
        {currentView === "seaperch" && (
          <SeaPerchView onChangeView={setCurrentView} />
        )}
        {currentView === "scholars" && (
          <ScholarsView onChangeView={setCurrentView} />
        )}
      </main>

      {/* Footer */}
      <Footer onChangeView={setCurrentView} />
    </div>
  );
}
