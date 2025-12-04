import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Staff from "./pages/Staff";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import SeaPerch from "./pages/SeaPerch";
import ScienceFair from "./pages/ScienceFair";
import STEMScholars from "./pages/STEMScholars";
import Hardware from "./pages/Hardware";
import Robots from "./pages/Robots";
import VirtualReality from "./pages/VirtualReality";
import Print3D from "./pages/Print3D";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
          <Route path="/seaperch" element={<SeaPerch />} />
          <Route path="/science-fair" element={<ScienceFair />} />
          <Route path="/stem-scholars" element={<STEMScholars />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/vr" element={<VirtualReality />} />
          <Route path="/3d-print" element={<Print3D />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
