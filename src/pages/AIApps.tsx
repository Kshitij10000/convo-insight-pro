
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle, BarChart, LineChart, Mail, Brain, PieChart, User, Building, DollarSign, AlertTriangle, Lightbulb, Rocket, Presentation } from "lucide-react";
import { motion } from "framer-motion";

interface AppCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  color: string;
  isEnabled?: boolean;
}

const AIApps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [enabledApps, setEnabledApps] = useState<string[]>([]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleToggleApp = (appId: string) => {
    setEnabledApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId) 
        : [...prev, appId]
    );
  };

  const appData: AppCard[] = [
    {
      id: "sales-budget",
      title: "BANT Sales Analyzer",
      description: "Extract Budget, Authority, Need and Timeline information from sales calls",
      icon: <DollarSign className="h-5 w-5" />,
      category: "sales",
      color: "bg-department-sales/10 text-department-sales",
    },
    {
      id: "competitor-analysis",
      title: "Competitor Analysis",
      description: "Compare competitor offerings mentioned during meetings",
      icon: <Building className="h-5 w-5" />,
      category: "sales",
      color: "bg-department-sales/10 text-department-sales",
    },
    {
      id: "risk-analyzer",
      title: "Risk Analyzer",
      description: "Identify potential risks mentioned during meetings",
      icon: <AlertTriangle className="h-5 w-5" />,
      category: "sales",
      color: "bg-department-sales/10 text-department-sales",
    },
    {
      id: "hr-feedback",
      title: "HR Feedback Analyzer",
      description: "Summarize 1:1 meetings highlighting feedback, concerns and action items",
      icon: <User className="h-5 w-5" />,
      category: "hr",
      color: "bg-department-hr/10 text-department-hr",
    },
    {
      id: "performance-metrics",
      title: "Performance Insights",
      description: "Extract performance metrics and improvement areas from reviews",
      icon: <LineChart className="h-5 w-5" />,
      category: "hr",
      color: "bg-department-hr/10 text-department-hr",
    },
    {
      id: "research-insights",
      title: "Research Insights",
      description: "Extract key findings and research directions from team discussions",
      icon: <Lightbulb className="h-5 w-5" />,
      category: "research",
      color: "bg-department-research/10 text-department-research",
    },
    {
      id: "data-visualization",
      title: "Data Visualization Generator",
      description: "Generate visualization recommendations based on discussed data",
      icon: <PieChart className="h-5 w-5" />,
      category: "research",
      color: "bg-department-research/10 text-department-research",
    },
    {
      id: "marketing-campaign",
      title: "Campaign Analyzer",
      description: "Extract campaign metrics and improvement suggestions",
      icon: <Presentation className="h-5 w-5" />,
      category: "marketing",
      color: "bg-department-marketing/10 text-department-marketing",
    },
    {
      id: "content-ideas",
      title: "Content Idea Generator",
      description: "Generate content ideas based on meeting discussions",
      icon: <Rocket className="h-5 w-5" />,
      category: "marketing",
      color: "bg-department-marketing/10 text-department-marketing",
    },
  ];

  const filteredApps = appData.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         app.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === "all" || app.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Apps</h1>
          <p className="text-muted-foreground mt-1">
            Discover and enable AI-powered apps for specialized meeting insights
          </p>
        </div>
        <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-medium transition-all hover-lift">
          <PlusCircle className="h-4 w-4" />
          <span>Create Custom App</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Brain className="h-5 w-5 mr-2 text-brand-primary" />
              AI Apps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              {enabledApps.length} active apps
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-department-research" />
              Insights Generated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              0 insights from meetings
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Mail className="h-5 w-5 mr-2 text-department-hr" />
              Automatic Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Configure email reports
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Rocket className="h-5 w-5 mr-2 text-department-sales" />
              API Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              0 API calls this month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search apps..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs 
          defaultValue="all" 
          className="w-full sm:w-auto"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList>
            <TabsTrigger value="all">All Apps</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="hr">HR</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="hover-lift transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`h-10 w-10 rounded-md flex items-center justify-center ${app.color}`}>
                      {app.icon}
                    </div>
                    <Badge variant={enabledApps.includes(app.id) ? "default" : "outline"}>
                      {enabledApps.includes(app.id) ? "Enabled" : "Disabled"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-4">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-2">
                  <Button 
                    variant={enabledApps.includes(app.id) ? "default" : "outline"} 
                    onClick={() => handleToggleApp(app.id)}
                    className="w-full hover-lift"
                  >
                    {enabledApps.includes(app.id) ? "Disable" : "Enable"} App
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full bg-muted/30 rounded-lg py-16 text-center">
            <h3 className="text-lg font-medium mb-2">No apps found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              No apps match your current search and filter criteria.
              Try adjusting your search or browse all apps.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setActiveTab("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AIApps;
