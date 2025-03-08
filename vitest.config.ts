import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: "nuxt", // IF YOU HAVE OTHER TESTS - DON'T SET THAT HERE
    // you can optionally set Nuxt-specific environment options
    // environmentOptions: {
    //   nuxt: {
    //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
    //     domEnvironment: 'happy-dom', // 'happy-dom' (default) or 'jsdom'
    //     overrides: {
    //       // other Nuxt config you want to pass
    //     },
          // mock: {
          //   intersectionObserver: true,
          //   indexedDb: true,
          // }
    //   }
    // }
  }
})
