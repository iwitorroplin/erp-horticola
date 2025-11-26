import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setOpen(true)} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
