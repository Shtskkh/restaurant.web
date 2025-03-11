import {Typography} from "@mui/material";
import AuthorizeView from "../utils/AuthorizeView.jsx";

export default function HomePage() {
    return (
        <AuthorizeView>
            <Typography variant="h5">Домашняя страница</Typography>
        </AuthorizeView>
    )
}