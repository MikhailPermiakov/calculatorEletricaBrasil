import type {DpsType, GeralType} from "~/types/formResultTypes";
import {PolarityEnum, ZonaElectrificationEnum} from "~/types/formSelectEnums";
import {DpsCurrentEnum} from "~/types/formResultEnums";

export const useCalculationDps = (geral: GeralType, zone: ZonaElectrificationEnum): DpsType => {
    const current = zone === ZonaElectrificationEnum.Urbana ? DpsCurrentEnum.KA20 : DpsCurrentEnum.KA40;
    let quantity: number = 0;
    switch (geral.polarity) {
        case PolarityEnum.Unipolar:
            quantity = 1
            break
        case PolarityEnum.Bipolar:
            quantity = 2
            break
        case PolarityEnum.Tripolar:
            quantity = 3
    }
    return {current, quantity}
}