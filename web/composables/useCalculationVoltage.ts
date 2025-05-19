import type {FormSelectRowType} from "~/types/formSelectTypes";
import {FormSelectApplianceEnum, FormSelectVoltageEnum} from "~/types/formSelectEnums";

export const useCalculationVoltage = (row: FormSelectRowType): FormSelectVoltageEnum | undefined => {
    if (row.appliance === FormSelectApplianceEnum.Pontos_de_luz) {
        return FormSelectVoltageEnum.V127;
    } else {
        return row.voltage as unknown as FormSelectVoltageEnum;
    }
}