import { BreakerEnum } from "~/types/formSelectEnums";

export const useSelectionBreaker = (voltage: number, multiplier: number = 1): number | undefined => {
    const fullVoltage = voltage * multiplier;
    for (const value of Object.values(BreakerEnum)) {
        if (+value >= fullVoltage) return +value;
    }
}