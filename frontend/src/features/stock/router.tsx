import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import PageLoader from "@/components/common/PageLoader";

const StockPage = lazy(() => import("./pages/StockPage"));

export const stockRoutes: RouteObject = {
  path: "stock",
  element: (
    <Suspense fallback={<PageLoader />}>
      <StockPage />
    </Suspense>
  ),
};
