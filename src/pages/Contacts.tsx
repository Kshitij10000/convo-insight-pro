
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Import } from "lucide-react";

const Contacts = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground mt-1">
            Manage your meeting participants and contacts
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-2">
            <Import className="h-4 w-4" />
            <span>Import</span>
          </Button>
          <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
            <UserPlus className="h-4 w-4" />
            <span>Add Contact</span>
          </Button>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 text-center mt-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
          <Users className="h-8 w-8 text-brand-primary" />
        </div>
        <h3 className="text-xl font-medium mb-2">No Contacts Yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Add contacts manually or import them from your address book or CRM.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="gap-2">
            <Import className="h-4 w-4" />
            <span>Import Contacts</span>
          </Button>
          <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
            <UserPlus className="h-4 w-4" />
            <span>Add Contact</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
