<template>
  <div>
    <h1 v-show="comment" class="text-xl mb-2">Atenção!  Em um circuito monofásico, para usar dispositivos de alta tensão, é necessário um transformador!</h1>
    <p>Demanda máxima: {{ demandaResult }} kVA</p>
    <p class="mt-2">Padrão: {{ padrao?.breaker }}A {{ padrao?.fases }}</p>
    <p class="mt-2">Cabo:  fase: {{ padrao?.cableDiameter?.fase }}mm2; neutro: {{ padrao?.cableDiameter?.neutro }}mm2;
      terra: {{ padrao?.cableDiameter?.terra }}mm2</p>
    <p class="mt-2">Disjuntor geral: {{ geral?.breaker }} A {{ geral?.polarity }}</p>
    <p class="mt-2">IDR: {{ idr?.breaker }}A {{ idr?.polarity }}</p>
    <p class="mt-2">DPS: {{ dps?.current }}KA; quantidade: {{ dps?.quantity }}peças</p>
  </div>
</template>

<script setup lang="ts">
import type {FormResultType} from "~/types/formResultTypes";

const props = defineProps<FormResultType>();

const demandaResult = computed<number>(() => (props.demandaMaxima/1000).toFixed(1));

</script>