import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "../../pages/LoginPage/LoginPage.tsx";

type LoginSearchParams = {
  redirect?: string;
};

export const Route = createFileRoute("/login/")({
  validateSearch: (search: LoginSearchParams) => {
    return {
      redirect: search.redirect,
    };
  },
  component: LoginPage,
});
