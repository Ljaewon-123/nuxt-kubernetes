<template>
  <div>
    <h1>Hello</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Impedit voluptas veritatis, deserunt, iure cumque error, 
      veniam commodi nesciunt optio ad vero obcaecati quibusdam ipsam blanditiis 
      facilis ratione maxime illo minus.</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["01-page-auth"]
})
</script>