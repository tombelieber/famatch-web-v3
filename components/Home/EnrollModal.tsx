import {
  Avatar,
  Button,
  Group,
  Modal,
  Stack,
  Stepper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { FC, PropsWithChildren, useState } from "react";
import { formatCurrency } from "../../app/utils";
import { ServiceData } from "../../lib/common/constant";
import useEnrollForm, { RoleOption } from "./useEnrollForm";

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

const EnrollModal: FC<EnrollModalProps> = ({ opened, onClose, service }) => {
  const [active, setActive] = useState(0);
  const {
    FrequencySelect,
    PlanTierSelect,
    VacancySelect,
    activeOffer,
    activePlanTier,
    activeQuota,
    formProps,
  } = useEnrollForm(service);

  const { watch, setValue } = formProps;

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

  const OwnerForm: FC = () => (
    <>
      {activeQuota && (
        <PriceSection description="預期收款">
          {`${formatCurrency.format(
            (activeOffer.price / activePlanTier.accountCount) *
              parseInt(activeQuota),
          )} / ${activeOffer.frequencyOption.label.toLocaleLowerCase()}`}
        </PriceSection>
      )}

      <PlanTierSelect />
      <VacancySelect />
      <TextInput
        label="收款用FPS"
        placeholder="手提電話號碼、電郵地址、FPS 識別碼（Proxy ID）"
      />
      <Button>Create Room</Button>
    </>
  );

  const MemberForm: FC = () => (
    <>
      <PriceSection>
        {`${formatCurrency.format(
          activeOffer.price / activePlanTier.accountCount,
        )} / ${activeOffer.frequencyOption.label.toLocaleLowerCase()}`}
      </PriceSection>

      <PlanTierSelect />
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
          label={watch("role") ? watch("role").label : "Recruiter or seeker?"}
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
                alt={service.title}
                src={service.iconImage}
              />
              <Title>{service.title}</Title>
            </Stack>

            {watch("role.value") === "owner" ? <OwnerForm /> : <MemberForm />}
          </Stack>
        </Stepper.Completed>
      </Stepper>
    </Modal>
  );
};

export default EnrollModal;

const PriceSection: FC<
  PropsWithChildren<{
    description?: string;
  }>
> = ({ children, description }) => (
  <div>
    <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
      {children}
    </Text>
    {description && (
      <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
        {description}
      </Text>
    )}
  </div>
);
