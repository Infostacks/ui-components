import { 
    blue,
    pink
 } from "@mui/material/colors";

const typography = {
    fontFamily: [
        "DM Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),
    fontSize: {
        small: "12px",
        default: "16px",
        medium: "18px",
        large: "20px",
        xlarge: "24px",
        xxlarge: "32px",
        xxxlarge: "40px",
        xxxxlarge: "48px",
        xxxxxlarge: "56px",
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    fontStyle: {
        normal: "normal",
        italic: "italic",
    },
};

// const colorPalette = {
//     primary: {
//         professionalBlueColor: "#2B1E8F",
//         lightColor: "#E6ECFF",
//         darkColor: "#5A50D3",
//         lavenderBlue: "#B7CBFF",
//     },
//     secondary: {
//         professionalBlueColor: "#3326C9",
//         lightColor: "#8F8FC8",
//         darkColor: "#463ace",
//     },
//     success: {
//         professionalGreenColor: "#1E8611",
//     },
//     error: {
//         professionalredColor: "#d32f2f",
//         lightColor: "#FFD2D2",
//     },
//     accent: {
//         professionalYellowColor: "#FFD166",
//         lightColor: "#EAEEFF",
//         darkColor: "#955196",
//     },
// };

const theme = (appName: string, mode='light') => {

    return {
        palette: {
            primary: {
                extraLight: blue[100],
                main: '#3326c9',
                extraDark: blue[900],
            },
            secondary: {
                extraLight: '#F4F6FF',
                main: '#E6ECFF',
                extraDark: '#D2DBFF'
            },
        },

        typography: {
            fontWeightRegular: typography.fontWeight.regular,
            fontWeightMedium: typography.fontWeight.medium,
            fontWeightSemiBold: typography.fontWeight.semibold,
            fontWeightBold: typography.fontWeight.bold,
            fontFamily: typography.fontFamily,
            h1: {
                fontSize: typography.fontSize.xxxxlarge,
            },
            h2: {
                fontSize: typography.fontSize.xxxlarge,
            },
            h3: {
                fontSize: typography.fontSize.xxlarge,
            },
            h4: {
                fontSize: typography.fontSize.xlarge,
            },
            h5: {
                fontSize: typography.fontSize.large,
            },
            h6: {
                fontSize: typography.fontSize.medium,
            },
            subtitle1: {
                fontSize: typography.fontSize.default,
            },
            subtitle2: {
                fontSize: typography.fontSize.small,
            },
        },
    };
};

export {
    theme,
    typography,
};


// components: {
        //   // Name of the component
        //   MuiButton: {
        //     styleOverrides: {
        //       // Name of the slot
        //       root: {
        //         // Some CSS
        //         fontSize: typography.fontSize.default,
        //         fontWeight: typography.fontWeight.regular,
        //         color: `${mode === 'dark' ? colorPalette.primary.cleanWhite : colorPalette.primary.professionalBlueColor}`,
        //         borderRadius: 2 * borderRadius.large,
        //       },
        //     },
        //   },
        //   MuiTypography: {

        //     styleOverrides: {
        //       root: {
        //         fontFamily: typography.fontFamily,
        //         fontWeight: typography.fontWeight,
        //         color: `${mode === "light" ? "#000000" : "#FFFFFF"}`,
        //       }
        //     }
        //   },
        //   MuiAppBar: {
        //     styleOverrides: {
        //       root: {
        //         backgroundColor: colorPalette.primary.professionalBlueColor,
        //         boxShadow: boxShadows.strong,
        //       },
        //     },
        //   },
        //   MuiCard: {
        //     styleOverrides: {
        //       root: {
        //         borderRadius: borderRadius.medium,
        //         boxShadow: boxShadows.moderate,
        //       },
        //     },
        //   },
        //   // Add more components as needed
        // },
        // breakpoints,