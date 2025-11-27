import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { entriesIngredientsRoutes } from "@/features/entries_ingredients/router";
// import { usersRoutes } from "@/features/users/router";
// import { stockRoutes } from "@/features/stock/router";
// import { homeRoutes } from "@/features/home/router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [entriesIngredientsRoutes],
  },
]);
