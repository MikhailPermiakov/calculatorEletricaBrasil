<template>
  <div>
    <UCard>
      <template #header>
        <AppHeader/>
      </template>
      <template #default>
        <h1 class="text-center text-2xl">Calculadora online para calcular: disjuntores, padrao, cabo.</h1>
        <h2 class="text-center text-sm mt-2">O cálculo é feito com base nesses documentos: "NBR-5410" e "ET-165"</h2>
        <slot/>
      </template>
      <template #footer>
        <AppFooter/>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
</script>