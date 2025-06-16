import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, useColorScheme } from "@mui/material";

export const ToggleThemeButton = () => {
  const { mode, setMode } = useColorScheme();

  const onClick = () => {
    if (mode === "dark") {
      setMode("light");
    }

    if (mode === "light") {
      setMode("dark");
    }
  };

  return (
    <IconButton
      sx={{
        position: "absolute",
        bottom: 15,
        left: 15,
      }}
      onClick={onClick}
    >
      {mode == "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
