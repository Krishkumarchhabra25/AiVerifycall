import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WhyVerifyCall from "./pages/WhyVerifyCall";
import HowItWorks from "./pages/HowItWorks";
import ForOrganizations from "./pages/ForOrganization";
import ScamAlerts from "./pages/ScamAlerts";
import TheCompany from "./pages/TheCompany";
import Index from "./pages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
            <Route path="/why-verifycall" element={<WhyVerifyCall />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/for-organizations" element={<ForOrganizations />} />
            <Route path="/scam-alerts" element={<ScamAlerts />} />
            <Route path="/the-company" element={<TheCompany />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
  </QueryClientProvider>
);

export default App;
