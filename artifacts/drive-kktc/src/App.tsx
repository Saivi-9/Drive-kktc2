import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ThemeProvider } from '@/components/theme-provider';

import Home from '@/pages/home';
import RoutesPage from '@/pages/routes';
import RouteDetail from '@/pages/route-detail';
import ExplorePage from '@/pages/explore';
import AboutPage from '@/pages/about';
import ContactPage from '@/pages/contact';
import RouteFinder from '@/pages/route-finder';
import Planner from '@/pages/planner';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/routes" component={RoutesPage} />
        <Route path="/routes/:slug" component={RouteDetail} />
        <Route path="/finder" component={RouteFinder} />
        <Route path="/planner" component={Planner} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="drivekktc-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
