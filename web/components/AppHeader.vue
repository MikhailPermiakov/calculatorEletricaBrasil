<template>
  <div class="flex justify-between">
    <div class="flex items-center">
      <NuxtImg
          src="/logo192.png"
          alt="logo calculadora"
          width="40"
          height="40"
          class="me-2"
      />
      <p>calculadora de eletricista online grátis</p>
    </div>
    <div>
      <ClientOnly v-if="!colorMode?.forced">
        <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="size-8"/>
        </template>
      </ClientOnly>
    </div>
  </div>

</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
</script>
