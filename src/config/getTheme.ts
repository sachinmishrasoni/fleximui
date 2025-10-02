import { createTheme, type PaletteOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxs: true,
    }
}

const themeObj: Record<"dark" | "light", Partial<PaletteOptions>> = {
    dark: {
        primary: {
            main: "#33A1E0",
        },
        background: {
            default: "#222831",
            paper: "#393E46",
        },
    },
    light: {
        primary: {
            main: "#33A1E0",
        },
        text: {
            primary: "#021526",
            // secondary: "#DDDDDD",
        }

    }
};

const getTheme = (mode: "dark" | "light") => createTheme({
    palette: {
        mode: mode,
        ...themeObj[mode],
    },
    breakpoints: {
        keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xxs: 0,
            xs: 400,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                }
            }
        }
    }
});

export default getTheme;