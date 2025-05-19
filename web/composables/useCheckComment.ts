import {FormSelectVoltageEnum, PolarityEnum} from "~/types/formSelectEnums";
import type {FormSelectRowType} from "~/types/formSelectTypes";
import type {GeralType} from "~/types/formResultTypes";

export const useCheckComment = (geral: GeralType, dataForm: FormSelectRowType[]) => {
    if (geral.polarity === PolarityEnum.Unipolar) {
        for (const value of dataForm) {
            if (value.voltage !== FormSelectVoltageEnum.V127) {
                return true
            }
        }
        return false
    } else return false
}