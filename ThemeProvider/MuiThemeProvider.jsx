import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export default function MuiThemeProvider({ children }) {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#20C2C8",
        light: "#20C2C8",
        dark: "#9098A1",
      },
      common: { black: "#09101D", white: "#FFFFFF" },

      neutral: {
        neutral1: "#2C3A4B",
        neutral2: "#394452",
        neutral5: "#858C94",
        neutral7: "#DADEE3",
        neutral8: "#FF1843",
        neutral9: "#FFB800",
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
      h6: {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "27px",
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
      body1: {
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "19.5px",
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

            fontSize: "18px",
            fontWeight: 600,
            textTransform: "none",

            "& :hover": {
              backgroundColor: "rgba(32, 194, 200, 0.6)",
            },
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
