import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { ListItemLinkProps } from "./types.ts";

export const ListItemLink = ({ to, icon, text }: ListItemLinkProps) => {
  return (
    <ListItem disableGutters>
      <ListItemButton component={Link} href={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
