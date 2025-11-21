import { useState } from "react";
import WorkCard from "@/components/WorkCard";
import { Button } from "@/components/ui/button";
import { Plus, Briefcase } from "lucide-react";

export default function Works() {
  const [works] = useState([
    {
      id: "1",
      title: "個人作品集網站",
      description: "使用 React 和 Tailwind CSS 建立的個人作品集，展示了我的設計和開發能力。",
      tags: ["React", "Tailwind", "設計"],
    },
    {
      id: "2",
      title: "學校專題：智慧課表系統",
      description: "和同學合作開發的智慧課表系統，可以自動排課和推薦最佳時間表。",
      tags: ["團隊專案", "Python", "演算法"],
    },
    {
      id: "3",
      title: "UI 設計練習",
      description: "Figma 設計練習作品，包含 app 介面和網頁設計等。",
      tags: ["Figma", "UI/UX", "設計"],
    },
    {
      id: "4",
      title: "JavaScript 小遊戲",
      description: "使用原生 JavaScript 開發的小遊戲，練習了 DOM 操作和遊戲邏輯。",
      tags: ["JavaScript", "遊戲", "前端"],
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl">我的作品</h1>
              <p className="text-sm text-muted-foreground mt-1">記錄我的學習成果</p>
            </div>
          </div>
          <Button className="gap-2" data-testid="button-add-work">
            <Plus className="w-4 h-4" />
            新增作品
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
}
