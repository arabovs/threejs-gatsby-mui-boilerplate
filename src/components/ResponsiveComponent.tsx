import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import ModelComponent from "./Model";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ResponsiveComponent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container sx={{ marginTop: 1, marginBottom: 1 }}>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {" "}
        {!isSmallScreen && (
          <ModelComponent
            url="/models/chocolate.glb"
            side="left"
            isSmallScreen={isSmallScreen}
          />
        )}
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {" "}
        <ModelComponent
          url="/models/chocolate2.glb"
          side="right"
          isSmallScreen={isSmallScreen}
        />
      </Grid>
    </Grid>
  );
};

export default ResponsiveComponent;
