<template>
  <div >
    <pre>{{ asyncData }}</pre>
    <v-btn @click="changeQuery(1)">Inc query</v-btn>
    <v-btn @click="changeQuery(-1)">Dec query</v-btn>
    <v-btn @click="changeRef(1)">Inc other param</v-btn>
    <v-btn @click="changeRef(-1)">Dec other param</v-btn>
  </div>
</template>

<script setup lang="ts">
const { page, changeQuery } = useQuery()
const { otherParam, changeRef } = useOtherParam()

const method = computed(() => otherParam.value > 2 ? 'POST' : 'GET')

const { data } = await useFetch('/api/temp/fetch-compare', {
  query: {
    page,
    otherParam
  },
  method
})

const { data: asyncData } = await useAsyncData('fetch-compare', () => $fetch('/api/temp/fetch-compare', {
  query: {
    page: page.value,
    otherParam: otherParam.value
  },
  method: method.value
}), {
  watch: [page, otherParam, method]
})

function useOtherParam() {
  const otherParam = ref(1)
  const changeRef = (valueToAdd: number) => {
    otherParam.value += valueToAdd
  }
  return { otherParam, changeRef }
}

function useQuery(){
  const route = useRoute()
  const page = computed(() => Number(route.query.page || 0))

  const changeQuery = (valueToAdd: number) => {
    navigateTo({
      path: '/compare-fetch',
      query: {
        page: page.value + valueToAdd
      }
    })
  }

  return { page, changeQuery }
}

</script>