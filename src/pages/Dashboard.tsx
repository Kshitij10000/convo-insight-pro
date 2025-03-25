
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Calendar, MessageSquare, Check, FileText, Users, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back to your AI-powered meeting assistant
          </p>
        </div>
        <Button size="lg" className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-medium transition-all hover-lift">
          <Mic className="h-4 w-4" />
          <span>Add to live meeting</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-brand-primary" />
              Upcoming Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-lg py-8 text-center">
              <p className="text-muted-foreground font-medium mb-1">No meetings in the next 2 days</p>
              <p className="text-sm text-muted-foreground">
                Schedule a meeting or transcribe a live meeting
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-department-sales" />
              Meeting Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b pb-3">
                <div className="h-8 w-8 bg-department-sales/10 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-department-sales" />
                </div>
                <div>
                  <p className="text-sm font-medium">Action Items</p>
                  <p className="text-xs text-muted-foreground">0 pending tasks</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-department-hr/10 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-department-hr" />
                </div>
                <div>
                  <p className="text-sm font-medium">Meeting Summary</p>
                  <p className="text-xs text-muted-foreground">View recent summaries</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="h-5 w-5 mr-2 text-department-research" />
              Team Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-lg py-8 text-center">
              <p className="text-muted-foreground font-medium mb-1">No recent team activity</p>
              <p className="text-sm text-muted-foreground">
                Invite teammates to see their activity
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="my-feed" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
            <TabsTrigger value="my-feed">My Feed</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="ai-apps">AI Apps</TabsTrigger>
          </TabsList>
          <TabsContent value="my-feed">
            <div className="bg-muted/30 rounded-lg py-16 text-center">
              <h3 className="text-lg font-medium mb-2">Your feed is empty</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Schedule your first meeting or join a live meeting to see
                transcripts and insights here.
              </p>
              <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-medium transition-all hover-lift">
                <Calendar className="h-4 w-4" />
                <span>Schedule Meeting</span>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="tasks">
            <div className="bg-muted/30 rounded-lg py-16 text-center">
              <h3 className="text-lg font-medium mb-2">No tasks yet</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Tasks are automatically generated from your meetings.
                Join a meeting to generate tasks.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="ai-apps">
            <div className="bg-muted/30 rounded-lg py-16 text-center">
              <h3 className="text-lg font-medium mb-2">Discover AI Apps</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Explore AI-powered apps to get deeper insights from your meetings.
              </p>
              <Button className="gap-2">
                <span>Browse AI Apps</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-gradient-to-r from-brand-primary/5 to-brand-light/5 rounded-xl p-6 mt-6 border border-brand-primary/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold">ConvoAI Notaker</h2>
            <p className="text-muted-foreground mt-1">
              Auto-join meetings and get AI-powered insights
            </p>
          </div>
          <Button variant="outline" className="gap-2 border-brand-primary/20 hover:border-brand-primary/50 hover-lift">
            <Mic className="h-4 w-4 text-brand-primary" />
            <span>Configure Settings</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 bg-brand-primary/10 rounded-full flex items-center justify-center mt-1">
              <Check className="h-3 w-3 text-brand-primary" />
            </div>
            <div>
              <p className="font-medium">Auto-join calendar meetings</p>
              <p className="text-sm text-muted-foreground">For meetings with web-conf link</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 bg-brand-primary/10 rounded-full flex items-center justify-center mt-1">
              <Check className="h-3 w-3 text-brand-primary" />
            </div>
            <div>
              <p className="font-medium">Send email recap</p>
              <p className="text-sm text-muted-foreground">To everyone on the invite</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 bg-brand-primary/10 rounded-full flex items-center justify-center mt-1">
              <Check className="h-3 w-3 text-brand-primary" />
            </div>
            <div>
              <p className="font-medium">Meeting language</p>
              <p className="text-sm text-muted-foreground">English (Default)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
