import type {padraoTableType} from "~/types/dataBaseTypes";
import {ZonaElectrificationEnum} from "~/types/formSelectEnums";
import {BreakerPadraoEnum, FasesEnum, PolarityPadraoEnum} from "~/types/formResultEnums";

export const padraoTable: padraoTableType[] = [
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 65,
        demandaMax: 75,
        fases: FasesEnum.Trifasico,
        breaker: BreakerPadraoEnum.A200,
        polarity: PolarityPadraoEnum.Pre_reunido,
        cableDiameter: {terra: 35, fase: 95, neutro: 50}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 47,
        demandaMax: 65,
        fases: FasesEnum.Trifasico,
        breaker: BreakerPadraoEnum.A175,
        polarity: PolarityPadraoEnum.Pre_reunido,
        cableDiameter: {terra: 35, fase: 95, neutro: 50}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 38,
        demandaMax: 47,
        fases: FasesEnum.Trifasico,
        breaker: BreakerPadraoEnum.A125,
        polarity: PolarityPadraoEnum.Pre_reunido,
        cableDiameter: {terra: 35, fase: 50, neutro: 25}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 24,
        demandaMax: 38,
        fases: FasesEnum.Trifasico,
        breaker: BreakerPadraoEnum.A100,
        polarity: PolarityPadraoEnum.Pre_reunido,
        cableDiameter: {terra: 16, fase: 35, neutro: 25}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 19,
        demandaMax: 24,
        fases: FasesEnum.Trifasico,
        breaker: BreakerPadraoEnum.A63,
        polarity: PolarityPadraoEnum.Bipolar_concentrico,
        cableDiameter: {terra: 16, fase: 25, neutro: 25}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 15,
        demandaMax: 19,
        fases: FasesEnum.Trifasico,
        breaker: BreakerPadraoEnum.A50,
        polarity: PolarityPadraoEnum.Bipolar_concentrico,
        cableDiameter: {terra: 16, fase: 10, neutro: 10}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 10,
        demandaMax: 15,
        fases: FasesEnum.Trifasico,
        breaker: BreakerPadraoEnum.A40,
        polarity: PolarityPadraoEnum.Bipolar_concentrico,
        cableDiameter: {terra: 16, fase: 10, neutro: 10}
    },
    {
        zona: ZonaElectrificationEnum.Rural,
        demandaMin: 10,
        demandaMax: 15,
        fases: FasesEnum.Bifasico,
        breaker: BreakerPadraoEnum.A63,
        polarity: PolarityPadraoEnum.Bipolar_concentrico,
        cableDiameter: {terra: 16, fase: 16, neutro: 16}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 8,
        demandaMax: 10,
        fases: FasesEnum.Bifasico,
        breaker: BreakerPadraoEnum.A50,
        polarity: PolarityPadraoEnum.Bipolar_concentrico,
        cableDiameter: {terra: 10, fase: 10, neutro: 10}
    },
    {
        zona: ZonaElectrificationEnum.Rural,
        demandaMin: 0,
        demandaMax: 10,
        fases: FasesEnum.Bifasico,
        breaker: BreakerPadraoEnum.A40,
        polarity: PolarityPadraoEnum.Bipolar_concentrico,
        cableDiameter: {terra: 10, fase: 6, neutro: 6}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 5,
        demandaMax: 8,
        fases: FasesEnum.Monofasico,
        breaker: BreakerPadraoEnum.A63,
        polarity: PolarityPadraoEnum.Bipolar_concentrico,
        cableDiameter: {terra: 10, fase: 16, neutro: 16}
    },
    {
        zona: ZonaElectrificationEnum.Urbana,
        demandaMin: 0,
        demandaMax: 5,
        fases: FasesEnum.Monofasico,
        breaker: BreakerPadraoEnum.A40,
        polarity: PolarityPadraoEnum.Bipolar_concentrico,
        cableDiameter: {terra: 6, fase: 6, neutro: 6}
    },
]