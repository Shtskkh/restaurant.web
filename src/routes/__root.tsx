import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router";
import { AuthStoreType } from "../context/auth";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  auth: AuthStoreType;
}>()({
  component: () => (
    <>
      <HeadContent />
      <Outlet />
    </>
  ),
});
