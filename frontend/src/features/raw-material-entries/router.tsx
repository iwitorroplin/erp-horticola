import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import PageLoader from "@/components/common/PageLoader";

const RawMaterialEntriesPage = lazy(
  () => import("./pages/RawMaterialEntriesPage"),
);

export const rawMaterialEntriesRoutes: RouteObject = {
  path: "raw-material-entries",
  element: (
    <Suspense fallback={<PageLoader />}>
      <RawMaterialEntriesPage />
    </Suspense>
  ),
};
