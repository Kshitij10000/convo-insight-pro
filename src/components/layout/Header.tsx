
import { Button } from "@/components/ui/button";
import { Search, Bell, Plus, Gift } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center justify-between p-4">
        <div className="flex-1 max-w-2xl">
          <div className={`relative transition-all ${isSearchFocused ? 'scale-105' : 'scale-100'}`}>
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" 
            />
            <Input
              type="search"
              placeholder="Search across meetings..."
              className="pl-10 pr-4 h-10 bg-background border border-input/80 focus:border-primary rounded-full"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 ml-2">
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground hover:bg-accent">
            <Bell className="h-5 w-5" />
          </Button>

          <Button variant="outline" className="gap-2 font-medium text-sm group hover-lift">
            <Gift className="h-4 w-4 text-brand-primary group-hover:animate-pulse" />
            <span>Get AI Credits</span>
          </Button>

          <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-medium hover-lift transition-all duration-300">
            <span>Invite Teammates</span>
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground hover:bg-accent">
            <Plus className="h-5 w-5" />
          </Button>

          <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-white ml-1">
            <span className="text-sm font-medium">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
