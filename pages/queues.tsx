import { Container, SimpleGrid } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useIntl } from "react-intl";
import QueueCard from "../components/Rooms/QueueCard";
import { queueData } from "../lib/common/constant";
import messages from "../lib/i18n/messages";

const Queues: NextPage = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Head>
        <title>
          {formatMessage(messages["header.links.queues"])} | Famatch.io
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
          {queueData.map((queue) => (
            <QueueCard key={queue.id} {...queue} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Queues;
