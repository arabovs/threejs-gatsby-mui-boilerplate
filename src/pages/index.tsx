import React, { useState, useEffect } from "react";
import { Box, Typography, ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveComponent from "../components/ResponsiveComponent";

const theme = createTheme({
  typography: {
    fontFamily: "Kanit", // Replace "Play" with your desired font family
  },
  palette: {
    background: {
      default: "black ", // Set the default background color to black
    },
  },
});

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h5"
          sx={{ marginTop: 1, color: "white", alignText: "center" }}
        >
          Gatsby ThreeJS MUI Boilerplate
        </Typography>
        <ResponsiveComponent />
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
