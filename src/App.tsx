import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import OrbitalERP from "./pages/solutions/OrbitalERP.tsx";
import AiMlSolutions from "./pages/solutions/AiMlSolutions.tsx";
import EnterpriseApps from "./pages/solutions/EnterpriseApps.tsx";
import OrbitalLearnPage from "./pages/solutions/OrbitalLearnPage.tsx";
import TalentRepository from "./pages/solutions/TalentRepository.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Solution detail pages */}
          <Route path="/solutions/orbital-academic-erp" element={<OrbitalERP />} />
          <Route path="/solutions/ai-ml-solutions" element={<AiMlSolutions />} />
          <Route path="/solutions/enterprise-applications" element={<EnterpriseApps />} />
          <Route path="/solutions/orbital-learn" element={<OrbitalLearnPage />} />
          <Route path="/solutions/talent-repository" element={<TalentRepository />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
