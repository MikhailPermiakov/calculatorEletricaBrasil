import type {ZonaElectrificationEnum} from "~/types/formSelectEnums";
import type {padraoTableType} from "~/types/dataBaseTypes";
import {padraoTable} from "~/database/padraoTable";

export const useCalculationPadrao = (zona: ZonaElectrificationEnum, demanda: number): padraoTableType | undefined => {
    const demandaResult = demanda / 1000;
    for (const value of padraoTable) {
        if (demandaResult > value.demandaMin && demandaResult <= value.demandaMax && zona === value.zona) return value;
    }
}