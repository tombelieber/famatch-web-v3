import { Button } from "@mantine/core";
import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import { formatCurrency } from "../../app/utils";
import { ServiceData } from "../../lib/common/constant";
import PriceSection from "./PriceSection";
import useEnrollForm, { EnrollForm } from "./useEnrollForm";

type MemberFormProps = { service: ServiceData };

const MemberForm: FC<MemberFormProps> = ({ service }) => {
  const { activeOffer, activePlanTier, PlanTierSelect, FrequencySelect } =
    useEnrollForm(service);

  const { handleSubmit } = useFormContext<EnrollForm>();

  const onSubmit = handleSubmit((formData) => {
    console.log("formData", formData);
  });

  return (
    <>
      <>
        <PriceSection>
          {`${formatCurrency.format(
            activeOffer.price / activePlanTier.accountCount,
          )} / ${activeOffer.frequencyOption.label.toLocaleLowerCase()}`}
        </PriceSection>

        <PlanTierSelect />
        <FrequencySelect />

        <Button onClick={onSubmit}>Add to Waitlist</Button>
      </>
    </>
  );
};

export default MemberForm;
