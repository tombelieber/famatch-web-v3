import { ColorScheme } from "@mantine/core";
import { getCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import FamatchAppShell from "../components/shared/FamatchAppShell";
import NextIntlProvider from "../lib/i18n/NextReactIntlProvider";
import NextMantineProvider from "../lib/mantine/NextMantineProvider";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme } = props;

  return (
    <>
      <Head>
        <title>Famatch.io</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Pay less, play more. Find your family members to share family plan on subscription services, paying 1 price to have multiple services."
        />
        <meta
          name="keywords"
          content="family plan, share, premium, spotify, netflix, account sharing"
        />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/apple-icon.png" />

        <meta
          name="theme-color"
          content={colorScheme === "dark" ? "#000000" : "#ffffff"}
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
