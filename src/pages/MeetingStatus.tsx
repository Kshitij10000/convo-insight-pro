
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Zap, Calendar, RefreshCw } from "lucide-react";

const MeetingStatus = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meeting Status</h1>
          <p className="text-muted-foreground mt-1">
            Track the status of your scheduled and ongoing meetings
          </p>
        </div>
        <Button className="gap-2">
          <RefreshCw className="h-4 w-4" />
          <span>Refresh Status</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Activity className="h-5 w-5 mr-2 text-brand-primary" />
              Active Connections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-muted-foreground text-sm">No active connections</p>
            <Button variant="outline" className="w-full mt-4 gap-2">
              <Zap className="h-4 w-4" />
              <span>Join a Meeting</span>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Calendar className="h-5 w-5 mr-2 text-brand-primary" />
              Upcoming Scheduled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-muted-foreground text-sm">No upcoming meetings</p>
            <Button variant="outline" className="w-full mt-4 gap-2">
              <Calendar className="h-4 w-4" />
              <span>Connect Calendar</span>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Activity className="h-5 w-5 mr-2 text-brand-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-muted-foreground text-sm">No recent activity</p>
            <Button variant="outline" className="w-full mt-4">
              <span>View History</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 text-center mt-6">
        <h3 className="text-xl font-medium mb-2">No Active Meetings</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          When you join a meeting, its status and transcription progress will appear here.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>Schedule Meeting</span>
          </Button>
          <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
            <Zap className="h-4 w-4" />
            <span>Join Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingStatus;
