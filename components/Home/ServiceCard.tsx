import { Button, Card, createStyles, Group, Image, Text } from "@mantine/core";
import { orderBy } from "lodash";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { ServiceData } from "../../lib/common/constant";
import { ROUTES } from "../../lib/router/routes";
import EnrollModal from "./EnrollModal";
import StatButton from "./StatButton";

const useStyles = createStyles((theme) => ({
  card: {},

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    padding: theme.spacing.md,
  },

  scroll: {
    flexGrow: 1,
  },

  priceSection: {
    textAlign: "center",
  },
  badge: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3],
    borderRadius: theme.radius.md,
  },
}));

export const ServiceCard: FC<{ service: ServiceData }> = ({ service }) => {
  const { slug, image, title, stat } = service;
  const { push } = useRouter();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const onClose = () => {
    setOpened(false);
  };
  const onOpen = () => {
    setOpened(true);
  };

  return (
    <>
      <EnrollModal
        service={{
          ...service,
          // TODO, sort this in server side
          planTeirs: orderBy(service.planTeirs, (e) => e.accountCount, "desc"),
        }}
        opened={opened}
        onClose={onClose}
        onOpen={onOpen}
      />
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group position="center">
            <Text size="lg" weight={500}>
              {`${title}`}
            </Text>
          </Group>
        </Card.Section>

        {/* <Card.Section className={cx(classes.section)}>
          <Group grow position="center">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </Group>

          <Stack align="center" justify="center" className={classes.scroll}>
            <div>
              {planTeirs.map((tier) => (
                <div key={tier.name} className={classes.priceSection}>
                  <Text weight="bold">
                    {` ${tier.priceMap.symbol}${
                      tier.priceMap.monthly ?? tier.priceMap.yearly
                    }${tier.priceMap.ccy} / ${
                      tier.priceMap.monthly ? "month" : "year"
                    }`}
                  </Text>
                  <Text color="dimmed" size="sm">
                    {tier.name} {tier.accountCount}人
                  </Text>
                </div>
              ))}
            </div>
          </Stack>
        </Card.Section> */}

        <Card.Section className={classes.section}>
          <Group position="apart" direction="row">
            <StatButton
              label="空缺"
              count={stat.room}
              color="blue"
              onClick={() => {
                push({
                  pathname: ROUTES.rooms,
                  query: {
                    service: slug,
                    tabId: 0, // rooms tab
                  },
                });
              }}
            />

            <StatButton
              label="等候名單"
              count={stat.queue}
              color="red"
              onClick={() => {
                push({
                  pathname: ROUTES.rooms,
                  query: {
                    service: slug,
                    tabId: 1, // queues tab
                  },
                });
              }}
            />
          </Group>
        </Card.Section>

        <Group mt="xs">
          <Button
            variant="gradient"
            color="yellow"
            radius="md"
            size="xl"
            gradient={{
              from: "orange",
              to: "yellow",
              deg: 35,
            }}
            style={{ flex: 1 }}
            onClick={() => setOpened(true)}
          >
            立即開始
          </Button>
        </Group>
      </Card>
    </>
  );
};
