import {
  Badge,
  Button,
  Card,
  createStyles,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { ServiceData } from "../../lib/common/constant";

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
  image,
  title,
  description,
  country,
  badges,
}: ServiceData) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const features = badges.map((badge) => (
    <Badge
      color={badge.color}
      key={badge.label}
      leftSection={badge.emoji}
      rightSection={badge.label}
      size="xl"
    />
  ));

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

          {country && (
            <Badge color="red" size="lg">
              {country}
            </Badge>
          )}
        </Group>
        <Text size="sm" mt="xs" lineClamp={3}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group position="apart" spacing={7}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          瀏覽房間
        </Button>
      </Group>
    </Card>
  );
}
