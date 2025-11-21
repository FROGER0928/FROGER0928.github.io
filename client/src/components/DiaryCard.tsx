import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { Heart, Smile, Meh, Frown } from "lucide-react";

interface DiaryCardProps {
  id: string;
  date: Date;
  title: string;
  content: string;
  mood?: "happy" | "good" | "neutral" | "sad";
}

const moodIcons = {
  happy: { icon: Smile, color: "text-yellow-500" },
  good: { icon: Heart, color: "text-pink-500" },
  neutral: { icon: Meh, color: "text-blue-500" },
  sad: { icon: Frown, color: "text-gray-500" },
};

export default function DiaryCard({ id, date, title, content, mood = "good" }: DiaryCardProps) {
  const MoodIcon = moodIcons[mood].icon;

  return (
    <Card className="p-6 hover-elevate transition-all duration-200" data-testid={`card-diary-${id}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className={`p-3 rounded-2xl bg-accent ${moodIcons[mood].color}`}>
            <MoodIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <time className="text-sm text-muted-foreground" data-testid={`text-diary-date-${id}`}>
              {format(date, "yyyy年MM月dd日")}
            </time>
          </div>
          <h3 className="font-handwritten text-2xl mb-2" data-testid={`text-diary-title-${id}`}>{title}</h3>
          <p className="text-sm text-foreground/80 line-clamp-3">{content}</p>
        </div>
      </div>
    </Card>
  );
}
