import { createFileRoute } from "@tanstack/react-router";
import DishesIdPage from "../../../pages/DishesPages/DishesIdPage.tsx";

export const Route = createFileRoute("/_auth/dishes/$id")({
  component: DishesIdPage,
});
