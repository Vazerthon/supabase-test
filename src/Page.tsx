import React from "react";
import { Center, Box, useTheme } from "@chakra-ui/react";

export default function Page({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <Box
      backgroundColor={theme.colors.brand[900]}
      color={theme.colors.brand[700]}
      height="100vh"
    >
      <Center>{children}</Center>
    </Box>
  );
}
