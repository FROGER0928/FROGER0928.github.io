import { useState } from "react";
import LifeCard from "@/components/LifeCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar } from "lucide-react";

export default function Life() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: "study", label: "學習" },
    { id: "friends", label: "朋友" },
    { id: "food", label: "美食" },
    { id: "travel", label: "旅行" },
    { id: "hobbies", label: "興趣" },
  ];

  const [activities] = useState([
    {
      id: "1",
      date: new Date("2024-01-14"),
      title: "完成 React 教學",
      description: "花了一整天學習 React Hooks，終於搞懂了 useEffect 的用法。",
      category: "study" as const,
    },
    {
      id: "2",
      date: new Date("2024-01-13"),
      title: "和朋友一起吃火鍋",
      description: "今天和室友們一起去吃火鍋，聊了很多有趣的話題，度過了愉快的一晚。",
      category: "friends" as const,
    },
    {
      id: "3",
      date: new Date("2024-01-12"),
      title: "嘗試新開的咖啡店",
      description: "發現學校附近新開了一家咖啡店，裝潢很可愛，咖啡也很好喝！",
      category: "food" as const,
    },
    {
      id: "4",
      date: new Date("2024-01-11"),
      title: "開始學吉他",
      description: "終於開始學吉他了！雖然手指很痛，但是很開心能學習新的樂器。",
      category: "hobbies" as const,
    },
    {
      id: "5",
      date: new Date("2024-01-10"),
      title: "圖書館讀書會",
      description: "參加了系上的讀書會，和同學一起討論課程內容，收穫很多。",
      category: "study" as const,
    },
    {
      id: "6",
      date: new Date("2024-01-08"),
      title: "週末爬山",
      description: "和朋友們一起去爬山，天氣很好，風景也很美。運動後感覺身心都很放鬆。",
      category: "travel" as const,
    },
  ]);

  const filteredActivities = selectedCategory
    ? activities.filter((a) => a.category === selectedCategory)
    : activities;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl">生活記錄</h1>
              <p className="text-sm text-muted-foreground mt-1">記錄每一個精彩瞬間</p>
            </div>
          </div>
          <Button className="gap-2" data-testid="button-add-life">
            <Plus className="w-4 h-4" />
            新增記錄
          </Button>
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
            <LifeCard key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
}
