import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { LucideIcon, Book, Users, UtensilsCrossed, Plane, Music } from "lucide-react";
import { Link } from "wouter";
import type { Life } from "@/types/content";

interface LifeCardProps {
  life: Life;
}

const categoryConfig: Record<string, { icon: LucideIcon; color: string; label: string }> = {
  study: { icon: Book, color: "text-blue-500", label: "學習" },
  friends: { icon: Users, color: "text-green-500", label: "朋友" },
  food: { icon: UtensilsCrossed, color: "text-orange-500", label: "美食" },
  travel: { icon: Plane, color: "text-purple-500", label: "旅行" },
  hobbies: { icon: Music, color: "text-pink-500", label: "興趣" },
};

export default function LifeCard({ life }: LifeCardProps) {
  const config = categoryConfig[life.category];
  const Icon = config.icon;
  const date = new Date(life.date);

  return (
    <Link href={`/life/${life.slug}`}>
      <Card className="p-6 hover-elevate transition-all duration-200 cursor-pointer" data-testid={`card-life-${life.id}`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-2xl bg-accent ${config.color}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="secondary" className="rounded-full" data-testid={`badge-category-${life.category}`}>
                {config.label}
              </Badge>
              <time className="text-sm text-muted-foreground">
                {format(date, "yyyy/MM/dd")}
              </time>
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2" data-testid={`text-life-title-${life.id}`}>{life.title}</h3>
            <p className="text-sm text-muted-foreground">{life.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
