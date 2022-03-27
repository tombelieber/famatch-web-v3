import { createStyles, Switch, useMantineColorScheme } from "@mantine/core";
import type { FC } from "react";
import { MoonStars, Sun } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    "& *": {
      cursor: "pointer",
    },
  },

  icon: {
    pointerEvents: "none",
    position: "absolute",
    zIndex: 1,
    top: 6,
  },

  iconLight: {
    left: 6,
    color: theme.white,
  },

  iconDark: {
    right: 6,
    color: theme.colors.gray[6],
  },
}));

type ColorSchemeToggleSwitchProps = {};

const ColorSchemeToggleSwitch: FC<ColorSchemeToggleSwitchProps> = () => {
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div className={classes.root}>
      <Sun className={cx(classes.icon, classes.iconLight)} size={18} />
      <MoonStars className={cx(classes.icon, classes.iconDark)} size={18} />
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        size="lg"
      />
    </div>
  );
};

export default ColorSchemeToggleSwitch;
