import {
  Box,
  BoxProps,
  Button,
  Card,
  createStyles,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useRouter } from "next/router";
import { FC } from "react";
import { ServiceData, ServiceStat } from "../../lib/common/constant";
import { ROUTES } from "../../lib/router/routes";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    padding: theme.spacing.md,
  },

  badge: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3],
    borderRadius: theme.radius.md,
  },
}));

export function ServiceCard({ slug, image, title, stat }: ServiceData) {
  const { push } = useRouter();
  const { classes } = useStyles();
  const modals = useModals();

  const openJoinModal = () => {
    modals.openModal({
      title,
      children: <>custom component ehre</>,
      centered: true,
    });
  };

  const MyBadge: FC<{ data: ServiceStat } & BoxProps<"div">> = ({
    data,
    ...props
  }) => (
    <Box
      sx={({ colors, spacing, radius }) => ({
        backgroundColor: colors[data.color][1],
        paddingTop: spacing.xs,
        paddingBottom: spacing.xs,
        borderRadius: radius.md,
        flex: 1,
        cursor: "pointer",
      })}
      {...props}
    >
      <Text color={data.color} align="center" size="lg" weight={500}>
        {data.count}
      </Text>
      <Text
        align="center"
        size="sm"
        color={data.color}
        // color="dimmed"
      >
        {data.label}
      </Text>
    </Box>
  );

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group position="center">
          <Text size="lg" weight={500}>
            {title}
          </Text>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group position="apart" direction="row">
          <MyBadge
            data={stat.room}
            onClick={() => {
              push({
                pathname: ROUTES.rooms,
                query: {
                  service: slug,
                },
              });
            }}
          />

          <MyBadge
            data={stat.matched}
            onClick={() => {
              push({
                pathname: ROUTES.rooms,
                query: {
                  service: slug,
                  match: true,
                },
              });
            }}
          />

          <MyBadge
            data={stat.queue}
            onClick={() => {
              push({
                pathname: ROUTES.queues,
                query: {
                  service: slug,
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
          gradient={{
            from: "orange",
            to: "yellow",
            deg: 35,
          }}
          style={{ flex: 1 }}
          onClick={openJoinModal}
        >
          立即開始
        </Button>
      </Group>
    </Card>
  );
}
