import {fatorDemandaTueTable} from "~/database/fatorDemandaTueTable";
import {fatorDemandaTugLuzTable} from "~/database/fatorDemandaTugLuzTable";

export const useCalculationDemandaMaxima = (arrayTugLuz: number[], arrayTue: number[]): number => {
    let powerTugLuz: number = 0;
    let powerTue: number = 0;
    let multiplierTugLuz: number = 0;
    let multiplierTue: number = 0;
    let demandaTugLuz: number = 0;
    let demandaTue: number = 0;

    for (const value of arrayTugLuz) {
        powerTugLuz += value;
    }
    for (const value of fatorDemandaTugLuzTable) {
        if (powerTugLuz >= value.powerMin && powerTugLuz <= value.powerMax) {
            multiplierTugLuz = value.fator;
            break;
        }
    }
    demandaTugLuz = powerTugLuz * multiplierTugLuz;

    for (const value of arrayTue) {
        powerTue += value;
    }
    for (const value of fatorDemandaTueTable) {
        if (value.quantity === arrayTue.length) {
            multiplierTue = value.fator;
            break;
        }
    }
    demandaTue = powerTue * multiplierTue;

    return demandaTugLuz + demandaTue;
}