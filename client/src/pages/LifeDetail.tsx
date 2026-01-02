import { useRoute } from "wouter";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { format } from "date-fns";
import { LucideIcon, Book, Users, UtensilsCrossed, Plane, Music } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";
import { life } from "@/data/content";

const categoryConfig: Record<string, { icon: LucideIcon; color: string; label: string }> = {
  study: { icon: Book, color: "text-blue-500", label: "學習" },
  friends: { icon: Users, color: "text-green-500", label: "朋友" },
  food: { icon: UtensilsCrossed, color: "text-orange-500", label: "美食" },
  travel: { icon: Plane, color: "text-purple-500", label: "旅行" },
  hobbies: { icon: Music, color: "text-pink-500", label: "興趣" },
};

export default function LifeDetail() {
  const [, params] = useRoute("/life/:slug");
  const lifeEntry = life.find((l) => l.slug === params?.slug);

  if (!lifeEntry) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold mb-2">找不到生活記錄</h2>
            <p className="text-muted-foreground">這篇記錄可能不存在</p>
          </div>
        </div>
      </div>
    );
  }

  const config = categoryConfig[lifeEntry.category];
  const Icon = config.icon;
  const date = new Date(lifeEntry.date);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-6">
          <Link href="/life">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              返回生活記錄
            </Button>
          </Link>
        </div>

        <Card className="p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-2xl bg-accent ${config.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2">{lifeEntry.title}</h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <time className="text-sm text-muted-foreground">
                    {format(date, "yyyy年MM月dd日")}
                  </time>
                  <Badge variant="secondary" className="rounded-full">
                    {config.label}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <MarkdownContent content={lifeEntry.content} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

