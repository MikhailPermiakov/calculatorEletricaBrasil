import type {GeralType, IdrType} from "~/types/formResultTypes";
import {PolarityEnum} from "~/types/formSelectEnums";

export const useCalculationIdr = (geral: GeralType): IdrType => {
    let polarity: PolarityEnum
    if (geral.polarity === PolarityEnum.Unipolar) {
        polarity = PolarityEnum.Bipolar;
    } else polarity = PolarityEnum.Tetrapolar
    return {
        breaker: geral.breaker,
        polarity: polarity
    }
}