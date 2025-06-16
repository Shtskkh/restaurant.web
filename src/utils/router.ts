import { createRouter } from "@tanstack/react-router";
import { PendingComponent } from "../components/PendingComponent.tsx";
import { routeTree } from "../routeTree.gen.ts";
import { queryClient } from "./clients.ts";

export const router = createRouter({
  routeTree,
  context: { queryClient, auth: undefined! },
  defaultPendingComponent: PendingComponent,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
