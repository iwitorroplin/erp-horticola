import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

import PageLoader from "@/components/common/PageLoader";

import StockLayout from "./layout/StockLayout";

const StockDashboardPage = lazy(
  () => import("./pages/StockDashboardPage"),
);
const StockMovementsPage = lazy(() => import("./pages/StockMovementsPage"));
const StockInventoryPage = lazy(() => import("./pages/StockInventoryPage"));
const StockSettingsPage = lazy(() => import("./pages/StockSettingsPage"));

export const stockRoutes: RouteObject = {
  path: "stock",
  element: <StockLayout />,
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<PageLoader />}>
          <StockDashboardPage />
        </Suspense>
      ),
    },
    {
      path: "movements",
      element: (
        <Suspense fallback={<PageLoader />}>
          <StockMovementsPage />
        </Suspense>
      ),
    },
    {
      path: "inventory",
      element: (
        <Suspense fallback={<PageLoader />}>
          <StockInventoryPage />
        </Suspense>
      ),
    },
    {
      path: "settings",
      element: (
        <Suspense fallback={<PageLoader />}>
          <StockSettingsPage />
        </Suspense>
      ),
    },
  ],
};
