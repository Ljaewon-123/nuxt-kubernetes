<template>
  <div>
    <button @click="changeQuery(1)">Inc query</button>
    <button @click="changeQuery(-1)">Dec query</button>
    <button @click="changeRef(1)">Inc other param</button>
    <button @click="changeRef(-1)">Dec other param</button>
  </div>
</template>

<script setup lang="ts">
const { page, changeQuery } = useQuery()
const { otherParam, changeRef } = useOtherParam()

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