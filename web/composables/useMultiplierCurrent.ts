import type {FormSelectRowType} from "~/types/formSelectTypes";
import {BaseOfApplianceEnum, FormSelectApplianceEnum} from "~/types/formSelectEnums";

export const useMultiplierCurrent = (row: FormSelectRowType): number => {
    if (row.appliance === FormSelectApplianceEnum.Tomada_uso_especial) {
        if (row.baseOfAppliance === BaseOfApplianceEnum.Nada || row.baseOfAppliance === BaseOfApplianceEnum.Resistencia) {
            return 1;
        } else {
            return 1.2;
        }
    } else {
        if (row.appliance === FormSelectApplianceEnum.Pontos_de_luz
            || row.appliance === FormSelectApplianceEnum.Tomada_uso_geral
            || row.appliance === FormSelectApplianceEnum.Forno
            || row.appliance === FormSelectApplianceEnum.Chuveiro) {
            return 1;
        } else return 1.2;
    }
}