
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

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
