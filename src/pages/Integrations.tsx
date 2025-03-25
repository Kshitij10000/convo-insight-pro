
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Plus, Calendar, MessageSquare, Video, Headphones } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Integrations = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const integrationCategories = [
    {
      id: "calendar",
      title: "Calendar",
      icon: <Calendar className="h-5 w-5" />,
      description: "Connect your calendar to auto-join meetings",
      integrations: ["Google Calendar", "Microsoft Outlook", "Apple Calendar"],
      color: "bg-brand-primary/10 text-brand-primary"
    },
    {
      id: "meeting",
      title: "Meeting Platforms",
      icon: <Video className="h-5 w-5" />,
      description: "Connect to meeting platforms",
      integrations: ["Zoom", "Microsoft Teams", "Google Meet", "Webex"],
      color: "bg-department-sales/10 text-department-sales"
    },
    {
      id: "communication",
      title: "Communication",
      icon: <MessageSquare className="h-5 w-5" />,
      description: "Connect with communication tools",
      integrations: ["Slack", "Discord", "Microsoft Teams"],
      color: "bg-department-hr/10 text-department-hr"
    },
    {
      id: "crm",
      title: "CRM & Support",
      icon: <Headphones className="h-5 w-5" />,
      description: "Connect with CRM and support tools",
      integrations: ["Salesforce", "HubSpot", "Zendesk"],
      color: "bg-department-research/10 text-department-research"
    }
  ];

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Integrations
            <Badge className="ml-2 bg-brand-primary text-white">NEW</Badge>
          </h1>
          <p className="text-muted-foreground mt-1">
            Connect with your favorite tools and services
          </p>
        </div>
        <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
          <Plus className="h-4 w-4" />
          <span>Add Integration</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrationCategories.map((category) => (
          <Card key={category.id} className="hover-lift transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-md flex items-center justify-center ${category.color}`}>
                  {category.icon}
                </div>
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.integrations.map((integration, index) => (
                  <Badge key={index} variant="secondary" className="font-normal">
                    {integration}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" className="w-full gap-2">
                <Plus className="h-4 w-4" />
                <span>Connect</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-brand-primary/5 to-brand-light/5 rounded-xl p-6 mt-6 border border-brand-primary/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-md bg-brand-primary/10 flex items-center justify-center">
              <Layers className="h-6 w-6 text-brand-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">API Access</h2>
              <p className="text-muted-foreground">Connect your own applications using our API</p>
            </div>
          </div>
          <Button variant="outline" className="whitespace-nowrap gap-2 border-brand-primary/20 hover:border-brand-primary/50">
            <span>View API Docs</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
