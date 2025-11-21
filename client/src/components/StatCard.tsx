import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  color?: string;
}

export default function StatCard({ icon: Icon, value, label, color = "text-primary" }: StatCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all duration-200" data-testid={`card-stat-${label}`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-2xl bg-accent ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-3xl font-heading font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </Card>
  );
}
