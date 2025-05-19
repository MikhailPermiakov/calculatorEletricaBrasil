// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    ssr: true,
    nitro: {
        preset: 'static',
    },
    devtools: {enabled: true},
    modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts',
        '@nuxt/ui', '@vite-pwa/nuxt'],
    app: {
        head: {
            title: 'Calculadora de disjuntores',
            meta: [
                {
                    name: 'description',
                    content: 'Calculadora online para calcular disjuntores por corrente e potência. Cálculos elétricos para casa e escritório.',
                },
                {
                    name: 'keywords',
                    content: 'calculadora, máquina, disjuntor, cálculo, eletricidade, corrente, potência',
                },
            ],
            htmlAttrs: {
                lang: 'pt-BR',
            },
        },
    },
    css: ['~/assets/css/main.css'],
    vite: {
        define: {
            __DATE__: JSON.stringify(new Date().toISOString()),
        },
    },

    pwa: {
        strategies: 'injectManifest',
        srcDir: '.',
        filename: 'sw.js',
        registerType: 'autoUpdate',
        devOptions: {
            enabled: true,
            type: 'module',
        },
        manifest: {
            name: 'Calculadora de eletricista online grátis',
            short_name: 'CalcElec',
            description: 'Calculadora de eletricista online grátis',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone',
            scope: '/',
            start_url: '/',
            icons: [
                {
                    src: '/logo192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: '/logo512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: '/logo512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
            ],
        },
        workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
    },
    })