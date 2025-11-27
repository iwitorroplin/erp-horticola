import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";

export function NotificationPanel() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 rounded hover:bg-slate-100 transition">
          <Bell className="w-6 h-6 text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle>Notificaciones</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-3">
          <NotificationItem
            title="Nuevo pedido recibido"
            text="Pedido #488 está listo para revisar."
          />
          <NotificationItem
            title="Stock bajo"
            text="Ingrediente X por debajo del mínimo."
          />
          <NotificationItem
            title="Actualización disponible"
            text="Nueva versión lista para instalar."
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NotificationItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-3 border rounded-md hover:bg-slate-50 cursor-pointer">
      <p className="font-medium text-slate-800">{title}</p>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
