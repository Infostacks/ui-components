import { getContrastRatio } from "@mui/system";
import { ThemeOptions } from '@mui/material/styles';
// const typography = {
//   fontFamily: [
//     "DM Sans",
//     "-apple-system",
//     "BlinkMacSystemFont",
//     '"Segoe UI"',
//     "Roboto",
//     '"Helvetica Neue"',
//     "Arial",
//     "sans-serif",
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(","),
//   fontSize: {
//     small: "12px",
//     default: "16px",
//     medium: "18px",
//     large: "20px",
//     xlarge: "24px",
//     xxlarge: "32px",
//     xxxlarge: "40px",
//     xxxxlarge: "48px",
//     xxxxxlarge: "56px",
//   },
//   fontWeight: {
//     regular: 400,
//     medium: 500,
//     semibold: 600,
//     bold: 700,
//   },
//   fontStyle: {
//     normal: "normal",
//     italic: "italic",
//   },
// };

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

// const theme = (appName: string, mode = "light") => {
//   return {
//     palette: {
//       custom:{
//         accentGradient:{}
//       },
//       accent: {
//         main: "#3326C9",
//         contrastText:
//           getContrastRatio("#3326C9", "#fff") > 4.5 ? "#fff" : "#111",
//       },
//       secondary: {
//         light: "#E6ECFF",
//         main: "#d2dbff",
//       },
//     },

//     typography: {
//       fontWeightRegular: typography.fontWeight.regular,
//       fontWeightMedium: typography.fontWeight.medium,
//       fontWeightSemiBold: typography.fontWeight.semibold,
//       fontWeightBold: typography.fontWeight.bold,
//       fontFamily: typography.fontFamily,
//       h1: {
//         fontSize: typography.fontSize.xxxxlarge,
//       },
//       h2: {
//         fontSize: typography.fontSize.xxxlarge,
//       },
//       h3: {
//         fontSize: typography.fontSize.xxlarge,
//       },
//       h4: {
//         fontSize: typography.fontSize.xlarge,
//       },
//       h5: {
//         fontSize: typography.fontSize.large,
//       },
//       h6: {
//         fontSize: typography.fontSize.medium,
//       },
//       subtitle1: {
//         fontSize: typography.fontSize.default,
//       },
//       subtitle2: {
//         fontSize: typography.fontSize.small,
//       },
//     },
//   };
// };
const typography = {
  fontColor: {
    text_100: "#030113",
    text_75: "#33333A",
    text_50: "#818089",
    text_25: "#C0BFC4",
    text_10: "#E5E5E5",
  },
  fontFamily: ["Sora"],
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

const colorPalette = {
  accent: {
    main: "#3326c9",
    contrastText: getContrastRatio("#3326C9", "#fff") > 4.5 ? "#fff" : "#111",
  },
  secondary: {
    light: "#E6ECFF",
    main: "#D2DBFF",
  },
  success: {
    main: "#1E8611",
  },
  error: {
    light: "#FFD2D2",
    main: "#d32f2f",
  },
};

const theme = (mode: any): ThemeOptions => {
  const isDark = mode === 'dark';

  return {
    palette: {
      mode,
      // Main colors
      primary: {
        main: isDark ? '#6e48aa' : '#3326c9', // Purple in dark, original accent in light
        contrastText: '#ffffff'
      },
      secondary: {
        main: isDark ? '#00e5ff' : '#D2DBFF', // Teal in dark, light blue in light
        contrastText: isDark ? '#0a0b1a' : '#ffffff'
      },
      accent: {
        main: '#3326c9',
        contrastText: getContrastRatio("#3326C9", "#fff") > 4.5 ? "#fff" : "#111",
      },

      // Backgrounds
      background: {
        default: isDark ? '#0a0b1a' : '#f5f5f7', // Dark blue in dark, light gray in light
        paper: isDark ? '#1a1b2f' : '#ffffff' // Slightly lighter dark blue in dark, white in light
      },

      // Text colors
      text: {
        primary: isDark ? '#ffffff' : typography.fontColor.text_100,
        secondary: isDark ? 'rgba(255, 255, 255, 0.92)' : typography.fontColor.text_75,
        disabled: isDark ? 'rgba(255, 255, 255, 0.6)' : typography.fontColor.text_50
      },
      divider: isDark ? 'rgba(113, 119, 144, 0.25)' : 'rgba(0, 0, 0, 0.1)',

      // Custom palette for extended colors
      custom: {
        // Gradients
        accentGradient: isDark ? 'linear-gradient(135deg, #6e48aa, #00e5ff)' : 'linear-gradient(135deg, #3326c9, #D2DBFF)',

        // Search field
        searchBackground: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)',
        searchBorder: isDark ? 'rgba(113, 119, 144, 0.5)' : 'rgba(51, 38, 201, 0.2)',
        searchBorderHover: isDark ? '#6e48aa' : '#3326c9',
        searchBorderFocus: isDark ? '#00e5ff' : '#3326c9',
        searchHoverShadow: isDark ? 'rgba(110, 72, 170, 0.2)' : 'rgba(51, 38, 201, 0.2)',
        searchFocusShadow: isDark ? 'rgba(110, 72, 170, 0.3)' : 'rgba(51, 38, 201, 0.3)',

        // Post component
        postBackground: isDark ? 'rgba(26, 27, 47, 0.7)' : 'rgba(255, 255, 255, 0.9)',
        postButtonGradient: `linear-gradient(135deg, ${isDark ? '#6e48aa' : '#6366f1'} 0%, ${isDark ? '#00e5ff' : '#8b5cf6'} 100%)`,
        postButtonHoverGradient: `linear-gradient(135deg, ${isDark ? '#00e5ff' : '#8b5cf6'} 0%, ${isDark ? '#6e48aa' : '#6366f1'} 100%)`,

        // Action buttons
        photoButton: {
          bg: isDark ? 'rgba(110, 72, 170, 0.2)' : '#E6ECFF',
          color: isDark ? '#b794f4' : '#3326c9',
          hoverBg: isDark ? 'rgba(110, 72, 170, 0.4)' : '#6366f1',
          hoverColor: '#ffffff'
        },
        emojiButton: {
          bg: isDark ? 'rgba(214, 158, 46, 0.2)' : '#fef3c7',
          color: isDark ? '#f6ad55' : '#d97706',
          hoverBg: isDark ? 'rgba(214, 158, 46, 0.4)' : '#d97706',
          hoverColor: '#ffffff'
        },
        tagButton: {
          bg: isDark ? 'rgba(139, 92, 246, 0.2)' : '#f3e8ff',
          color: isDark ? '#a78bfa' : '#8b5cf6',
          hoverBg: isDark ? 'rgba(139, 92, 246, 0.4)' : '#8b5cf6',
          hoverColor: '#ffffff'
        },
        linkButton: {
          bg: isDark ? 'rgba(37, 99, 235, 0.2)' : '#dbeafe',
          color: isDark ? '#93c5fd' : '#2563eb',
          hoverBg: isDark ? 'rgba(37, 99, 235, 0.4)' : '#2563eb',
          hoverColor: '#ffffff'
        }
      },
      action: {
        hover: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)', // Standard Material-UI hover values
        selected: isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.08)',
        disabled: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.26)',
      },
    },

    typography: {
      fontFamily: typography.fontFamily.join(","),
      // fontColor: typography.fontColor, // Removed as it is not a valid property
      fontWeightRegular: typography.fontWeight.regular,
      fontWeightMedium: typography.fontWeight.medium,
      // Removed fontWeightSemiBold as it is not a valid property
      fontWeightBold: typography.fontWeight.bold,

      // Heading styles
      h1: { fontSize: typography.fontSize.xxxxlarge, fontWeight: 700 },
      h2: { fontSize: typography.fontSize.xxxlarge, fontWeight: 700 },
      h3: { fontSize: typography.fontSize.xxlarge, fontWeight: 600 },
      h4: { fontSize: typography.fontSize.xlarge, fontWeight: 600 },
      h5: { fontSize: typography.fontSize.large, fontWeight: 500 },
      h6: { fontSize: typography.fontSize.medium, fontWeight: 500 },

      // Text styles
      subtitle1: { fontSize: typography.fontSize.default },
      subtitle2: { fontSize: typography.fontSize.small },
      body1: { fontSize: typography.fontSize.default },
      body2: { fontSize: typography.fontSize.small }
    },

    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isDark ? '#1a1b2f' : '#ffffff',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            margin: '16px auto',
            width: 'calc(100vw - 32px)',
            boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.1)',
            border: `1px solid ${isDark ? 'rgba(113, 119, 144, 0.25)' : 'rgba(51, 38, 201, 0.1)'}`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(51, 38, 201, 0.15)'
            }
          }
        }
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)',
              border: `1px solid ${isDark ? 'rgba(113, 119, 144, 0.5)' : 'rgba(51, 38, 201, 0.2)'}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: isDark ? '#6e48aa' : '#3326c9',
                boxShadow: `0 0 0 2px ${isDark ? 'rgba(110, 72, 170, 0.2)' : 'rgba(51, 38, 201, 0.2)'}`
              },
              '&.Mui-focused': {
                borderColor: isDark ? '#00e5ff' : '#3326c9',
                boxShadow: `0 0 0 3px ${isDark ? 'rgba(110, 72, 170, 0.3)' : 'rgba(51, 38, 201, 0.3)'}`
              }
            },
            '& .MuiInputBase-input': {
              padding: '6px 8px',
              '&::placeholder': {
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(3, 1, 19, 0.6)',
                opacity: 1
              }
            }
          }
        }
      },

      MuiButton: {
        styleOverrides: {
          root: () => ({
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 600,
            padding: '8px 20px',
            transition: 'all 0.3s ease',
          }),
          contained: () => ({
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transform: 'translateY(-2px)',
            },
          }),
        },
        variants: [], // ✅ required to satisfy type definition
      },

      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: '12px',
            background: isDark ? 'rgba(26, 27, 47, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${isDark ? 'rgba(113, 119, 144, 0.25)' : 'rgba(0, 0, 0, 0.1)'}`,
            boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)'
          }
        }
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            margin: '4px 8px',
            padding: '10px 16px',
            transition: 'all 0.2s ease',
            '&:hover': {
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'
            }
          }
        }
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            padding: '20px',
            background: isDark ? 'rgba(26, 27, 47, 0.5)' : '#ffffff',
            border: `1px solid ${isDark ? 'rgba(113, 119, 144, 0.25)' : 'rgba(0, 0, 0, 0.1)'}`,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)'
            }
          }
        }
      }
    },

    // Shape defaults
    shape: {
      borderRadius: 4
    },

    // Transitions
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  };
};
export { theme, typography };
declare module '@mui/material/styles' {
  interface Palette {

    accent: {
      main: string;
      contrastText: string;
    };
    custom?: {
      searchBackground?: string;
      searchBorder?: string;
      searchBorderHover?: string;
      searchBorderFocus?: string;
      postButtonGradient?: string;
      postButtonHoverGradient?: string;
      photoButton?: {
        bg?: string;
        color?: string;
        hoverBg?: string;
        hoverColor?: string;
      };
      emojiButton?: {
        bg?: string;
        color?: string;
        hoverBg?: string;
        hoverColor?: string;
      };
      tagButton?: {
        bg?: string;
        color?: string;
        hoverBg?: string;
        hoverColor?: string;
      };
      linkButton?: {
        bg?: string;
        color?: string;
        hoverBg?: string;
        hoverColor?: string;
      };

      searchHoverShadow?: string;
      searchFocusShadow?: string;
      accentGradient?: string;
      postBackground?: string;

    };
    typography?: {
      fontFamily: any;
      fontSize: {
        small: string;
        default: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
        xxxxlarge: string;
        xxxxxlarge: string;
      };
      fontWeight: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      fontStyle: {
        normal: string;
        italic: string;
      };

      fontColor: {
        text_100: string;
        text_75: string;
        text_50: string;
        text_25: string;
        text_10: string;
      };
    }
  }

  interface PaletteOptions {
    searchBorder?: string;
    accent: {
      main: string;
      contrastText: string;
    };
    custom?: {
      searchBackground?: string;
      searchBorder?: string;
      searchBorderHover?: string;
      searchBorderFocus?: string;
      postButtonGradient?: string;
      postButtonHoverGradient?: string;
      photoButton?: {
        bg?: string;
        color?: string;
        hoverBg?: string;
        hoverColor?: string;
      };
      emojiButton?: {
        bg?: string;
        color?: string;
        hoverBg?: string;
        hoverColor?: string;
      };
      tagButton?: {
        bg?: string;
        color?: string;
        hoverBg?: string;
        hoverColor?: string;
      };
      linkButton?: {
        bg?: string;
        color?: string;
        hoverBg?: string;
        hoverColor?: string;
      };

      searchHoverShadow?: string;
      searchFocusShadow?: string;
      accentGradient?: string;
      postBackground?: string;

    };
    typography?: {
      fontFamily: any;
      fontSize: {
        small: string;
        default: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
        xxxxlarge: string;
        xxxxxlarge: string;
      };
      fontWeight: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      fontStyle: {
        normal: string;
        italic: string;
      };

      fontColor: {
        text_100: string;
        text_75: string;
        text_50: string;
        text_25: string;
        text_10: string;
      };
    }
  }
}

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

// theme.d.ts


// declare module '@mui/material/styles' {
//   interface Palette {
//     custom: {
//       accentGradient: string;
//       searchBackground: string;
//       searchBorder: string;
//       searchBorderHover: string;
//       searchBorderFocus: string;
//       searchHoverShadow: string;
//       searchFocusShadow: string;
//       postBackground: string;
//       postButtonGradient: string;
//       postButtonHoverGradient: string;
//       photoButton: {
//         bg: string;
//         color: string;
//         hoverBg: string;
//         hoverColor: string;
//       };
//       emojiButton: {
//         bg: string;
//         color: string;
//         hoverBg: string;
//         hoverColor: string;
//       };
//       tagButton: {
//         bg: string;
//         color: string;
//         hoverBg: string;
//         hoverColor: string;
//       };
//       linkButton: {
//         bg: string;
//         color: string;
//         hoverBg: string;
//         hoverColor: string;
//       };
//     };
//     accent: {
//       main: string;
//       contrastText: string;
//     };
//   }

//   interface PaletteOptions {
//     custom?: {
//       accentGradient?: string;
//       searchBackground?: string;
//       searchBorder?: string;
//       searchBorderHover?: string;
//       searchBorderFocus?: string;
//       searchHoverShadow?: string;
//       searchFocusShadow?: string;
//       postBackground?: string;
//       postButtonGradient?: string;
//       postButtonHoverGradient?: string;
//       photoButton?: {
//         bg?: string;
//         color?: string;
//         hoverBg?: string;
//         hoverColor?: string;
//       };
//       emojiButton?: {
//         bg?: string;
//         color?: string;
//         hoverBg?: string;
//         hoverColor?: string;
//       };
//       tagButton?: {
//         bg?: string;
//         color?: string;
//         hoverBg?: string;
//         hoverColor?: string;
//       };
//       linkButton?: {
//         bg?: string;
//         color?: string;
//         hoverBg?: string;
//         hoverColor?: string;
//       };
//     };
//     accent?: {
//       main?: string;
//       contrastText?: string;
//     };
//   }
// }


// theme.d.ts or index.d.ts (any global type file)
import '@mui/material/styles';

