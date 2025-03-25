
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    // Add a small delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // For landing page, don't show sidebar and header
  if (isLandingPage) {
    return <Outlet />;
  }

  return (
    <div className={`min-h-screen flex w-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
