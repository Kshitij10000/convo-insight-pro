
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileUp, File } from "lucide-react";

const Uploads = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Uploads</h1>
          <p className="text-muted-foreground mt-1">
            Upload audio and video recordings for transcription
          </p>
        </div>
        <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
          <FileUp className="h-4 w-4" />
          <span>Upload File</span>
        </Button>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 text-center mt-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
          <File className="h-8 w-8 text-brand-primary" />
        </div>
        <h3 className="text-xl font-medium mb-2">No Uploads Yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Upload audio or video files to transcribe and analyze them.
          Supported formats: MP3, MP4, WAV, M4A.
        </p>
        <Button className="gap-2 bg-brand-primary hover:bg-brand-secondary text-white">
          <Upload className="h-4 w-4" />
          <span>Upload Recording</span>
        </Button>
      </div>
    </div>
  );
};

export default Uploads;
