<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["01-page-auth"]
})
</script>