import { Container, SimpleGrid, useMantineColorScheme } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useIntl } from "react-intl";
import usePWA from "../app/hooks/usePWA";
import { ServiceCard } from "../components/Home/ServiceCard";
import { serviceIcons } from "../lib/common/constant";
import messages from "../lib/i18n/messages";

const Home: NextPage = () => {
  usePWA();
  const { colorScheme } = useMantineColorScheme();

  const { formatMessage } = useIntl();
  return (
    <>
      <Head>
        <title>
          {formatMessage(messages["header.links.home"])} | Famatch.io
        </title>
      </Head>

      <Container size="xl">
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "lg", cols: 3, spacing: "lg" },
            { maxWidth: "md", cols: 2, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {serviceIcons.map((data) => (
            <ServiceCard key={data.title} {...data} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
