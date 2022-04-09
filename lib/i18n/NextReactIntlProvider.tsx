import { useRouter } from "next/router";
import { FC, PropsWithChildren, useMemo } from "react";
import { IntlProvider } from "react-intl";
import English from "../../content/compiled-locales/en.json";
import Chinese from "../../content/compiled-locales/zh.json";
type NextReactIntlProviderProps = {};

const NextIntlProvider: FC<PropsWithChildren<NextReactIntlProviderProps>> = ({
  children,
}) => {
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
      {/* @ts-ignore: React 18 issue @https://github.com/formatjs/formatjs/issues/3510 */}
      <IntlProvider
        locale={shortLocale}
        messages={messages}
        onError={() => null}
      >
        {children}
      </IntlProvider>
    </>
  );
};

export default NextIntlProvider;
