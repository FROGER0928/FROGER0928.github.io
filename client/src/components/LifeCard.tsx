import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { LucideIcon, Book, Users, UtensilsCrossed, Plane, Music } from "lucide-react";

interface LifeCardProps {
  id: string;
  date: Date;
  title: string;
  description: string;
  category: "study" | "friends" | "food" | "travel" | "hobbies";
}

const categoryConfig: Record<string, { icon: LucideIcon; color: string; label: string }> = {
  study: { icon: Book, color: "text-blue-500", label: "學習" },
  friends: { icon: Users, color: "text-green-500", label: "朋友" },
  food: { icon: UtensilsCrossed, color: "text-orange-500", label: "美食" },
  travel: { icon: Plane, color: "text-purple-500", label: "旅行" },
  hobbies: { icon: Music, color: "text-pink-500", label: "興趣" },
};

export default function LifeCard({ id, date, title, description, category }: LifeCardProps) {
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <Card className="p-6 hover-elevate transition-all duration-200" data-testid={`card-life-${id}`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-2xl bg-accent ${config.color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="secondary" className="rounded-full" data-testid={`badge-category-${category}`}>
              {config.label}
            </Badge>
            <time className="text-sm text-muted-foreground">
              {format(date, "yyyy/MM/dd")}
            </time>
          </div>
          <h3 className="font-heading font-semibold text-lg mb-2" data-testid={`text-life-title-${id}`}>{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}
