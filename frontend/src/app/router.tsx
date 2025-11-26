import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageLoader from "@/components/common/PageLoader";

// Lazy imports
const HomePage = lazy(() => import("@/features/home/pages/HomePage"));
const UsersPage = lazy(() => import("@/features/users/pages/UsersPage"));
const StockPage = lazy(() => import("@/features/stock/pages/StockPage"));
const EntriesIngredientsPage = lazy(
  () => import("@/features/entries_ingredients/pages/EntriesPage")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "usuarios",
        element: (
          <Suspense fallback={<PageLoader />}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: "stock",
        element: (
          <Suspense fallback={<PageLoader />}>
            <StockPage />
          </Suspense>
        ),
      },
      {
        path: "entries_ingredients",
        element: (
          <Suspense fallback={<PageLoader />}>
            <EntriesIngredientsPage />
          </Suspense>
        ),
      },
    ],
  },
]);
