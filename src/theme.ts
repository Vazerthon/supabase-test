import { extendTheme } from "@chakra-ui/react";

const colors = {
  dustyPink: {
    900: "#d9969f",
    800: "#dda1a9",
    700: "#e2adb4",
    600: "#e6b9bf",
    500: "#eac5ca",
    400: "#eed0d4",
    300: "#f3dcdf",
    200: "#f7e8ea",
    100: "#fcf3f5",
  },
  midnightBlue: {
    900: "#0e1a24",
    800: "#152736",
    700: "#1c3448",
    600: "#233c5a",
    500: "#2a446c",
    400: "#31507e",
    300: "#386690",
    200: "#3f729c",
    100: "#4674a8",
  },
};

const theme = extendTheme({ colors });

export default theme;
