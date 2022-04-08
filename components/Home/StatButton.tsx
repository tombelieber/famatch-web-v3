import { Box, BoxProps, Text } from "@mantine/core";
import type { FC } from "react";
import { ServiceStat } from "../../lib/common/constant";

type StatButtonProps = { data: ServiceStat } & BoxProps<"div">;

const StatButton: FC<StatButtonProps> = ({ data, ...props }) => {
  return (
    <Box
      sx={({ colors, spacing, radius }) => ({
        paddingTop: spacing.xs,
        paddingBottom: spacing.xs,
        borderRadius: radius.md,
        flex: 1,
        cursor: "pointer",
        border: `1px solid ${colors[data.color][1]}`,
      })}
      {...props}
    >
      <Text color={data.color} align="center" size="lg" weight={500}>
        {data.count}
      </Text>
      <Text align="center" size="sm" color={data.color}>
        {data.label}
      </Text>
    </Box>
  );
};

export default StatButton;
