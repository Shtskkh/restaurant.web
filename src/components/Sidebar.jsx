import {Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import routes from "../utils/Routes.jsx";
import {useNavigate} from "react-router";

function Sidebar() {
    const navigate = useNavigate()
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 240,
                    boxSizing: "border-box",
                },
            }}
        >
            <List>
                {routes.map((route, index) => (
                    <ListItem key={index}>
                        <ListItemButton onClick={() => {navigate(route.path)}}>
                            <ListItemText>{route.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;