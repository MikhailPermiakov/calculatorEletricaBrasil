import type {padraoTableType} from "~/types/dataBaseTypes";
import type {BreakerEnum, PolarityEnum} from "~/types/formSelectEnums";
import type {DpsCurrentEnum} from "~/types/formResultEnums";

export interface FormResultRowType {
    id: number
    aparelho: undefined | string
    potência: undefined | string
    tensão: undefined | string
    corrente: undefined | string
    disjuntor: undefined | string
    polaridade: undefined | string
    cabo_cobre: undefined | string
}

export interface GeralType {
    breaker: BreakerEnum
    polarity: PolarityEnum
}

export interface IdrType {
    breaker: BreakerEnum
    polarity: PolarityEnum
}

export interface DpsType {
    current: DpsCurrentEnum
    quantity: number
}

export interface FormResultType {
    demandaMaxima: undefined | number
    padrao: undefined | padraoTableType
    geral: undefined | GeralType
    idr: undefined | IdrType
    dps: undefined | DpsType
    comment: boolean
}