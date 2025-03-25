
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, ArrowRight, Mic, FileText, BarChart3, Users, Zap, Bot, Star, PlayCircle } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`py-20 px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent">
            AI Meeting Assistant That Takes Notes For You
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Let our AI join your meetings, transcribe conversations, and generate actionable insights for your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-secondary text-white gap-2">
              <Link to="/dashboard">
                <span>Get Started Free</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="#demo">
                <PlayCircle className="h-4 w-4" />
                <span>Watch Demo</span>
              </Link>
            </Button>
          </div>
          <div className="mt-10 shadow-xl rounded-xl overflow-hidden border border-muted">
            <img 
              src="/placeholder.svg" 
              alt="ConvoInsight Pro Dashboard" 
              className="w-full h-auto"
              width={1200}
              height={675}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Your Meetings</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your conversations into valuable insights across departments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Card className="bg-card hover-lift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <Mic className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automatic Transcription</h3>
              <p className="text-muted-foreground">
                Our AI joins your meetings and transcribes every word with high accuracy in real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover-lift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Summaries</h3>
              <p className="text-muted-foreground">
                Get concise summaries that capture key points, action items, and decisions from your meetings.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover-lift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Gain insights into meeting patterns, speaker contributions, and topic trends over time.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover-lift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Meeting Bots</h3>
              <p className="text-muted-foreground">
                Our bots seamlessly join your scheduled meetings across Zoom, Teams, Google Meet, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover-lift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Share transcripts, collaborate with comments, and organize your meeting knowledge base.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover-lift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom AI Plugins</h3>
              <p className="text-muted-foreground">
                Deploy specialized AI applications for industry-specific insights and analysis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Department Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tailored Solutions for Every Department</h2>
          
          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="hr">Human Resources</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            <TabsContent value="sales" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-department-sales">Sales Intelligence</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-sales mt-1 flex-shrink-0" />
                      <span>Competitor analysis from sales calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-sales mt-1 flex-shrink-0" />
                      <span>Customer sentiment tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-sales mt-1 flex-shrink-0" />
                      <span>Opportunity and risk identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-sales mt-1 flex-shrink-0" />
                      <span>Sales performance analytics</span>
                    </li>
                  </ul>
                  <Button className="mt-6 bg-department-sales hover:bg-department-sales/80">Learn More</Button>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Sales Intelligence Dashboard" 
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="hr" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-department-hr">HR Insights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-hr mt-1 flex-shrink-0" />
                      <span>One-on-one meeting summaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-hr mt-1 flex-shrink-0" />
                      <span>Employee engagement tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-hr mt-1 flex-shrink-0" />
                      <span>Performance review documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-hr mt-1 flex-shrink-0" />
                      <span>Team dynamics analysis</span>
                    </li>
                  </ul>
                  <Button className="mt-6 bg-department-hr hover:bg-department-hr/80">Learn More</Button>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="HR Analytics Dashboard" 
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="research" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-department-research">Research Tools</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-research mt-1 flex-shrink-0" />
                      <span>Interview transcription and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-research mt-1 flex-shrink-0" />
                      <span>Pattern recognition in conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-research mt-1 flex-shrink-0" />
                      <span>Research meeting summarization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-department-research mt-1 flex-shrink-0" />
                      <span>Automated data categorization</span>
                    </li>
                  </ul>
                  <Button className="mt-6 bg-department-research hover:bg-department-research/80">Learn More</Button>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Research Analytics Dashboard" 
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Innovative Teams</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how teams are transforming their meetings with ConvoInsight Pro
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">
                    "ConvoInsight Pro has revolutionized how our sales team handles client conversations. The automated transcription and competitor analysis have given us a competitive edge we didn't have before."
                  </p>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-muted-foreground">VP of Sales, TechCorp</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">
                    "Our HR team now has unprecedented insights into employee conversations. The one-on-one meeting summaries have helped us improve engagement and identify issues early."
                  </p>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-muted-foreground">HR Director, Global Innovations</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">
                    "The research tools in ConvoInsight Pro have transformed our interview process. We're able to analyze patterns and extract insights from conversations that we would have missed before."
                  </p>
                  <div>
                    <h4 className="font-semibold">Dr. Emily Rodriguez</h4>
                    <p className="text-muted-foreground">Research Lead, Innovation Labs</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Meetings?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of teams using ConvoInsight Pro to capture, analyze, and act on valuable conversation data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="gap-2 bg-white text-brand-primary hover:bg-white/90">
              <Link to="/dashboard">
                <span>Start Your Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/20">
              <Link to="/contact">
                <span>Schedule a Demo</span>
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a></li>
                <li><a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#sales" className="text-muted-foreground hover:text-foreground transition-colors">Sales</a></li>
                <li><a href="#hr" className="text-muted-foreground hover:text-foreground transition-colors">Human Resources</a></li>
                <li><a href="#research" className="text-muted-foreground hover:text-foreground transition-colors">Research</a></li>
                <li><a href="#custom" className="text-muted-foreground hover:text-foreground transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#compliance" className="text-muted-foreground hover:text-foreground transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ConvoInsight Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Update index.html for SEO */}
    </div>
  );
};

export default Index;
