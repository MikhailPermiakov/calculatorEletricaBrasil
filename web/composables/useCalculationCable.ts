import {cableDiameterTable} from "~/database/cableDiameterTable";
import {BreakerEnum, FormSelectApplianceEnum} from "~/types/formSelectEnums";

export const useCalculationCable = (current:  BreakerEnum, appliance: FormSelectApplianceEnum): number | undefined => {
    for (const value of Object.values(cableDiameterTable)) {
        if (+current < value.current) {
            if (appliance === FormSelectApplianceEnum.Pontos_de_luz) {
                return value.current <= 17.5 ? 1.5 : value.diameter
            } else {
                return value.current <= 24 ? 2.5 : value.diameter
            }
        }
    }
}