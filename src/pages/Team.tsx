
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Users, Mail, Copy, Check } from "lucide-react";

const Team = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const copyInviteLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team</h1>
          <p className="text-muted-foreground mt-1">
            Manage your team members and permissions
          </p>
        </div>
        <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
          <UserPlus className="h-4 w-4" />
          <span>Invite Members</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="h-5 w-5 mr-2 text-brand-primary" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-muted-foreground text-sm">
              1 active user
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Mail className="h-5 w-5 mr-2 text-brand-primary" />
              Pending Invites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-muted-foreground text-sm">
              No pending invites
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300 col-span-1 md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="h-5 w-5 mr-2 text-brand-primary" />
              Workspace
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-medium truncate">ConvoAI Workspace</div>
            <Badge className="mt-1 bg-brand-primary text-white">Free Plan</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-brand-primary/5 to-brand-light/5 rounded-xl p-6 mt-6 border border-brand-primary/10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:flex-1">
            <h2 className="text-xl font-semibold mb-2">Invite Team Members</h2>
            <p className="text-muted-foreground">
              Share this link with your team members to invite them to your workspace
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex">
              <div className="bg-background border rounded-l-md py-2 px-4 flex-1 text-sm truncate">
                https://convoai.app/invite/abc123
              </div>
              <Button 
                variant="default" 
                className="rounded-l-none"
                onClick={copyInviteLink}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md border">
        <div className="flex items-center justify-between border-b p-4">
          <div className="font-medium">Team Members (1)</div>
          <Button variant="outline" size="sm">Manage Roles</Button>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-medium">
                YN
              </div>
              <div>
                <div className="font-medium">Your Name</div>
                <div className="text-sm text-muted-foreground">you@example.com</div>
              </div>
            </div>
            <Badge>Admin</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
