import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { getCookie, setCookies } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import { HeaderAction } from "../components/Header";
import English from "../content/compiled-locales/en.json";
import Chinese from "../content/compiled-locales/zh.json";
import { headerLinks } from "../lib/common/constant";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme,
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookies("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "zh":
        return Chinese;
      case "en":
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <IntlProvider
            locale={shortLocale}
            messages={messages}
            onError={() => null}
          >
            <AppShell
              fixed
              header={<HeaderAction links={headerLinks} />}
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
            >
              {/* Your application here */}
              <Component {...pageProps} />
            </AppShell>
          </IntlProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});
