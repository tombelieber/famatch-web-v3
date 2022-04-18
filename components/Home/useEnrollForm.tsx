import { Select } from "@mantine/core";
import { minBy } from "lodash";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Option } from "../../app/types";
import { formatCurrency, rangeFrom } from "../../app/utils";
import { PlanOffer, ServiceData } from "../../lib/common/constant";

export type Role = "owner" | "member";
export type RoleOption = Option<Role>;
export type EnrollForm = {
  role: RoleOption;
  quota: string;
  fpsId: string;
  tier: string;
  frequency: string;
};

const getDefaultValue = (service: ServiceData): Partial<EnrollForm> => ({
  tier: service.planTeirs[0].id.toString(),
  frequency: service.planTeirs[0].offers[0].frequencyOption.value,
});

export default function useEnrollForm(service: ServiceData) {
  // derive avaiable monthly, yearly or both from PlanTier object
  // get yearly price if yearly is not null, else, multiple month x 12
  const formProps = useForm<EnrollForm>({
    defaultValues: getDefaultValue(service),
  });
  const { setValue, watch, reset, control } = formProps;

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

  const activeQuota = watch("quota");

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

  return {
    activePlanTier,
    activeOffer,
    activeQuota,
    maxQuota,
    PlanTierSelect,
    VacancySelect,
    FrequencySelect,
    formProps,
  };
}
