
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Meetings from "./pages/Meetings";
import MeetingStatus from "./pages/MeetingStatus";
import Playlist from "./pages/Playlist";
import Contacts from "./pages/Contacts";
import Uploads from "./pages/Uploads";
import Integrations from "./pages/Integrations";
import AIApps from "./pages/AIApps";
import TopicTracker from "./pages/TopicTracker";
import Analytics from "./pages/Analytics";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SidebarProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="meetings" element={<Meetings />} />
              <Route path="meeting-status" element={<MeetingStatus />} />
              <Route path="playlist" element={<Playlist />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="uploads" element={<Uploads />} />
              <Route path="integrations" element={<Integrations />} />
              <Route path="ai-apps" element={<AIApps />} />
              <Route path="topic-tracker" element={<TopicTracker />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="team" element={<Team />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
