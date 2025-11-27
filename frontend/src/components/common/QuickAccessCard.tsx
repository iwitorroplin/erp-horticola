import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

export default function QuickAccessCard({
  title,
  description,
  icon: Icon,
  link,
}: QuickAccessCardProps) {
  return (
    <Link to={link}>
      <Card className="p-4 hover:bg-slate-200 transition cursor-pointer flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Icon className="h-5 w-5 text-slate-700" />
            <h3 className="font-semibold text-slate-800">{title}</h3>
          </div>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <ArrowRight className="h-5 w-5 text-slate-700" />
      </Card>
    </Link>
  );
}
