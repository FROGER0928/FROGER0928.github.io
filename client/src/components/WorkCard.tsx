import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Work } from "@/types/content";

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={`/works/${work.slug}`}>
      <Card className="overflow-hidden hover-elevate transition-all duration-200 cursor-pointer group" data-testid={`card-work-${work.id}`}>
        {work.imageUrl && (
          <div className="aspect-video bg-accent overflow-hidden">
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="font-heading font-semibold text-lg mb-2" data-testid={`text-work-title-${work.id}`}>{work.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{work.description}</p>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full" data-testid={`badge-tag-${tag}`}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
