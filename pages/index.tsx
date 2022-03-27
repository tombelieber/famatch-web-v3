import { Center } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useIntl } from "react-intl";
import { AuthenticationForm } from "../components/Auth/AuthenticationForm";
import messages from "../lib/i18n/messages";

const Home: NextPage = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Head>
        <title>
          {formatMessage(messages["header.links.home"])} | Famatch.io
        </title>
      </Head>

      <Center>Home page honey</Center>
    </>
  );
};

export default Home;
