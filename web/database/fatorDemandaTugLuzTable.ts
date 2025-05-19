import type {fatorDemandaTugLuzTableType} from "~/types/dataBaseTypes";

export const fatorDemandaTugLuzTable: fatorDemandaTugLuzTableType[] = [
    {powerMin: 10000, powerMax: 20000, fator: 0.24},
    {powerMin: 9001, powerMax: 10000, fator: 0.27},
    {powerMin: 8001, powerMax: 9000, fator: 0.31},
    {powerMin: 7001, powerMax: 8000, fator: 0.35},
    {powerMin: 6001, powerMax: 7000, fator: 0.40},
    {powerMin: 5001, powerMax: 6000, fator: 0.45},
    {powerMin: 4001, powerMax: 5000, fator: 0.52},
    {powerMin: 3001, powerMax: 4000, fator: 0.59},
    {powerMin: 2001, powerMax: 3000, fator: 0.66},
    {powerMin: 1001, powerMax: 2000, fator: 0.75},
    {powerMin: 0, powerMax: 1000, fator: 0.86},
]