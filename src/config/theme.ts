export const theme = {
  colors: {
    primary: "#1A1A1A",
    secondary: "#F5F5F5",
    accent: "#C9A86A",
    text: "#333333",
    textLight: "#666666",
    background: "#FFFFFF",
    backgroundAlt: "#FAFAFA",
    border: "#E5E5E5",
    white: "#FFFFFF",
    black: "#000000",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
  },
  typography: {
    fontFamily: {
      sans: "'Inter', system-ui, -apple-system, sans-serif",
      heading: "'Inter', system-ui, -apple-system, sans-serif",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export type Theme = typeof theme;
