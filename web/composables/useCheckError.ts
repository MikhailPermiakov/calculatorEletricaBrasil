import type {FormSelectRowType} from "~/types/formSelectTypes";
import {CheckErrorEnum, FormSelectApplianceEnum} from "~/types/formSelectEnums";

export const useCheckError = (row: FormSelectRowType): CheckErrorEnum => {
    if (!row.appliance) return CheckErrorEnum.Error;
    if (row.appliance === FormSelectApplianceEnum.Pontos_de_luz) {
        return row.quantity ? CheckErrorEnum.Success : CheckErrorEnum.Error;
    }
    else if (row.appliance === FormSelectApplianceEnum.Tomada_uso_geral) {
        return row.quantity && row.voltage ? CheckErrorEnum.Success : CheckErrorEnum.Error;
    }
    else if (row.appliance === FormSelectApplianceEnum.Tomada_uso_especial) {
        return row.baseOfAppliance && row.power && row.voltage ? CheckErrorEnum.Success : CheckErrorEnum.Error;
    } else {
        return row.power && row.voltage ? CheckErrorEnum.Success : CheckErrorEnum.Error;
    }
}