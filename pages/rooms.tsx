import { Container, SimpleGrid } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import messages from "../lib/i18n/messages";
import { StatsCard } from "./RoomPreview";

const Rooms: NextPage = () => {
  const { query } = useRouter();
  const { formatMessage } = useIntl();
  return (
    <>
      <Head>
        <title>
          {formatMessage(messages["header.links.rooms"])} | Famatch.io
        </title>
      </Head>

      <Container size="xl">
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "lg", cols: 3, spacing: "lg" },
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Rooms;
