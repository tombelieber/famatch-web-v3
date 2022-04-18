import { Button, TextInput } from "@mantine/core";
import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { formatCurrency } from "../../app/utils";
import { ServiceData } from "../../lib/common/constant";
import PriceSection from "./PriceSection";
import useEnrollForm, { EnrollForm } from "./useEnrollForm";

type OwnerFormProps = { service: ServiceData };

const OwnerForm: FC<OwnerFormProps> = ({ service }) => {
  const {
    PlanTierSelect,
    VacancySelect,
    activeOffer,
    activePlanTier,
    activeQuota,
  } = useEnrollForm(service);

  const { handleSubmit, control } = useFormContext<EnrollForm>();

  const onSubmit = handleSubmit((formData) => {
    console.log("formData", formData);
  });

  return (
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

      <Controller
        name="fpsId"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="收款用FPS"
            placeholder="手提電話號碼、電郵地址、FPS 識別碼（Proxy ID）"
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
          />
        )}
      />

      <Button onClick={onSubmit}>Create Room</Button>
    </>
  );
};

export default OwnerForm;
