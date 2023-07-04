import { Box, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
  label: string;
}

export default function Account({ label, ...props }: Props) {
  const inputSx = {
    width: "100%",
    marginBottom: "4",
    borderColor: "midnightBlue.100",
  };

  return (
    <FormLabel>
      <Box>{label}</Box>
      <Input sx={inputSx} {...props} />
    </FormLabel>
  );
}
