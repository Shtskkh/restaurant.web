import { createRouter } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen.ts";
import { queryClient } from "./clients.ts";

export const router = createRouter({
  routeTree,
  context: { queryClient, auth: undefined! },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
