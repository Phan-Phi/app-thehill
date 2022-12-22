import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export default function MuiThemeProvider({ children }) {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#20C2C8",
        light: "#20C2C8",
      },
      common: { black: "#09101D", white: "#FFFFFF" },

      neutral: {
        neutral1: "#2C3A4B",
        neutral7: "#DADEE3",
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "Roboto"].join(","),
      h1: {
        fontSize: "32px",
        fontWeight: 600,
        lineHeight: "48px",
      },
      h4: {
        fontSize: "23px",
        fontWeight: 600,
        lineHeight: "34.5px",
      },
      h5: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "30px",
      },

      subtitle1: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "25px",
      },
      subtitle2: {
        fontSize: "9px",
        fontWeight: 600,
        lineHeight: "13.5px",
      },
    },
  });

  const theme = createTheme({
    ...defaultTheme,

    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "black",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none !important",
            width: "100%",
            padding: "14px",
            borderRadius: "2rem",
            color: "white",
            backgroundColor: "rgba(32, 194, 200, 0.6)",
            // background:
            //   "linear-gradient(to right, rgba(169,208,113,0),rgba(136,173,215,1))",
            fontSize: "18px",
            fontWeight: 600,
            textTransform: "none",
          },
        },
      },

      MuiFormControl: {
        styleOverrides: {
          root: {
            marginBottom: "20px",
          },
        },
      },

      MuiFormLabel: {
        styleOverrides: {
          root: {
            ...defaultTheme.typography.subtitle1,
            color: defaultTheme.palette.neutral.neutral1,
            padding: "0 24px",
            marginBottom: "0.5rem",
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: "32rem",
            padding: "12px 24px",
            border: `1px solid ${defaultTheme.palette.neutral.neutral7}`,
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}