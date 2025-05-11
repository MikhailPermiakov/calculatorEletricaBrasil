<template>
  <UApp :locale="pt_br">
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import { pt_br } from '@nuxt/ui/locale'

</script>