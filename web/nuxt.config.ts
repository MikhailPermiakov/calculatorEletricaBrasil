// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      title: 'Calculadora de disjuntores',
      meta: [
        { name: 'description', content: 'Calculadora online para calcular disjuntores por corrente e potência. Cálculos elétricos para casa e escritório.' },
        { name: 'keywords', content: 'calculadora, máquina, disjuntor, cálculo, eletricidade, corrente, potência' },
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
})