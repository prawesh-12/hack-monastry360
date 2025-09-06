import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <div className="text-8xl font-bold text-monastery-gold mb-4">404</div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Sacred Path Not Found</h1>
            <p className="text-muted-foreground">
              The monastery path you're seeking doesn't exist in our digital realm. 
              Let us guide you back to the sacred grounds.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="monastery" className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </Button>
            
            <Button asChild variant="heritage" className="gap-2" onClick={() => window.history.back()}>
              <span>
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </span>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Or explore our sacred sites:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <Link to="/map" className="text-monastery-gold hover:underline">Interactive Map</Link>
              <span>•</span>
              <Link to="/tour" className="text-monastery-gold hover:underline">Virtual Tours</Link>
              <span>•</span>
              <Link to="/archive" className="text-monastery-gold hover:underline">Digital Archive</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;