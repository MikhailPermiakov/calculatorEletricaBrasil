<template>
  <UApp :locale="pt_br">
    <UContainer>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UContainer>
  </UApp>
</template>

<script setup lang="ts">
import { pt_br } from '@nuxt/ui/locale'

</script>