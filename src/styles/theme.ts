import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "gray.500",
      },
    },
  },
  colors: {
    gray: {
      "500": "#47585b",
      "300": "#999999",
      "50": "#dadada",
    },
    white: {
      "100": "#ffffff",
      "50": "#f5f8fa",
    },
    black: {
      "100": "#000000",
    },
    yellow: {
      "100": "#ffba08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});
