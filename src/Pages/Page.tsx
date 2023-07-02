import React from "react";
import { Center, Box, useTheme, Heading } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function Page({ children, title }: Props) {
  const theme = useTheme();

  return (
    <Box
      backgroundColor={theme.colors.dustyPink[300]}
      color={theme.colors.midnightBlue[400]}
      height="100vh"
    >
      <Center display="flex" flexDirection="column">
        <Heading as="h1" mb="8">
          {title}
        </Heading>
        {children}
      </Center>
    </Box>
  );
}
