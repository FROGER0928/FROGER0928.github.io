import { useState } from "react";
import DiaryCard from "@/components/DiaryCard";
import { Button } from "@/components/ui/button";
import { Plus, BookHeart } from "lucide-react";

export default function Diary() {
  const [diaries] = useState([
    {
      id: "1",
      date: new Date("2024-01-15"),
      title: "期末考結束了",
      content: "終於考完試了！這學期學到很多東西，雖然壓力很大，但感覺自己成長了不少。下學期要繼續加油！",
      mood: "happy" as const,
    },
    {
      id: "2",
      date: new Date("2024-01-10"),
      title: "專案完成",
      content: "和組員一起完成了期末專案，大家都很努力，最後的成果也讓人很滿意。這次合作學到了很多團隊協作的技巧。",
      mood: "good" as const,
    },
    {
      id: "3",
      date: new Date("2024-01-05"),
      title: "今天去圖書館唸書",
      content: "在圖書館待了一整天，準備期末考。雖然有點累，但是效率很高，完成了很多複習進度。",
      mood: "neutral" as const,
    },
    {
      id: "4",
      date: new Date("2024-01-01"),
      title: "新年新希望",
      content: "新的一年開始了！希望今年能學會更多新技能，交到更多朋友，也要好好照顧自己的身體。",
      mood: "happy" as const,
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent">
              <BookHeart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl">我的日記</h1>
              <p className="text-sm text-muted-foreground mt-1">記錄每一天的心情</p>
            </div>
          </div>
          <Button className="gap-2" data-testid="button-add-diary">
            <Plus className="w-4 h-4" />
            寫日記
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-6">
            {diaries.map((diary, index) => (
              <div key={diary.id} className="relative">
                <div className="hidden md:block absolute left-6 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="md:ml-16">
                  <DiaryCard {...diary} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
