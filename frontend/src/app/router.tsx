import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { homeRoutes } from "@/features/home/router";
import { usersRoutes } from "@/features/users/router";
import { stockRoutes } from "@/features/stock/router";
import { entriesIngredientsRoutes } from "@/features/entries-ingredients/router";
import { rawMaterialEntriesRoutes } from "@/features/raw-material-entries/router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      homeRoutes,
      usersRoutes,
      stockRoutes,
      entriesIngredientsRoutes,
      rawMaterialEntriesRoutes,
    ],
  },
]);
