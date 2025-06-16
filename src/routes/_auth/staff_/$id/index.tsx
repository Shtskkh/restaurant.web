import { createFileRoute } from "@tanstack/react-router";
import StaffIdPage from "../../../../pages/StaffPages/StaffIdPage.tsx";

export const Route = createFileRoute("/_auth/staff_/$id/")({
  component: StaffIdPage,
});
