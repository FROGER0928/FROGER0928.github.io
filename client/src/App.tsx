import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import Works from "@/pages/Works";
import WorkDetail from "@/pages/WorkDetail";
import Diary from "@/pages/Diary";
import DiaryDetail from "@/pages/DiaryDetail";
import Life from "@/pages/Life";
import LifeDetail from "@/pages/LifeDetail";
import Photos from "@/pages/Photos";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/works/:slug" component={WorkDetail} />
      <Route path="/diary" component={Diary} />
      <Route path="/diary/:slug" component={DiaryDetail} />
      <Route path="/life" component={Life} />
      <Route path="/life/:slug" component={LifeDetail} />
      <Route path="/photos" component={Photos} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
        <div className="min-h-screen">
          <Navigation />
          <Router />
        </div>
        <Toaster />
      </TooltipProvider>
    
  );
}

export default App;
