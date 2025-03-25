
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
import { Clock, BarChart2, PieChart as PieChartIcon, Users, MessageCircle, CalendarDays, Activity } from "lucide-react";

const COLORS = ['#6C5CE7', '#5A45E6', '#8A7BFF', '#A398FF', '#483D9B'];
const DEPARTMENT_COLORS = {
  sales: '#F97316',
  hr: '#EC4899',
  research: '#3B82F6',
  marketing: '#10B981'
};

// Mock data
const meetingData = [
  { name: 'Mon', meetings: 4 },
  { name: 'Tue', meetings: 3 },
  { name: 'Wed', meetings: 5 },
  { name: 'Thu', meetings: 2 },
  { name: 'Fri', meetings: 6 },
  { name: 'Sat', meetings: 1 },
  { name: 'Sun', meetings: 0 },
];

const durationData = [
  { name: 'Mon', minutes: 120 },
  { name: 'Tue', minutes: 90 },
  { name: 'Wed', minutes: 150 },
  { name: 'Thu', minutes: 60 },
  { name: 'Fri', minutes: 180 },
  { name: 'Sat', minutes: 30 },
  { name: 'Sun', minutes: 0 },
];

const categoryData = [
  { name: 'Sales', value: 35 },
  { name: 'HR', value: 20 },
  { name: 'Research', value: 25 },
  { name: 'Marketing', value: 15 },
  { name: 'Other', value: 5 },
];

const participantData = [
  { name: 'Week 1', participants: 12 },
  { name: 'Week 2', participants: 18 },
  { name: 'Week 3', participants: 15 },
  { name: 'Week 4', participants: 25 },
];

const Analytics = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("week");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Get insights from your meetings and conversations
          </p>
        </div>
        <Select defaultValue={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Last 24 hours</SelectItem>
            <SelectItem value="week">Last 7 days</SelectItem>
            <SelectItem value="month">Last 30 days</SelectItem>
            <SelectItem value="quarter">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <BarChart2 className="h-5 w-5 mr-2 text-brand-primary" />
              Total Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21</div>
            <p className="text-muted-foreground text-sm">
              +14% from last {timeRange}
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Clock className="h-5 w-5 mr-2 text-department-sales" />
              Hours Transcribed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10.5</div>
            <p className="text-muted-foreground text-sm">
              +6% from last {timeRange}
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="h-5 w-5 mr-2 text-department-hr" />
              Participants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43</div>
            <p className="text-muted-foreground text-sm">
              +28% from last {timeRange}
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-department-research" />
              Insights Generated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-muted-foreground text-sm">
              +32% from last {timeRange}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="participants">Participants</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-2 text-brand-primary" />
                  Meeting Frequency
                </CardTitle>
                <CardDescription>
                  Number of meetings per day
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={meetingData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '8px',
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                          border: 'none'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="meetings" name="Meetings" fill="#6C5CE7" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChartIcon className="h-5 w-5 mr-2 text-brand-primary" />
                  Meeting Categories
                </CardTitle>
                <CardDescription>
                  Distribution of meetings by department
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value} meetings`, 'Count']}
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '8px',
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                          border: 'none'
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="meetings" className="space-y-4">
          <Card className="hover-lift transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-brand-primary" />
                Meeting Duration
              </CardTitle>
              <CardDescription>
                Total minutes spent in meetings per day
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={durationData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`${value} minutes`, 'Duration']}
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        border: 'none'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="minutes" name="Minutes" fill="#5A45E6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="departments" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-department-sales" />
                  Sales Department
                </CardTitle>
                <CardDescription>
                  Meeting metrics for Sales team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Meetings</p>
                    <p className="text-2xl font-semibold">8</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-2xl font-semibold">3.5h</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Participants</p>
                    <p className="text-2xl font-semibold">12</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Insights</p>
                    <p className="text-2xl font-semibold">24</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Top Topics</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span>Competitor Analysis</span>
                      <span className="text-muted-foreground">42%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-department-sales h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span>Sales Strategy</span>
                      <span className="text-muted-foreground">35%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-department-sales h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span>Client Feedback</span>
                      <span className="text-muted-foreground">23%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-department-sales h-2 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-department-hr" />
                  HR Department
                </CardTitle>
                <CardDescription>
                  Meeting metrics for HR team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Meetings</p>
                    <p className="text-2xl font-semibold">6</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-2xl font-semibold">2.8h</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Participants</p>
                    <p className="text-2xl font-semibold">9</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Insights</p>
                    <p className="text-2xl font-semibold">18</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Top Topics</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span>Performance Reviews</span>
                      <span className="text-muted-foreground">45%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-department-hr h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span>Team Feedback</span>
                      <span className="text-muted-foreground">30%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-department-hr h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span>Hiring Plans</span>
                      <span className="text-muted-foreground">25%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-department-hr h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="participants" className="space-y-4">
          <Card className="hover-lift transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-brand-primary" />
                Participant Growth
              </CardTitle>
              <CardDescription>
                Unique participants in meetings over time
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={participantData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        border: 'none'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="participants" 
                      name="Participants" 
                      stroke="#6C5CE7" 
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
