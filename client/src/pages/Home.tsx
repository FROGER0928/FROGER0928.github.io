import { Briefcase, BookHeart, Camera, Sparkles, Star, Heart } from "lucide-react";
import StatCard from "@/components/StatCard";
import DiaryCard from "@/components/DiaryCard";
import PhotoGrid from "@/components/PhotoGrid";
import { Card } from "@/components/ui/card";

export default function Home() {
  const stats = [
    { icon: Briefcase, value: 12, label: "作品數量" },
    { icon: BookHeart, value: 45, label: "日記篇數" },
    { icon: Camera, value: 128, label: "照片數量" },
  ];

  const recentDiaries = [
    {
      id: "1",
      date: new Date("2024-01-15"),
      title: "期末考結束了",
      content: "終於考完試了！這學期學到很多東西，雖然壓力很大，但感覺自己成長了不少。",
      mood: "happy" as const,
    },
    {
      id: "2",
      date: new Date("2024-01-10"),
      title: "專案完成",
      content: "和組員一起完成了期末專案，大家都很努力，最後的成果也讓人很滿意。",
      mood: "good" as const,
    },
  ];

  const recentPhotos = Array.from({ length: 4 }, (_, i) => ({
    id: `photo-${i}`,
    caption: `最新照片 ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="relative mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <Star className="w-6 h-6 text-primary/60" />
              <Heart className="w-6 h-6 text-primary/60" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              歡迎來到我的小天地
            </h1>
            <p className="font-handwritten text-2xl md:text-3xl text-primary">
              記錄我的每一天 ✨
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-semibold text-2xl">最新日記</h2>
              <a href="/diary" className="text-sm text-primary hover:underline" data-testid="link-more-diaries">
                查看全部
              </a>
            </div>
            <div className="space-y-4">
              {recentDiaries.map((diary) => (
                <DiaryCard key={diary.id} {...diary} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-semibold text-2xl">最新照片</h2>
              <a href="/photos" className="text-sm text-primary hover:underline" data-testid="link-more-photos">
                查看全部
              </a>
            </div>
            <PhotoGrid photos={recentPhotos} />
          </div>
        </div>
      </div>
    </div>
  );
}
