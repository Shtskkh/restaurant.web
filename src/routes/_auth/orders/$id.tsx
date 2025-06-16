import { createFileRoute } from "@tanstack/react-router";
import OrdersIdPage from "../../../pages/OrdersPages/OrdersIdPage.tsx";

export const Route = createFileRoute("/_auth/orders/$id")({
  component: OrdersIdPage,
});
