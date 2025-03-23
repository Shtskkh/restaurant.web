import Sidebar from "../components/Sidebar.jsx";
import {Box, Button, CssBaseline, Toolbar, Typography} from "@mui/material";
import PageTitle from "../utils/PageTitle.jsx";

function DashboardPage() {
    return (
        <>
            <PageTitle title="Сводка" />
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Сводка</h1>
                    <p>Здесь может быть ваш контент.</p>
                </Box>
            </Box>
        </>
    )
}

export default DashboardPage;