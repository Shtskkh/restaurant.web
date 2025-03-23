import {Box, CssBaseline} from "@mui/material";
import Sidebar from "../components/Sidebar.jsx";
import PageTitle from "../utils/PageTitle.jsx";

function DishesPage() {
    return (
        <>
            <PageTitle title="Блюда" />
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Блюда</h1>
                    <p>Здесь может быть ваш контент.</p>
                </Box>
            </Box>
        </>
    )
}

export default DishesPage;