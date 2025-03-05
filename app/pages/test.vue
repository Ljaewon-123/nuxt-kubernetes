<template>
  <h1>Login</h1>
  <form @submit.prevent="onSubmitAsyncData">
    <input data-1p-ignore type="text" placeholder="username" v-model="username">
    <input data-1p-ignore type="password" placeholder="password" v-model="password">
    <button>Login!</button>
  </form>
  <p>Amount of calls: {{ callCount }}</p>
  <br>
  <p>submit funtion of calls: {{ functionCall }}</p>
  <br>
  <br>
  <p>Did it work? {{ didItWork }}</p>
</template>

<script setup lang="ts">
const callCount = useState('callCount',() => 0)
const functionCall = useState('functionCall',() => 0)
const username = ref('AzureDiamond')
const password = ref('')
const body = computed(() => ({
  username: username.value,
  password: password.value
}))

const didItWork = ref(false)

// const { error, execute } = await useFetch('/api/temp/login', {
//   method: 'POST',
//   body,
//   onResponse() {
//     callCount.value++
//   }
// })

// async function onUserFetchSubmit(){
//   await execute()
//   if(!error.value){
//     didItWork.value = true
//   }
// }

async function onSubmit(){
  // 에러 혹은 데이터가 반응형일 필요가 없다.
  try {
    const data = await $fetch('/api/temp/login', {
      method: 'POST',
      body,
      onResponse() {
        callCount.value++
      }
    })
    didItWork.value = true
  } catch (error) {
    console.error(error)
  }
}

// 내부에 있어도 똑같다. 
const { error, execute } = await useAsyncData('/api/temp/login',() => $fetch('/api/temp/login', {
  method: 'POST',
  body: body.value,
  onResponse() {
    callCount.value++
  }
}) as any, {immediate: false})

// 이거는 내부에있어서 부작용은 없네.... ? key있어서 그런듯 
async function onSubmitAsyncData(){
  functionCall.value++
  await execute()

  if(!error.value){
    didItWork.value = true
  }
}

// That is 확실한 wrong! 컴포저블은 function블럭 외부에 
// async function onSubmitWrong(){
//   const { error } = await useFetch('/api/temp/login', {
//     method: 'POST',
//     body,
//     onResponse() {
//       callCount.value++
//     }
//   })

//   if(!error.value){
//     didItWork.value = true
//   }
// }
</script>