<template>
  <UCard class="my-1">
    <div class="flex justify-between">
      <p class="m-1">№: {{ indexRow + 1 }}</p>
      <div>
        <USelectMenu
            v-model="applianceModel"
            :items="Object.values(FormSelectApplianceEnum)"
            placeholder="aparelho elétrico"
            class="w-48 m-1"
        />
        <UInputNumber
            v-if="inputPowerVisible"
            v-model="powerModel"
            orientation="vertical"
            :min="50"
            :max="10000"
            :step="50"
            :step-snapping="false"
            placeholder="potência elétrica (W)"
            class="w-48 m-1"
        />
        <USelectMenu
            v-if="inputVoltageVisible"
            v-model="voltageModel"
            :items="voltageArr"
            placeholder="tensão elétrica (V)"
            class="w-48 m-1"
        />
        <USelectMenu
            v-if="applianceModel === FormSelectApplianceEnum.Tomada_uso_especial"
            v-model="baseOfApplianceModel"
            :items="Object.values(BaseOfApplianceEnum)"
            placeholder="base de um aparelho"
            class="w-48 m-1"
        />
        <UInputNumber
            v-if="inputQuantityVisible"
            v-model="quantityModel"
            orientation="vertical"
            :min="1"
            :max="50"
            :step="1"
            placeholder="quantidade (peç)"
            class="w-48 m-1"
        />
        <UInputNumber
            v-if="applianceModel === FormSelectApplianceEnum.Tomada_uso_geral"
            v-model="quantitySocketsInKitchenModel"
            orientation="vertical"
            :min="0"
            :max="10"
            :step="1"
            placeholder="quanto na cozinha (peç)"
            class="w-48 m-1"
        />
      </div>
      <UButton
          icon="i-lucide-trash-2"
          color="error"
          size="lg"
          variant="subtle"
          class="my-auto danger"
          @click="$emit('deleteRow')"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
import {BaseOfApplianceEnum, FormSelectApplianceEnum, FormSelectVoltageEnum} from '~/types/formSelectEnums';

defineEmits(['deleteRow']);
defineProps<{ indexRow: number }>();

const applianceModel = defineModel<undefined | FormSelectApplianceEnum>('appliance');
const powerModel = defineModel<undefined | number>('power');
const voltageModel = defineModel<undefined | FormSelectVoltageEnum>('voltage');
const quantityModel = defineModel<undefined | number>('quantity');
const quantitySocketsInKitchenModel = defineModel<undefined | number>('quantitySocketsInKitchen');
const baseOfApplianceModel = defineModel<undefined | BaseOfApplianceEnum>('baseOfAppliance');

const inputPowerVisible = computed<boolean>(() => {
  return applianceModel.value !== FormSelectApplianceEnum.Tomada_uso_geral
      && applianceModel.value !== FormSelectApplianceEnum.Pontos_de_luz
});
const inputVoltageVisible = computed<boolean>(() => {
  return applianceModel.value !== FormSelectApplianceEnum.Pontos_de_luz;
});
const inputQuantityVisible = computed<boolean>(() => {
  return applianceModel.value === FormSelectApplianceEnum.Tomada_uso_geral
      || applianceModel.value === FormSelectApplianceEnum.Pontos_de_luz
});
const voltageArr = computed(() => applianceModel.value === FormSelectApplianceEnum.Tomada_uso_especial ? Object.values(FormSelectVoltageEnum) : ['127', '220',] );
</script>
