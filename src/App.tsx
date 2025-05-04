import {ThemeProvider} from "@emotion/react";
import {createTheme, CssBaseline} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
        </ThemeProvider>
    )
}

export default App
