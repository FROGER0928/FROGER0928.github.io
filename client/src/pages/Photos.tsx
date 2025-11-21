import { useState } from "react";
import PhotoGrid from "@/components/PhotoGrid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Camera, Upload } from "lucide-react";

export default function Photos() {
  const [photos] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: `photo-${i}`,
      caption: `照片 ${i + 1}`,
    }))
  );

  const handleUpload = () => {
    console.log("上傳照片");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl">我的照片</h1>
              <p className="text-sm text-muted-foreground mt-1">記錄美好時光</p>
            </div>
          </div>
          <Button className="gap-2" onClick={handleUpload} data-testid="button-upload-photo">
            <Plus className="w-4 h-4" />
            上傳照片
          </Button>
        </div>

        <Card className="p-8 mb-8 border-dashed border-2 hover-elevate cursor-pointer" data-testid="card-upload-zone">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-4 rounded-2xl bg-accent mb-4">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">拖曳照片到這裡上傳</h3>
            <p className="text-sm text-muted-foreground">或點擊選擇檔案</p>
          </div>
        </Card>

        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
}
