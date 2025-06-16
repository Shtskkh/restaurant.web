import { createFileRoute } from "@tanstack/react-router";
import SuppliesIndexPage from "../../../pages/SuppliesPages/SuppliesIndexPage.tsx";

export const Route = createFileRoute("/_auth/supplies/")({
  component: SuppliesIndexPage,
});
