import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

interface Photo {
  id: string;
  url?: string;
  caption?: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <Card
          key={photo.id}
          className="aspect-square overflow-hidden hover-elevate transition-all duration-200 cursor-pointer group"
          data-testid={`card-photo-${photo.id}`}
        >
          {photo.url ? (
            <img
              src={photo.url}
              alt={photo.caption || "照片"}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="w-full h-full bg-accent flex items-center justify-center">
              <Camera className="w-8 h-8 text-muted-foreground" />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
