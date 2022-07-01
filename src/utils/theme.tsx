import { extendTheme } from "@chakra-ui/react";
import { createTheme } from "@mui/material/styles";
import { create } from "@mui/material/styles/createTransitions";

export const chakraTheme = extendTheme(
  {
    fonts: {
      heading: "'Londrina Sketch', 'cursive'",
      // heading: "'Kolker Brush', 'cursive'",
      // heading: "'Rock 3d', 'cursive'",
      body: "'Average Sans', 'sans-serif'"
    }
  }
);

export const darkTheme = createTheme(
  {
    palette: {
      mode: "dark"
    }
  }
);
 