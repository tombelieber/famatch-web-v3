import { Container, Group, Paper, Text } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

type SettingListItemProps = {
  icon: JSX.Element;
  text: string;
};

const SettingListItem: FC<PropsWithChildren<SettingListItemProps>> = ({
  children,
  icon,
  text,
}) => {
  return (
    <>
      <Paper
        radius="md"
        withBorder
        sx={() => ({
          backgroundColor: "transparent",
          height: 52,
        })}
      >
        <Container
          py={8}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
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
