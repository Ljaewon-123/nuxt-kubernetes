<template>
  <v-app>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    <v-dialog
      v-model="dialog"
      width="auto"
      persistent
    >
      <AuthTimeoutModal></AuthTimeoutModal>
      <!-- 아래는 되는데 v-model하고 바뀌었나? -->
      <!-- <v-btn
        text="Ok"
        variant="outlined"
        @click="goLoginPage()"
      ></v-btn> -->
    </v-dialog>

  </v-app>
</template>

<script setup lang="ts">
const { dialog } = storeToRefs(useGlobalDialog())
// const goLoginPage = () => {
//   dialog.value = false // # 이게 원래 되던건데... 이상하네 바뀌었나??
//   // console.log(dialog.value, global.value)
//   // global.value = false
//   navigateTo('/login')
// }
</script>