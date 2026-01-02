import { useState } from "react";
import LifeCard from "@/components/LifeCard";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { life } from "@/data/content";

export default function Life() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: "study", label: "學習" },
    { id: "friends", label: "朋友" },
    { id: "food", label: "美食" },
    { id: "travel", label: "旅行" },
    { id: "hobbies", label: "興趣" },
  ];

  const filteredActivities = selectedCategory
    ? life.filter((a) => a.category === selectedCategory)
    : life;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl">生活記錄</h1>
              <p className="text-sm text-muted-foreground mt-1">記錄每一個精彩瞬間</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Badge
            variant={selectedCategory === null ? "default" : "secondary"}
            className="rounded-full cursor-pointer hover-elevate"
            onClick={() => setSelectedCategory(null)}
            data-testid="badge-filter-all"
          >
            全部
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "secondary"}
              className="rounded-full cursor-pointer hover-elevate"
              onClick={() => setSelectedCategory(category.id)}
              data-testid={`badge-filter-${category.id}`}
            >
              {category.label}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredActivities.map((activity) => (
            <LifeCard key={activity.id} life={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}
