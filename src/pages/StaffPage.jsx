import {Box, CssBaseline} from "@mui/material";
import Sidebar from "../components/Sidebar.jsx";
import PageTitle from "../utils/PageTitle.jsx";

function StaffPage() {
    return (
        <>
            <PageTitle title="Сотрудники" />
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Сотрудники</h1>
                    <p>Здесь может быть ваш контент.</p>
                </Box>
            </Box>
        </>
    )
}

export default StaffPage;