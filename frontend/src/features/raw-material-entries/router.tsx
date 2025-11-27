import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

import PageLoader from "@/components/common/PageLoader";

import RawMaterialEntriesLayout from "./layout/RawMaterialEntriesLayout";

const RawMaterialEntriesDashboardPage = lazy(
  () => import("./pages/RawMaterialEntriesDashboardPage"),
);
const RawMaterialEntriesAddPage = lazy(
  () => import("./pages/RawMaterialEntriesAddPage"),
);
const RawMaterialEntriesListPage = lazy(
  () => import("./pages/RawMaterialEntriesListPage"),
);
const RawMaterialEntriesSettingsPage = lazy(
  () => import("./pages/RawMaterialEntriesSettingsPage"),
);

export const rawMaterialEntriesRoutes: RouteObject = {
  path: "raw-material-entries",
  element: <RawMaterialEntriesLayout />,
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<PageLoader />}>
          <RawMaterialEntriesDashboardPage />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={<PageLoader />}>
          <RawMaterialEntriesAddPage />
        </Suspense>
      ),
    },
    {
      path: "list",
      element: (
        <Suspense fallback={<PageLoader />}>
          <RawMaterialEntriesListPage />
        </Suspense>
      ),
    },
    {
      path: "settings",
      element: (
        <Suspense fallback={<PageLoader />}>
          <RawMaterialEntriesSettingsPage />
        </Suspense>
      ),
    },
  ],
};
