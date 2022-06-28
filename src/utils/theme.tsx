import { extendTheme } from "@chakra-ui/react";
import { createTheme } from "@mui/material/styles";
import { create } from "@mui/material/styles/createTransitions";

export const chakraTheme = extendTheme(
  {
    fonts: {
      heading: "'Londrina Sketch', 'cursive'",
      body: "'Average Sans', 'sans-serif'"
    }
  }
);

export const muiTheme = createTheme();
 