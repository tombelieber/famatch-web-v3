import { Text } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

const PriceSection: FC<
  PropsWithChildren<{
    description?: string;
  }>
> = ({ children, description }) => (
  <div>
    <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
      {children}
    </Text>
    {description && (
      <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
        {description}
      </Text>
    )}
  </div>
);

export default PriceSection;
