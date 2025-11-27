import { Card, CardContent } from "@/components/ui/card";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
}

export default function SummaryCard({
  title,
  value,
  icon: Icon,
}: SummaryCardProps) {
  return (
    <Card className="p-4 flex items-center gap-4">
      <div className="p-3 bg-slate-200 rounded-lg">
        <Icon className="w-6 h-6 text-slate-700" />
      </div>
      <CardContent className="p-0">
        <p className="text-sm text-slate-600">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
