import { Container, createStyles, SimpleGrid, Tabs } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { useIntl } from "react-intl";
import { MessageCircle, Photo } from "tabler-icons-react";
import QueueCard from "../components/Rooms/QueueCard";
import RoomPreviewCard from "../components/Rooms/RoomPreviewCard";
import { queueData, roomsData } from "../lib/common/constant";
import messages from "../lib/i18n/messages";

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    [theme.fn.smallerThan("sm")]: {
      padding: 0,
    },
  },
  tabContainer: {
    [theme.fn.smallerThan("sm")]: {
      flexGrow: 1,
      padding: 0,
    },
    [theme.fn.largerThan("sm")]: { flexGrow: 0 },
  },
}));

const Rooms: NextPage = () => {
  const { classes } = useStyles();

  const { query } = useRouter();

  const { formatMessage } = useIntl();

  const WrappedChild: FC<{ children: ReactNode }> = ({ children }) => (
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
      {children}
    </SimpleGrid>
  );

  return (
    <>
      <Head>
        <title>
          {formatMessage(messages["header.links.rooms"])} | Famatch.io
        </title>
      </Head>

      <Container size="xl" className={classes.container}>
        <Tabs initialTab={Number(query.tabId ?? 0)}>
          <Tabs.Tab
            className={classes.tabContainer}
            label={formatMessage(messages["header.links.rooms"])}
            icon={<Photo size={14} />}
          >
            <WrappedChild>
              {roomsData.map((room) => (
                <RoomPreviewCard key={room.id} {...room} />
              ))}
            </WrappedChild>
          </Tabs.Tab>
          <Tabs.Tab
            className={classes.tabContainer}
            label={formatMessage(messages["header.links.queues"])}
            icon={<MessageCircle size={14} />}
          >
            <WrappedChild>
              {queueData.map((queue) => (
                <QueueCard key={queue.id} {...queue} />
              ))}
            </WrappedChild>
          </Tabs.Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Rooms;
