
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mic, Search, Video, Calendar, Upload, Clock, Filter } from "lucide-react";
import { motion } from "framer-motion";

const Meetings = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // This would be fetched from your API in a real application
  const sampleMeetings = [
    {
      id: 1,
      title: "Sales Team Weekly Sync",
      date: "Today at 10:30 AM",
      duration: "45 min",
      participants: ["John D.", "Sarah M.", "Robert K.", "+2 more"],
      status: "completed",
      category: "sales"
    },
    {
      id: 2,
      title: "Product Roadmap Planning",
      date: "Yesterday at 2:00 PM",
      duration: "60 min",
      participants: ["Emily L.", "Michael B.", "Jessica T."],
      status: "completed",
      category: "research"
    },
    {
      id: 3,
      title: "HR Performance Review",
      date: "Sep 15, 2023 at 11:00 AM",
      duration: "30 min",
      participants: ["David S.", "Anna P."],
      status: "completed",
      category: "hr"
    }
  ];

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
          <p className="text-muted-foreground mt-1">
            View and manage your meeting transcripts and insights
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>Schedule</span>
          </Button>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            <span>Upload</span>
          </Button>
          <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-medium transition-all hover-lift">
            <Mic className="h-4 w-4" />
            <span>Join Meeting</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="w-full sm:max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search meetings..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Button variant="outline" className="gap-2 whitespace-nowrap">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="uploaded">Uploaded</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          {sampleMeetings.length > 0 ? (
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {sampleMeetings.map((meeting) => (
                <motion.div
                  key={meeting.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover-lift transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div 
                            className={`h-10 w-10 rounded-md flex items-center justify-center 
                              ${meeting.category === 'sales' ? 'bg-department-sales/10 text-department-sales' : 
                                meeting.category === 'hr' ? 'bg-department-hr/10 text-department-hr' : 
                                'bg-department-research/10 text-department-research'}`}
                          >
                            <Video className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{meeting.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1">
                              <span>{meeting.date}</span>
                              <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {meeting.duration}
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">
                          {meeting.status === 'completed' ? 'Completed' : 'In Progress'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-sm text-muted-foreground">Participants:</span>
                        {meeting.participants.map((participant, index) => (
                          <Badge key={index} variant="secondary" className="font-normal">
                            {participant}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Button variant="outline" size="sm" className="text-xs">
                          View Transcript
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          View Summary
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          AI Insights
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="bg-muted/30 rounded-lg py-16 text-center">
              <h3 className="text-lg font-medium mb-2">No meetings found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                You haven't recorded or uploaded any meetings yet.
                Schedule your first meeting or upload a recording.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Meeting</span>
                </Button>
                <Button className="gap-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload Recording</span>
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
        <TabsContent value="calendar">
          <div className="bg-muted/30 rounded-lg py-16 text-center mt-6">
            <h3 className="text-lg font-medium mb-2">No calendar meetings</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Connect your calendar to automatically join and record meetings.
            </p>
            <Button className="gap-2">
              <Calendar className="h-4 w-4" />
              <span>Connect Calendar</span>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="uploaded">
          <div className="bg-muted/30 rounded-lg py-16 text-center mt-6">
            <h3 className="text-lg font-medium mb-2">No uploaded meetings</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Upload audio or video recordings to transcribe and analyze them.
            </p>
            <Button className="gap-2">
              <Upload className="h-4 w-4" />
              <span>Upload Recording</span>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="shared">
          <div className="bg-muted/30 rounded-lg py-16 text-center mt-6">
            <h3 className="text-lg font-medium mb-2">No shared meetings</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Meetings shared with you by teammates will appear here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Meetings;
