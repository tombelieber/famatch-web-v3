import { Avatar, Button, Group, Paper, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { format } from "date-fns";
import type { FC } from "react";
import { QueueData } from "../../lib/common/constant";

type QueueCardProps = {} & QueueData;

const QueueCard: FC<QueueCardProps> = ({ createedAt, id, service }) => {
  const modals = useModals();

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
      <Group>
        <Group position="apart">
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
          >{`queued since ${format(createedAt, "yyyy/MM/dd")}`}</Text>
        </Group>

        <Button radius="md" sx={{ flex: 1 }} onClick={handleCancle}>
          Cancel
        </Button>
      </Group>
    </Paper>
  );
};

export default QueueCard;
