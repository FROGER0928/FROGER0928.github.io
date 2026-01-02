import { useRoute } from "wouter";
import { ArrowLeft, BookHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { format } from "date-fns";
import { Heart, Smile, Meh, Frown } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";
import { diaries } from "@/data/content";

const moodIcons = {
  happy: { icon: Smile, color: "text-yellow-500" },
  good: { icon: Heart, color: "text-pink-500" },
  neutral: { icon: Meh, color: "text-blue-500" },
  sad: { icon: Frown, color: "text-gray-500" },
};

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:slug");
  const diary = diaries.find((d) => d.slug === params?.slug);

  if (!diary) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold mb-2">找不到日記</h2>
            <p className="text-muted-foreground">這篇日記可能不存在</p>
          </div>
        </div>
      </div>
    );
  }

  const mood = diary.mood || "good";
  const MoodIcon = moodIcons[mood].icon;
  const date = new Date(diary.date);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-6">
          <Link href="/diary">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              返回日記列表
            </Button>
          </Link>
        </div>

        <Card className="p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-accent">
                <BookHeart className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2">{diary.title}</h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <time className="text-sm text-muted-foreground">
                    {format(date, "yyyy年MM月dd日")}
                  </time>
                  <div className={`flex items-center gap-2 ${moodIcons[mood].color}`}>
                    <MoodIcon className="w-5 h-5" />
                    <Badge variant="secondary" className="rounded-full">
                      {mood === "happy" ? "開心" : mood === "good" ? "不錯" : mood === "neutral" ? "普通" : "難過"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <MarkdownContent content={diary.content} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

