import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { setCookies } from "cookies-next";
import { FC, PropsWithChildren, useCallback, useState } from "react";

type NextMantineProviderProps = {
  defaultColorScheme: ColorScheme;
};

const NextMantineProvider: FC<PropsWithChildren<NextMantineProviderProps>> = ({
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

      document
        .getElementsByName("theme-color")?.[0]
        ?.setAttribute(
          "content",
          nextColorScheme === "dark" ? "#000000" : "#ffffff",
        );
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
            focusRing: "never",
          }}
        >
          <ModalsProvider
            modalProps={{
              styles: (theme) => ({
                modal: { borderRadius: theme.radius.lg },
              }),
            }}
          >
            {children}
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default NextMantineProvider;
