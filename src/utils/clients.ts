import { QueryClient } from "@tanstack/react-query";
import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "./schema";

export const queryClient = new QueryClient();

export const fetchClient = createFetchClient<paths>({
  baseUrl: "https://localhost:7280/",
});

export const $api = createClient(fetchClient);
