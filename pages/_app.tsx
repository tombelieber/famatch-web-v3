import English from "../content/compiled-locales/en.json";
import Chinese from "../content/compiled-locales/zh.json";

import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

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

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <IntlProvider
          locale={shortLocale}
          messages={messages}
          onError={() => null}
        >
          <FormattedMessage defaultMessage="Good Morning" id="greeting" />
          <Component {...pageProps} />
        </IntlProvider>
      </MantineProvider>
    </>
  );
}
