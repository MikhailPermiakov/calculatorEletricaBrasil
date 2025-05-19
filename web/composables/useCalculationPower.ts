import type {FormSelectRowType} from "~/types/formSelectTypes";
import {FormSelectApplianceEnum} from "~/types/formSelectEnums";

export const useCalculationPower = (row: FormSelectRowType): number | undefined => {
    if(row.appliance) {
        if(row.quantity && row.appliance === FormSelectApplianceEnum.Pontos_de_luz) return row.quantity * 100;
        else if(row.quantity && row.appliance === FormSelectApplianceEnum.Tomada_uso_geral) {
            if (row.quantitySocketsInKitchen) {
                if (row.quantitySocketsInKitchen >= 3) {
                    return (row.quantity * 100) + (3*600) + ((row.quantitySocketsInKitchen-3) * 100);
                } else {
                    return (row.quantity * 100) + (row.quantitySocketsInKitchen * 600);
                }
            } else return row.quantity * 100

        } else if (row.power) {
            return row.power;
        }
    } else return 0;
}