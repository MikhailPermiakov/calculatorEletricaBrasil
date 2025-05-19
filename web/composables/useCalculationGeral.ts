import type {GeralType} from "~/types/formResultTypes";
import {FasesEnum} from "~/types/formResultEnums";
import {BreakerEnum, FormSelectVoltageEnum, PolarityEnum} from "~/types/formSelectEnums";

export const useCalculationGeral = (demandaMaxima: number, fases: FasesEnum): GeralType => {
    let voltage = 0
    let current = 0
    let polarity: PolarityEnum = PolarityEnum.Unipolar
    let breaker: BreakerEnum = BreakerEnum.A10
    switch (fases) {
        case FasesEnum.Monofasico:
            voltage = +FormSelectVoltageEnum.V127;
            polarity = PolarityEnum.Unipolar
            break
        case FasesEnum.Bifasico:
            voltage = +FormSelectVoltageEnum.V220;
            polarity = PolarityEnum.Bipolar
            break
        case FasesEnum.Trifasico:
            voltage = +FormSelectVoltageEnum.V380;
            polarity = PolarityEnum.Tripolar
            break
    }
    current = demandaMaxima / voltage;

    for (const value of Object.values(BreakerEnum)) {
        if (+value >= current) {
            breaker = value;
            break;
        }
    }

    return {breaker, polarity}
}