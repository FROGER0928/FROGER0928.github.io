import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
}

export default function WorkCard({ id, title, description, image, tags }: WorkCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-200 cursor-pointer group" data-testid={`card-work-${id}`}>
      {image && (
        <div className="aspect-video bg-accent overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg mb-2" data-testid={`text-work-title-${id}`}>{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full" data-testid={`badge-tag-${tag}`}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
