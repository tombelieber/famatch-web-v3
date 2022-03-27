import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color:
          theme.colorScheme === "dark"
            ? theme.colors.yellow[4]
            : theme.colors.yellow[4],
      })}
    >
      {colorScheme === "dark" ? <Sun size={24} /> : <MoonStars size={24} />}
    </ActionIcon>
  );
}
