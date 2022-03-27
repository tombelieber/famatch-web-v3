import type { NextPage } from "next";
import Head from "next/head";
import { useIntl } from "react-intl";
import { FaqSimple } from "../components/Settings/FAQ";
import SettingPanel from "../components/Settings/SettingPanel";
import messages from "../lib/i18n/messages";

const Settings: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>
          {formatMessage(messages["header.links.settings"])} | Famatch.io
        </title>
      </Head>

      <SettingPanel />
      <FaqSimple />
    </>
  );
};

export default Settings;
