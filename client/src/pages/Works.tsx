import WorkCard from "@/components/WorkCard";
import { Briefcase } from "lucide-react";
import { works } from "@/data/content";

export default function Works() {

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl">我的作品</h1>
              <p className="text-sm text-muted-foreground mt-1">記錄我的學習成果</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
}
