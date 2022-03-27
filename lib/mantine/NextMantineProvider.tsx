import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { setCookies } from "cookies-next";
import { FC, useCallback, useState } from "react";

type NextMantineProviderProps = {
  defaultColorScheme: ColorScheme;
};

const NextMantineProvider: FC<NextMantineProviderProps> = ({
  defaultColorScheme,
  children,
}) => {
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(defaultColorScheme);

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      const nextColorScheme =
        value || (colorScheme === "dark" ? "light" : "dark");
      setColorScheme(nextColorScheme);
      // when color scheme is updated save it to cookie
      setCookies("mantine-color-scheme", nextColorScheme, {
        maxAge: 60 * 60 * 24 * 30,
      });
    },
    [colorScheme],
  );

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            primaryColor: "yellow",
          }}
        >
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default NextMantineProvider;
