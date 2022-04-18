import {
  Avatar,
  Button,
  Group,
  Modal,
  Stack,
  Stepper,
  Title,
} from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ServiceData } from "../../lib/common/constant";
import MemberForm from "./MemberForm";
import OwnerForm from "./OwnerForm";
import { EnrollForm, RoleOption } from "./useEnrollForm";

const ICON_SIZE = 60;
const RoleOptions: RoleOption[] = [
  {
    label: "For rent",
    value: "owner",
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
  service: ServiceData;
};

const getDefaultValue = (service: ServiceData): Partial<EnrollForm> => ({
  tier: service.planTeirs[0].id.toString(),
  frequency: service.planTeirs[0].offers[0].frequencyOption.value,
});

const EnrollModal: FC<EnrollModalProps> = ({ opened, onClose, service }) => {
  const [active, setActive] = useState(0);

  const methods = useForm<EnrollForm>({
    defaultValues: getDefaultValue(service),
  });
  const { watch, setValue, reset } = methods;
  useEffect(() => {
    reset(getDefaultValue(service));
  }, [service]);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));

  const handlePickRole = (value: RoleOption) => {
    nextStep();
    setValue("role", value);
  };

  const handleClose = () => {
    setActive(0);
    onClose();
  };

  return (
    <Modal
      centered
      opened={opened}
      onClose={handleClose}
      withCloseButton={false}
    >
      {/* Modal content */}
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        contentPadding="lg"
      >
        <Stepper.Step
          label={watch("role") ? watch("role").label : "Recruiter or seeker?"}
        >
          <Group grow position="apart" sx={{ height: 120 }}>
            {RoleOptions.map((option) => (
              <Button
                key={option.value}
                p="xs"
                m="xs"
                size="lg"
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
                size="xl"
                radius={ICON_SIZE}
                alt={service.title}
                src={service.iconImage}
              />
              <Title>{service.title}</Title>
            </Stack>

            <FormProvider {...methods}>
              {watch("role.value") === "owner" ? (
                <OwnerForm service={service} />
              ) : (
                <MemberForm service={service} />
              )}
            </FormProvider>
          </Stack>
        </Stepper.Completed>
      </Stepper>
    </Modal>
  );
};

export default EnrollModal;
