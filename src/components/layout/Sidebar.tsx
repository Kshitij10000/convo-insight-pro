
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  Video,
  Activity,
  ListMusic,
  Users,
  Upload,
  Layers,
  Sparkles,
  Hash,
  BarChart2,
  UserPlus,
  Star,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  badge?: string;
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.aside
      initial={{ width: 240 }}
      animate={{ width: isCollapsed ? 80 : 240 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-sidebar h-screen sticky top-0 z-30 flex flex-col overflow-y-auto border-r border-sidebar-border"
    >
      <div className="p-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className={cn("flex items-center space-x-2", isCollapsed && "invisible")}
        >
          <div className="w-8 h-8 bg-brand-primary rounded-md flex items-center justify-center text-white font-bold text-xl">
            C
          </div>
          <span className="text-sidebar-foreground font-bold text-xl">ConvoAI</span>
        </motion.div>
        <button
          onClick={toggleSidebar}
          className="text-sidebar-foreground opacity-70 hover:opacity-100 transition-opacity"
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          )}
        </button>
      </div>

      <div className="mt-5 px-3 flex-1 space-y-1">
        <NavItem to="/" icon={Home} label="Home" />
        <NavItem to="/meetings" icon={Video} label="Meetings" />
        <NavItem to="/meeting-status" icon={Activity} label="Meeting Status" />
        <NavItem to="/playlist" icon={ListMusic} label="Playlist" />
        <NavItem to="/contacts" icon={Users} label="Contacts" />
        <NavItem to="/uploads" icon={Upload} label="Uploads" />
        
        <div className="pt-5 pb-2">
          <div className={`border-t border-sidebar-border ${isCollapsed ? 'mx-2' : 'mx-1'}`}></div>
        </div>
        
        <NavItem to="/integrations" icon={Layers} label="Integrations" badge="NEW" />
        <NavItem to="/ai-apps" icon={Sparkles} label="AI Apps" />
        <NavItem to="/topic-tracker" icon={Hash} label="Topic Tracker" />
        <NavItem to="/analytics" icon={BarChart2} label="Analytics" />
        
        <div className="pt-5 pb-2">
          <div className={`border-t border-sidebar-border ${isCollapsed ? 'mx-2' : 'mx-1'}`}></div>
        </div>
        
        <NavItem to="/team" icon={UserPlus} label="Team" />
        <NavItem to="/premium" icon={Star} label="Upgrade" />
        <NavItem to="/settings" icon={Settings} label="Settings" />
      </div>

      <div className="p-4 mt-auto">
        <div className="flex items-center space-x-2 bg-sidebar-accent rounded-lg p-2">
          <div className="h-8 w-8 rounded-full bg-brand-primary/80 flex items-center justify-center text-white">
            U
          </div>
          {!isCollapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="text-sidebar-foreground text-sm font-medium truncate">User Name</p>
              <p className="text-sidebar-foreground/60 text-xs truncate">user@example.com</p>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );

  function NavItem({ to, icon: Icon, label, badge }: NavItemProps) {
    const isActive = location.pathname === to || 
      (to !== "/" && location.pathname.startsWith(to));
    
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            "flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            isActive
              ? "bg-sidebar-accent text-sidebar-foreground"
              : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
          )
        }
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isCollapsed ? 8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={20} className={cn(isActive ? "text-brand-primary" : "text-sidebar-foreground/80")} />
        </motion.div>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: isCollapsed ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="flex-1"
          >
            {label}
          </motion.span>
        )}
        {badge && !isCollapsed && (
          <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-brand-primary text-white font-semibold">
            {badge}
          </span>
        )}
      </NavLink>
    );
  }
};

export default Sidebar;
