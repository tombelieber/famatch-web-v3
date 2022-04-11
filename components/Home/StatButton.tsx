import { Box, BoxProps, MantineColor, Text } from "@mantine/core";
import type { FC } from "react";

type StatButtonProps = {
  count: number;
  label: string;
  color: MantineColor;
} & BoxProps<"div">;

const StatButton: FC<StatButtonProps> = ({ count, label, color, ...props }) => {
  return (
    <Box
      sx={({ colors, spacing, radius }) => ({
        paddingTop: spacing.xs,
        paddingBottom: spacing.xs,
        borderRadius: radius.md,
        flex: 1,
        cursor: "pointer",
        border: `1px solid ${colors[color][1]}`,
      })}
      {...props}
    >
      <Text color={color} align="center" size="lg" weight={500}>
        {count}
      </Text>
      <Text align="center" size="sm" color={color}>
        {label}
      </Text>
    </Box>
  );
};

export default StatButton;
