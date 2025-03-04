<template>
<v-card
  max-width="400"
  rounded="lg"
  prepend-icon="mdi-lock-open-alert-outline"
  :title="title"
  :text="text"
>
  <template #actions>
    <v-btn
      text="Ok"
      variant="outlined"
      @click="goLoginPage"
    ></v-btn>
  </template>
</v-card>
</template>

<script setup lang="ts">
const dialog = defineModel({ default: false })
const { dialog: global } = storeToRefs(useGlobalDialog())
const { title, text } = useGlobalDialog()
const goLoginPage = () => {
  dialog.value = false // # 이게 원래 되던건데... 이상하네 바뀌었나??
  // console.log(dialog.value, global.value)
  global.value = false
  navigateTo('/login')
}
</script>