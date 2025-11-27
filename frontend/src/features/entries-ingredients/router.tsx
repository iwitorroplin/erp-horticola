import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import PageLoader from "@/components/common/PageLoader";
import EntriesIngredientsLayout from "./layout/EntriesIngredientsLayout";

const EntriesIngredientsDashboard = lazy(
  () => import("./pages/EntriesIngredientsDashboard")
);
const AddIngredientPage = lazy(() => import("./pages/AddIngredientPage"));
const ListIngredientsPage = lazy(() => import("./pages/ListIngredientsPage"));

export const entriesIngredientsRoutes: RouteObject = {
  path: "entries-ingredients",
  element: <EntriesIngredientsLayout />,
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<PageLoader />}>
          <EntriesIngredientsDashboard />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={<PageLoader />}>
          <AddIngredientPage />
        </Suspense>
      ),
    },
    {
      path: "list",
      element: (
        <Suspense fallback={<PageLoader />}>
          <ListIngredientsPage />
        </Suspense>
      ),
    },
  ],
};
