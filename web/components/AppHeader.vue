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
      <p :class="{hidden: isMobile && showInstallButton}">calculadora de eletricista online grátis</p>
    </div>
    <div class="flex items-center">
      <UButton v-if="showInstallButton" color="primary" size="xs" class="m-2" @click="installApp">instalar aplicativo</UButton>
    </div>
    <div class="flex items-center">
      <ClientOnly v-if="!colorMode?.forced">
        <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            size="xl"
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
import {useMediaQuery} from '@vueuse/core';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>

  prompt(): Promise<void>
}

const colorMode = useColorMode();
const isMobile = useMediaQuery('(max-width: 767px)');
const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null);
const showInstallButton = ref<boolean>(false);

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})

function handleBeforeInstallPrompt(e: BeforeInstallPromptEvent) {
  e.preventDefault()
  deferredPrompt.value = e
  showInstallButton.value = true
}

function installApp() {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt().then(() => {
      return deferredPrompt.value?.userChoice
    }).then(() => {
      deferredPrompt.value = null
      showInstallButton.value = false
    })
  }
}

onMounted(() => {
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
})

</script>
