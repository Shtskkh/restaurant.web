import { $api } from "./clients.ts";

export const useAuth = (login: string, password: string) => {
  return $api.useQuery(
    "post",
    "/api/Auth/login",
    {
      body: { Login: login, Password: password },
    },
    {
      enabled: false,
    },
  );
};
