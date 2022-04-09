import { Avatar, Button, Group, Paper, Stack, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { differenceInDays } from "date-fns";
import type { FC } from "react";
import { QueueData } from "../../lib/common/constant";

type QueueCardProps = {} & QueueData;

const QueueCard: FC<QueueCardProps> = ({
  createdAt,
  id,
  service,
  expiredAt,
}) => {
  const modals = useModals();

  // expiryDate from now in days
  const daysLeft = differenceInDays(expiredAt, new Date());

  const handleCancle = () =>
    modals.openConfirmModal({
      title: "Cancel queuing",
      children: (
        <Text size="sm">
          This will cancel your queuing for the queue. Are you sure?
        </Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
      centered: true,
    });

  return (
    <Paper withBorder p="lg">
      <Stack>
        <Group>
          <Avatar
            radius="lg"
            size="lg"
            alt={service.name}
            src={service.image}
          />
          <Text
            align="right"
            style={{ flex: 1 }}
            color="dimmed"
          >{`刊登日期：餘下${daysLeft}天`}</Text>
        </Group>

        <Group>
          <Button
            variant="outline"
            radius="md"
            sx={{ flex: 1 }}
            onClick={handleCancle}
          >
            Cancel
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
};

export default QueueCard;
