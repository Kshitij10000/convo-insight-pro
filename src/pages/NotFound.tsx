
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
          <span className="text-2xl font-bold text-brand-primary">404</span>
        </div>
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
          Please check the URL or return to the dashboard.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button variant="outline" asChild className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </Link>
          </Button>
          <Button asChild className="gap-2 bg-brand-primary hover:bg-brand-secondary">
            <Link to="/">
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
