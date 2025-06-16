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

export const useStaff = () => {
  return $api.useQuery("get", "/api/Staff/GetAll");
};

export const useStaffById = (id: number) => {
  return $api.useQuery("get", "/api/Staff/GetById/{id}", {
    params: {
      path: { id: id },
    },
  });
};
