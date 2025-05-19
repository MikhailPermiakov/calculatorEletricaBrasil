<template>
  <div>
    <div class="flex items-center">
      <p class="mr-2">zona eletrificação:</p>
      <URadioGroup
          v-model="zonaElectrification"
          :items="Object.values(ZonaElectrificationEnum)"
          orientation="horizontal"
      />
    </div>
    <div class="mt-2">
      <FormSelectRow
          v-for="(row, index) in dataForm"
          :key="row.id"
          v-model:appliance="row.appliance"
          v-model:power="row.power"
          v-model:voltage="row.voltage"
          v-model:quantity="row.quantity"
          v-model:quantity-sockets-in-kitchen="row.quantitySocketsInKitchen"
          v-model:base-of-appliance="row.baseOfAppliance"
          :index-row="index"
          :class="{isError: errorId === row.id}"
          @delete-row="deleteRow(row.id)"
      />
    </div>
    <div class="flex justify-between">
      <UButton color="secondary" class="my-2" @click="addRow">adicionar</UButton>
      <UButton color="primary" class="my-2" @click="calculate">calcular</UButton>
    </div>

    <UCard v-if="isResult" class="mt-4">
      <template #header>
        <p>Resultado:</p>
      </template>
      <UTable :data="dataResult" class="flex-1"/>
      <template #footer>
        <ResultModule
            :comment
            :demanda-maxima
            :padrao
            :geral
            :idr
            :dps
        />
      </template>
    </UCard>

  </div>
</template>

<script setup lang="ts">
import FormSelectRow from '~/modules/form/components/FormSelectRow.vue';
import type {FormSelectRowType} from '~/types/formSelectTypes';
import type {DpsType, FormResultRowType, GeralType, IdrType} from '~/types/formResultTypes';
import {BreakerEnum, CheckErrorEnum, FormSelectApplianceEnum, ZonaElectrificationEnum} from "~/types/formSelectEnums";
import {useCheckError} from "~/composables/useCheckError";
import {useCalculationPower} from "~/composables/useCalculationPower";
import {useCalculationVoltage} from "~/composables/useCalculationVoltage";
import {useMultiplierCurrent} from "~/composables/useMultiplierCurrent";
import {useSelectionBreaker} from "~/composables/useSelectionBreaker";
import {useCalculationPolarity} from "~/composables/useCalculationPolarity";
import {useCalculationCable} from "~/composables/useCalculationCable";
import ResultModule from "~/modules/result/ResultModule.vue";
import {useCalculationDemandaMaxima} from "~/composables/useCalculationDemandaMaxima";
import {useCalculationPadrao} from "~/composables/useCalculationPadrao";
import type {padraoTableType} from "~/types/dataBaseTypes";
import {useCheckComment} from "~/composables/useCheckComment";
import {useCalculationGeral} from "~/composables/useCalculationGeral";
import {useCalculationIdr} from "~/composables/useCalculationIdr";
import {useCalculationDps} from "~/composables/useCalculationDps";

const FormSelectRowDefault = {
  id: 0,
  appliance: undefined,
  power: undefined,
  voltage: undefined,
  quantity: undefined,
  quantitySocketsInKitchen: undefined,
  baseOfAppliance: undefined,
}

const zonaElectrification = ref<ZonaElectrificationEnum>(ZonaElectrificationEnum.Urbana);
const dataForm = ref<FormSelectRowType[]>([{...FormSelectRowDefault}]);
const isResult = ref<boolean>(false);
const dataResult = ref<FormResultRowType[]>([]);
const errorId = ref<undefined | number>();
const demandaTugLuz = ref<number[]>([]);
const demandaTue = ref<number[]>([]);
const demandaMaxima = ref<number>(0);
const padrao = ref<padraoTableType>();
const geral = ref<GeralType>();
const idr = ref<IdrType>();
const dps = ref<DpsType>();
const comment = ref<boolean>(false);

const newRow = () => {
  FormSelectRowDefault.id++;
  return {...FormSelectRowDefault};
}
const addRow = () => {
  if (dataForm.value.length < 20) {
    dataForm.value.push(newRow());
  }
}
const deleteRow = (id: number) => {
  const index = dataForm.value.findIndex(row => row.id === id);
  dataForm.value.splice(index, 1);
}
const calculate = () => {
  dataResult.value = [];
  demandaTugLuz.value = [];
  demandaTue.value = [];
  for (const [index, row] of dataForm.value.entries()) {
    const checkRow = useCheckError(row);
    if (checkRow === CheckErrorEnum.Error) {
      errorId.value = row.id
      isResult.value = false;
      break
    } else {
      const resultPower = useCalculationPower(row);
      const resultVoltage = useCalculationVoltage(row);
      const resultCurrent = +(resultPower / resultVoltage).toFixed(1) || 0;
      const multiplier = useMultiplierCurrent(row);
      if (row.appliance === FormSelectApplianceEnum.Tomada_uso_geral
          || row.appliance === FormSelectApplianceEnum.Pontos_de_luz) {
        demandaTugLuz.value.push(resultPower);
      } else demandaTue.value.push(resultPower);
      const resultBreaker = (row.appliance === FormSelectApplianceEnum.Tomada_uso_geral
          || row.appliance === FormSelectApplianceEnum.Pontos_de_luz)
          && resultCurrent < 10 ? BreakerEnum.A10 : useSelectionBreaker(resultCurrent, multiplier);
      const resultRow = {
        id: index + 1,
        aparelho: `${row.appliance}`,
        potência: `${resultPower} W`,
        tensão: `${resultVoltage} V`,
        corrente: `${resultCurrent} A`,
        disjuntor: `${resultBreaker} A`,
        polaridade: `${useCalculationPolarity(resultVoltage)}`,
        cabo_cobre: `${useCalculationCable(resultCurrent, row.appliance)} mm2`,
      }
      dataResult.value.push(resultRow);
      isResult.value = true;
    }
  }
  demandaMaxima.value = useCalculationDemandaMaxima(demandaTugLuz.value, demandaTue.value);
  padrao.value = useCalculationPadrao(zonaElectrification.value, demandaMaxima.value );
  geral.value = useCalculationGeral(demandaMaxima.value, padrao.value?.fases);
  idr.value = useCalculationIdr(geral.value);
  dps.value = useCalculationDps(geral.value, zonaElectrification.value);
  comment.value = useCheckComment(geral.value, dataForm.value);
}

watch(dataForm, () => {
  errorId.value = undefined;
}, {deep: true});
</script>

<style scoped>
.isError {
  border: 1px solid red;
}
</style>
