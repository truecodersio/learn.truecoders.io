import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif"
  ],
  headerWeight: "600",
  bodyFontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif"
  ],
  bodyWeight: "500",
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400", "400i", "500", "500i", "600", "600i", "700", "700i"]
    }
  ]
});

export default typography;
