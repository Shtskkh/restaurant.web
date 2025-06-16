import { createFileRoute } from "@tanstack/react-router";
import StaffIdPage from "../../../pages/StaffPages/StaffIdPage.tsx";

export const Route = createFileRoute("/_auth/staff/$id")({
  component: StaffIdPage,
});
