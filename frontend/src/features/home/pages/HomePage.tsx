import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <Card className="p-6 space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">ERP Hortícola</h1>
        <p className="text-slate-600">
          Esta es la primera pantalla básica. Poco a poco iremos construyendo
          módulos.
        </p>
        <Button>Probando ShadCN + Tailwind</Button>
      </Card>
    </div>
  );
}
