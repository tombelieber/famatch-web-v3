import {
  ActionIcon,
  Avatar,
  AvatarsGroup,
  Badge,
  Button,
  createStyles,
  Group,
  Image,
  Paper,
  Progress,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { FC } from "react";
import { Bell, BellRinging } from "tabler-icons-react";
import { avatarIcon, RoomPreview } from "../../lib/common/constant";
import { ROUTES } from "../../lib/router/routes";

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },

  like: {
    color: theme.colors.yellow[6],
  },
}));

// an array from 1 to n
const getProgress = (n: number) =>
  Array.from(Array(n).keys()).map((i) => i + 1);

const RoomPreviewCard: FC<RoomPreview> = ({
  createdAt,
  id,
  max,
  members,
  paymentStatus,
  service,
  status,
  children,
}) => {
  const { classes } = useStyles();
  const [isSubscribed, toggle] = useToggle(true, [true, false]);
  const { push } = useRouter();
  const handleGoToRoom = () => {
    push({
      pathname: ROUTES.rooms_detail,
      query: { id },
    });
  };

  return (
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
      <Avatar
        size={ICON_SIZE}
        radius={ICON_SIZE}
        className={classes.icon}
        alt={service.name}
        src={service.image}
        imageProps={{ style: { objectFit: "fill" } }}
      />

      <Text align="center" weight={700} className={classes.title}>
        {service.name}
      </Text>
      <Text color="dimmed" align="center" size="sm">
        {`${members.length} / ${max}`}
      </Text>

      <Group position="center" mt="xs">
        <Text size="xs" color="dimmed">
          created at {format(createdAt, "yyyy-MM-dd")}
        </Text>
      </Group>

      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Progress
        </Text>
        <Text size="sm" color="dimmed">
          {new Intl.NumberFormat("default", {
            style: "percent",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(members.length / max)}
        </Text>
      </Group>

      <Progress value={75} mt={5} />

      <Group position="apart" mt="md">
        <AvatarsGroup limit={5} total={getProgress(8).length}>
          {getProgress(8).map((index) => (
            <Avatar key={`avatar-${index}`} src={avatarIcon} />
          ))}
        </AvatarsGroup>
        <Text color="gray" size="xs"></Text>
      </Group>

      {/* <Group position="center" mt="md"></Group> */}

      <Group position="apart" mt="md">
        <Badge color="green">{status}</Badge>
        {/* <Badge   color="orange">
        Full
      </Badge>
      <Badge   color="gray">
        Private
      </Badge> */}

        {/* <Badge   color="red">
        UNPAID
      </Badge> */}

        <Badge color="green">{paymentStatus}</Badge>
      </Group>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} onClick={handleGoToRoom}>
          Show details
        </Button>

        <ActionIcon
          variant={isSubscribed ? "transparent" : "light"}
          color="yellow"
          radius="md"
          size={36}
          onClick={() => {
            toggle();
          }}
        >
          {isSubscribed ? <Bell size={18} /> : <BellRinging size={18} />}
        </ActionIcon>
      </Group>
    </Paper>
  );
};

export default RoomPreviewCard;
