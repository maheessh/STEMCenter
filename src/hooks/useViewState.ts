"use client";

import { useState, useEffect, useCallback } from "react";
import type { ViewState } from "@/types";

interface UseViewStateOptions {
  initialView?: ViewState;
  scrollToTop?: boolean;
}

interface UseViewStateReturn {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
  isHome: boolean;
  goHome: () => void;
}

/**
 * Custom hook to manage view state with optional scroll-to-top behavior
 */
export function useViewState(options: UseViewStateOptions = {}): UseViewStateReturn {
  const { initialView = "home", scrollToTop = true } = options;
  const [currentView, setCurrentViewState] = useState<ViewState>(initialView);

  const setCurrentView = useCallback((view: ViewState) => {
    setCurrentViewState(view);
  }, []);

  const goHome = useCallback(() => {
    setCurrentViewState("home");
  }, []);

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentView, scrollToTop]);

  return {
    currentView,
    setCurrentView,
    isHome: currentView === "home",
    goHome,
  };
}

export default useViewState;
