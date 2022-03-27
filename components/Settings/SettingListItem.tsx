import { Container, Group, Paper, Text } from "@mantine/core";
import type { FC } from "react";

type SettingListItemProps = {
  icon: JSX.Element;
  text: string;
};

const SettingListItem: FC<SettingListItemProps> = ({
  children,
  icon,
  text,
}) => {
  return (
    <>
      <Paper
        radius="md"
        withBorder
        sx={() => ({ backgroundColor: "transparent" })}
      >
        <Container
          py={8}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Group position="left">
            {icon}
            <Text>{text}</Text>
          </Group>

          <Group position="right">{children}</Group>
        </Container>
      </Paper>
    </>
  );
};

export default SettingListItem;
