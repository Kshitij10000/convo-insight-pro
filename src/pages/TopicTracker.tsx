
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hash, Plus, BarChart, MessageSquare, Clock } from "lucide-react";

const TopicTracker = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // This would be fetched from your API in a real application
  const sampleTopics = [
    {
      id: 1,
      name: "Product Roadmap",
      department: "Research",
      mentions: 28,
      lastDiscussed: "2 days ago",
      sentiment: "positive",
      color: "bg-department-research/10",
      textColor: "text-department-research"
    },
    {
      id: 2,
      name: "Competitive Analysis",
      department: "Sales",
      mentions: 15,
      lastDiscussed: "1 day ago",
      sentiment: "neutral",
      color: "bg-department-sales/10",
      textColor: "text-department-sales"
    },
    {
      id: 3,
      name: "Employee Feedback",
      department: "HR",
      mentions: 22,
      lastDiscussed: "3 days ago",
      sentiment: "mixed",
      color: "bg-department-hr/10",
      textColor: "text-department-hr"
    }
  ];

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Topic Tracker</h1>
          <p className="text-muted-foreground mt-1">
            Monitor important topics across all your meetings
          </p>
        </div>
        <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
          <Plus className="h-4 w-4" />
          <span>Create Topic</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Hash className="h-5 w-5 mr-2 text-brand-primary" />
              Total Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-muted-foreground text-sm">
              Tracking 3 topics
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-department-sales" />
              Mentions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65</div>
            <p className="text-muted-foreground text-sm">
              Total topic mentions
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-department-hr" />
              Most Discussed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Product Roadmap</div>
            <p className="text-muted-foreground text-sm">
              28 mentions
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Clock className="h-5 w-5 mr-2 text-department-research" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1 day ago</div>
            <p className="text-muted-foreground text-sm">
              Last topic discussion
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Your Topics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleTopics.map((topic) => (
          <Card key={topic.id} className="hover-lift transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-md flex items-center justify-center ${topic.color} ${topic.textColor}`}>
                    <Hash className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{topic.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{topic.department}</Badge>
                      <span className="text-sm text-muted-foreground">
                        Last discussed: {topic.lastDiscussed}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-sm text-muted-foreground">Mentions</p>
                  <p className="text-lg font-semibold">{topic.mentions}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sentiment</p>
                  <Badge variant={
                    topic.sentiment === "positive" ? "default" :
                    topic.sentiment === "negative" ? "destructive" : "outline"
                  }>
                    {topic.sentiment}
                  </Badge>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="hover-lift transition-all duration-300 border-dashed">
          <CardHeader className="pb-2">
            <div className="flex justify-center items-center h-24">
              <div className="text-center">
                <div className="mx-auto h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-2">
                  <Plus className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg text-muted-foreground">Add New Topic</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Create Topic</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TopicTracker;
