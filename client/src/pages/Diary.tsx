import DiaryCard from "@/components/DiaryCard";
import { BookHeart } from "lucide-react";
import { diaries } from "@/data/content";

export default function Diary() {

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent">
              <BookHeart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl">我的日記</h1>
              <p className="text-sm text-muted-foreground mt-1">記錄每一天的心情</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-6">
            {diaries.map((diary, index) => (
              <div key={diary.id} className="relative">
                <div className="hidden md:block absolute left-6 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="md:ml-16">
                  <DiaryCard diary={diary} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
