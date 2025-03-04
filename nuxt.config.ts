// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ['vuetify-nuxt-module', '@pinia/nuxt'],
  runtimeConfig:{
    dburl: process.env.DATABASE_URL,
    dbName: process.env.DBNAME,
  },
  app:{
    head: {
      title: "Nuxt Kubernetes",
      meta: [
        { name: 'description', content: "Nuxt Kubernetes" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/two-llama.svg' }
      ]
    }
  },
})