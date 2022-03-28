import { Container, SimpleGrid } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useIntl } from "react-intl";
import { BadgeCard } from "../components/Home/Rooms";
import { serviceIcons } from "../lib/common/constant";
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

      <Container size="xl">
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {serviceIcons.map((data) => (
            <BadgeCard key={data.title} {...data} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
