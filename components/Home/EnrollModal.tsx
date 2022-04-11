import {
  Avatar,
  Button,
  Group,
  Modal,
  Select,
  Stack,
  Stepper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { rangeFrom } from "../../app/utils";

const ICON_SIZE = 60;
type Role = "owner" | "member";
type RoleOption = {
  value: Role;
  label: string;
};

type EnrollForm = {
  role: RoleOption;
  quota: string;
  fpsId: string;
  frequency: string;
};

const RoleOptions: RoleOption[] = [
  {
    value: "owner",
    label: "Recruit members",
  },
  {
    label: "Join plan",
    value: "member",
  },
];

type EnrollModalProps = {
  opened: boolean;
  onClose: () => void;
  onOpen: () => void;
  service: { name: string; image: string };
};

const EnrollModal: FC<EnrollModalProps> = ({
  opened,
  onClose,
  onOpen,
  service,
}) => {
  const [active, setActive] = useState(0);

  const vacancyOptions = rangeFrom(1, 5).map((value) => ({
    value: String(value),
    label: String(value),
  }));

  const frequencyOptions = [
    {
      value: "monthly",
      label: "Monthly",
    },
    {
      value: "yearly",
      label: "Yearly",
    },
  ];

  const { setValue, watch, reset, control } = useForm<EnrollForm>({
    defaultValues: {},
  });
  useEffect(() => {
    reset();
  }, []);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handlePickRole = (value: RoleOption) => {
    nextStep();
    setValue("role", value);
  };

  const handleClose = () => {
    setActive(0);
    onClose();
  };

  const VacancySelect: FC<{ onChanged?: () => void }> = ({ onChanged }) => (
    <Controller
      control={control}
      name="quota"
      render={({
        field: { onChange, value },
        fieldState: {},
        formState: {},
      }) => (
        <Select
          value={value}
          label="How many vacancies?"
          placeholder="max: 5"
          data={vacancyOptions}
          onChange={(_value) => {
            onChange(_value);

            onChanged?.();
          }}
        />
      )}
    />
  );

  const FrequencySelect: FC<{ onChanged?: () => void }> = ({ onChanged }) => (
    <Controller
      control={control}
      name="frequency"
      render={({
        field: { onChange, value },
        fieldState: {},
        formState: {},
      }) => (
        <Select
          value={value}
          label="Subscribe Frequency"
          placeholder="e.g. monthly, yearly"
          data={frequencyOptions}
          onChange={(_value) => {
            onChange(_value);
            onChanged?.();
          }}
        />
      )}
    />
  );

  const OwnerForm = () => (
    <>
      <VacancySelect />
      <TextInput
        label="收款用FPS"
        placeholder="手提電話號碼、電郵地址、FPS 識別碼（Proxy ID）"
      />
      <Button>Create Room</Button>
    </>
  );

  const MemberForm = () => (
    <>
      <div>
        <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
          {`$168.00 / ${watch("frequency")}`}
        </Text>
        <Text
          size="sm"
          color="dimmed"
          weight={500}
          sx={{ lineHeight: 1 }}
          mt={3}
        >
          per day
        </Text>
      </div>

      <FrequencySelect />

      <Button>Add to Waitlist</Button>
    </>
  );

  return (
    <Modal
      centered
      opened={opened}
      onClose={handleClose}
      withCloseButton={false}
      // size="lg"
    >
      {/* Modal content */}
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        contentPadding="lg"
      >
        <Stepper.Step
          label="First step"
          description={
            watch("role") ? watch("role").label : "Recruiter or seeker?"
          }
        >
          <Group grow position="apart" sx={{ height: 120 }}>
            {RoleOptions.map((option) => (
              <Button
                key={option.value}
                size="xl"
                variant={
                  watch("role")?.value === option.value ? "filled" : "light"
                }
                onClick={() => handlePickRole(option)}
              >
                {option.label}
              </Button>
            ))}
          </Group>
        </Stepper.Step>

        <Stepper.Completed>
          <Stack>
            <Stack align="center">
              <Avatar
                size={"xl"}
                radius={ICON_SIZE}
                alt={service.name}
                src={service.image}
              />
              <Title>{service.name}</Title>
            </Stack>

            {watch("role.value") === "owner" ? <OwnerForm /> : <MemberForm />}
          </Stack>
        </Stepper.Completed>
      </Stepper>
    </Modal>
  );
};

export default EnrollModal;
