import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import InventoryIcon from "@mui/icons-material/Inventory";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { ListItemLinkProps } from "./types.ts";

export const tabs: ListItemLinkProps[] = [
  { to: "/dashboard", text: "Сводка", icon: <DashboardIcon /> },
  { to: "/orders", text: "Заказы", icon: <ListIcon /> },
  { to: "/dishes", text: "Блюда", icon: <RestaurantIcon /> },
  { to: "/staff", text: "Сотрудники", icon: <AccessibleForwardIcon /> },
  { to: "/supplies", text: "Поставки", icon: <InventoryIcon /> },
];
