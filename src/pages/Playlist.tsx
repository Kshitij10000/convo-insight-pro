
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListMusic, Plus, FolderPlus } from "lucide-react";

const Playlist = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Playlist</h1>
          <p className="text-muted-foreground mt-1">
            Organize and group your meetings into playlists
          </p>
        </div>
        <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
          <Plus className="h-4 w-4" />
          <span>Create Playlist</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <ListMusic className="h-5 w-5 mr-2 text-brand-primary" />
              Sales Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">0 meetings</p>
            <Button variant="outline" className="w-full mt-4 gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Meetings</span>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <ListMusic className="h-5 w-5 mr-2 text-department-hr" />
              HR Discussions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">0 meetings</p>
            <Button variant="outline" className="w-full mt-4 gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Meetings</span>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center text-lg text-muted-foreground">
              <FolderPlus className="h-5 w-5 mr-2" />
              Create New Playlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Group related meetings together</p>
            <Button variant="outline" className="w-full mt-4 gap-2">
              <Plus className="h-4 w-4" />
              <span>Create</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Playlist;
