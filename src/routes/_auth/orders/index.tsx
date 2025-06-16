import { createFileRoute } from "@tanstack/react-router";
import OrdersIndexPage from "../../../pages/OrdersPages/OrdersIndexPage.tsx";

export const Route = createFileRoute("/_auth/orders/")({
  head: () => ({
    meta: [{ title: "Заказы" }],
  }),
  component: OrdersIndexPage,
});
