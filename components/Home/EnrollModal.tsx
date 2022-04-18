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
import { minBy } from "lodash";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Option } from "../../app/types";
import { formatCurrency, rangeFrom } from "../../app/utils";
import { PlanOffer, ServiceData } from "../../lib/common/constant";

const ICON_SIZE = 60;
type Role = "owner" | "member";
type RoleOption = Option<Role>;

type EnrollForm = {
  role: RoleOption;
  quota: string;
  fpsId: string;

  tier: string;
  frequency: string;
};

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

const EnrollModal: FC<EnrollModalProps> = ({
  opened,
  onClose,
  onOpen,
  service,
}) => {
  const [active, setActive] = useState(0);

  // derive avaiable monthly, yearly or both from PlanTier object

  // get yearly price if yearly is not null, else, multiple month x 12

  const { setValue, watch, reset, control } = useForm<EnrollForm>({
    defaultValues: getDefaultValue(service),
  });
  useEffect(() => {
    reset(getDefaultValue(service));
  }, [service]);

  // * active selected fields
  const activePlanTier =
    service.planTeirs.find((e) => e.id.toString() === watch("tier")) ??
    service.planTeirs[0];

  const activeOffer =
    activePlanTier.offers.find(
      (e) => e.frequencyOption.value === watch("frequency"),
    ) ?? service.planTeirs[0].offers[0];

  const planTierOptions = service.planTeirs.map<Option>(
    ({ name, id, accountCount, offers }) => {
      const minPriceOffer = minBy(offers, (e) => e.price) ?? offers[0];

      const getPrice = (offer: PlanOffer, maxQuota: number) =>
        formatCurrency.format(offer.price / maxQuota);

      const priceRange = `${getPrice(minPriceOffer, accountCount)}/${
        minPriceOffer.frequencyOption.label
      }`;

      return {
        value: id.toString(),
        label: `${name} (最多${accountCount}人/裝置) ${priceRange}`,
      };
    },
  );

  const maxQuota = (activePlanTier.accountCount ?? 2) - 1;

  const vacancyOptions = rangeFrom(1, maxQuota).map<Option>((value) => ({
    value: String(value),
    label: String(value),
  }));

  const frequencyOptions =
    activePlanTier.offers.map<Option>(
      ({ frequencyOption: { label, value } }) => ({
        label,
        value,
      }),
    ) ?? [];

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

  const PlanTierSelect: FC<{ onChanged?: () => void }> = ({ onChanged }) => (
    <Controller
      control={control}
      name="tier"
      render={({ field: { onChange, value } }) => (
        <Select
          value={value}
          label="Plan Tier"
          placeholder="Select a plan tier"
          data={planTierOptions}
          onChange={(_value) => {
            onChange(_value);
            onChanged?.();

            // auto select first offer
            const planTier = service.planTeirs.find(
              (e) => e.id.toString() === _value,
            );
            const offer = planTier?.offers[0];
            if (offer) {
              setValue("frequency", offer?.frequencyOption.value);
            }
          }}
        />
      )}
    />
  );

  const VacancySelect: FC<{ onChanged?: () => void }> = ({ onChanged }) => (
    <Controller
      control={control}
      name="quota"
      render={({ field: { onChange, value } }) => (
        <Select
          value={value}
          label="How many vacancies?"
          placeholder={`max: ${maxQuota}`}
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
      render={({ field: { onChange, value } }) => (
        <Select
          value={value}
          description={
            frequencyOptions.length === 1 ? "only monthly pricing tier" : ""
          }
          disabled={frequencyOptions.length === 1}
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

  const OwnerForm: FC = () => (
    <>
      <PlanTierSelect />
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
          {`${formatCurrency.format(
            activeOffer.price / activePlanTier.accountCount,
          )} / ${activeOffer.frequencyOption.label.toLocaleLowerCase()}`}
        </Text>
      </div>

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
