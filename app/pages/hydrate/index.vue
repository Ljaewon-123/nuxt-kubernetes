<script setup lang="ts">
const onHydrated = () => {
  alert('Footer is hydrated')
}
</script>

<template>
  <div style="margin-bottom: 100rem;">
    Test
  </div>

  <!-- <AppFooter/> -->
  <LazyAppFooter hydrate-on-visible @hydrated="onHydrated"/>
</template>