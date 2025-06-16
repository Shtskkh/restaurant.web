import { createFileRoute } from "@tanstack/react-router";
import StaffIndexPage from "../../../pages/StaffPages/StaffIndexPage.tsx";

export const Route = createFileRoute("/_auth/staff/")({
  head: () => ({
    meta: [{ title: "Сотрудники" }],
  }),
  component: StaffIndexPage,
});
