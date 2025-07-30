import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WhyVerifyCall from "./pages/WhyVerifyCall";
import HowItWorks from "./pages/HowItWorks";

import Index from "./pages";
import ForOrganisations from "./pages/ForOrganisations";
import ScamAlertsSection from "./pages/ScamAlerts";
import CompanySection from "./pages/Company";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
            <Route path="/why-verifycall" element={<WhyVerifyCall />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/for-organizations" element={<ForOrganisations />} />
            <Route path="/scam-alerts" element={<ScamAlertsSection />} />
            <Route path="/scam-alerts" element={<CompanySection />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
  </QueryClientProvider>
);

export default App;
