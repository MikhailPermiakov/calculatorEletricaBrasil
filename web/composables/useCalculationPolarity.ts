import {FormSelectVoltageEnum, PolarityEnum} from "~/types/formSelectEnums";

export const useCalculationPolarity = (current: FormSelectVoltageEnum): PolarityEnum | undefined => {
    switch (current) {
        case FormSelectVoltageEnum.V127:
            return PolarityEnum.Unipolar;
        case FormSelectVoltageEnum.V220:
            return PolarityEnum.Bipolar;
        case FormSelectVoltageEnum.V380:
            return PolarityEnum.Tripolar;
    }
}