import { createFileRoute } from "@tanstack/react-router";
import DishesIndexPage from "../../../pages/DishesPages/DishesIndexPage.tsx";

export const Route = createFileRoute("/_auth/dishes/")({
  head: () => ({
    meta: [{ title: "Блюда" }],
  }),
  component: DishesIndexPage,
});
