import {
  Badge,
  Button,
  Card,
  createStyles,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useRouter } from "next/router";
import { ServiceData } from "../../lib/common/constant";
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

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export function ServiceCard({
  slug,
  image,
  title,
  description,
  stat,
}: ServiceData) {
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

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>

          <Badge
            sx={{ cursor: "pointer" }}
            color={stat.matched.color}
            leftSection={stat.matched.label}
            rightSection={stat.matched.count}
            size="lg"
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
        </Group>

        <Text sx={{ height: "4rem" }} size="sm" mt="xs" lineClamp={3}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group position="apart" spacing={7}>
          <Badge
            sx={{ cursor: "pointer" }}
            color={stat.room.color}
            leftSection={stat.room.label}
            rightSection={stat.room.count}
            size="xl"
            onClick={() => {
              push({
                pathname: ROUTES.rooms,
                query: {
                  service: slug,
                },
              });
            }}
          />

          <Badge
            sx={{ cursor: "pointer" }}
            color="red"
            size="xl"
            leftSection={stat.queue.label}
            rightSection={stat.queue.count}
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
