import type { BaseOfApplianceEnum, FormSelectApplianceEnum, FormSelectVoltageEnum} from '~/types/formSelectEnums';

export interface FormSelectRowType {
    id: number
    appliance: undefined | FormSelectApplianceEnum
    power: undefined | number
    voltage: undefined | FormSelectVoltageEnum
    quantity: undefined | number
    quantitySocketsInKitchen?: undefined | number
    baseOfAppliance?: undefined | BaseOfApplianceEnum
}