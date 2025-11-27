import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

import PageLoader from "@/components/common/PageLoader";

import UsersLayout from "./layout/UsersLayout";

const UsersListPage = lazy(() => import("./pages/UsersListPage"));
const UsersRolesPage = lazy(() => import("./pages/UsersRolesPage"));
const UsersInvitationsPage = lazy(
  () => import("./pages/UsersInvitationsPage"),
);
const UsersSettingsPage = lazy(() => import("./pages/UsersSettingsPage"));

export const usersRoutes: RouteObject = {
  path: "usuarios",
  element: <UsersLayout />,
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<PageLoader />}>
          <UsersListPage />
        </Suspense>
      ),
    },
    {
      path: "roles",
      element: (
        <Suspense fallback={<PageLoader />}>
          <UsersRolesPage />
        </Suspense>
      ),
    },
    {
      path: "invitaciones",
      element: (
        <Suspense fallback={<PageLoader />}>
          <UsersInvitationsPage />
        </Suspense>
      ),
    },
    {
      path: "configuracion",
      element: (
        <Suspense fallback={<PageLoader />}>
          <UsersSettingsPage />
        </Suspense>
      ),
    },
  ],
};
