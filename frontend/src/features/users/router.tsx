import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import PageLoader from "@/components/common/PageLoader";

const UsersPage = lazy(() => import("./pages/UsersPage"));

export const usersRoutes: RouteObject = {
  path: "usuarios",
  element: (
    <Suspense fallback={<PageLoader />}>
      <UsersPage />
    </Suspense>
  ),
};
