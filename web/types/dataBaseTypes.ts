import type {ZonaElectrificationEnum} from "~/types/formSelectEnums";
import type { PolarityPadraoEnum, BreakerPadraoEnum, FasesEnum} from "~/types/formResultEnums";

export interface cableDiameterTableType {
    current: number
    diameter: number
}

export interface fatorDemandaTugLuzTableType {
    powerMin: number
    powerMax: number
    fator: number
}

export interface fatorDemandaTueTableType {
    quantity: number
    fator: number
}

export interface cableDiameterType {
    terra: number
    fase: number
    neutro: number
}

export interface padraoTableType {
    zona: ZonaElectrificationEnum
    demandaMin: number
    demandaMax: number
    fases: FasesEnum
    breaker: BreakerPadraoEnum
    polarity: PolarityPadraoEnum
    cableDiameter: cableDiameterType

}