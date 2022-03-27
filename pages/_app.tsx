import { ColorScheme } from "@mantine/core";
import { getCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import FamatchAppShell from "../components/shared/FamatchAppShell";
import NextIntlProvider from "../lib/i18n/NextReactIntlProvider";
import NextMantineProvider from "../lib/mantine/NextMantineProvider";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Famatch.io</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <NextIntlProvider>
        <NextMantineProvider defaultColorScheme={props.colorScheme}>
          <FamatchAppShell>
            <Component {...pageProps} />
          </FamatchAppShell>
        </NextMantineProvider>
      </NextIntlProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});
