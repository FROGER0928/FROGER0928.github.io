import { useRoute } from "wouter";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { works } from "@/data/content";

export default function WorkDetail() {
  const [, params] = useRoute("/works/:slug");
  const work = works.find((w) => w.slug === params?.slug);

  if (!work) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold mb-2">找不到作品</h2>
            <p className="text-muted-foreground">這篇作品可能不存在</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-6">
          <Link href="/works">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              返回作品列表
            </Button>
          </Link>
        </div>

        <Card className="p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-accent">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-3xl md:text-4xl">{work.title}</h1>
                <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
              </div>
            </div>

            {work.imageUrl && (
              <div className="aspect-video bg-accent rounded-lg overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {work.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="border-t pt-6">
              <MarkdownContent content={work.content} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

