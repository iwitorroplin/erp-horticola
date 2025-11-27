import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import PageLoader from "@/components/common/PageLoader";

const HomePage = lazy(() => import("./pages/HomePage"));

export const homeRoutes: RouteObject = {
  index: true,
  element: (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
};
