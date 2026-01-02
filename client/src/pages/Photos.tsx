import PhotoGrid from "@/components/PhotoGrid";
import { Camera } from "lucide-react";
import { photos } from "@/data/content";

export default function Photos() {

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl">我的照片</h1>
              <p className="text-sm text-muted-foreground mt-1">記錄美好時光</p>
            </div>
          </div>
        </div>

        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
}
