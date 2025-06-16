import { createFileRoute } from "@tanstack/react-router";
import DashboardIndexPage from "../../../pages/DashboardPages/DashboardIndexPage.tsx";

export const Route = createFileRoute("/_auth/dashboard/")({
  head: () => ({
    meta: [{ title: "Сводка" }],
  }),
  component: DashboardIndexPage,
});
