<script setup lang="ts">
import type { TRPCClientError } from '@trpc/client'
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '~~/server/api/trpc/routers'

const { $client } = useNuxtApp()

const input = ref('')
const { data: hello, execute } = await $client.hello.useQuery({ text: input.value })

// example composable 
type RouterOutput = inferRouterOutputs<AppRouter>
type GetTodosOutput = RouterOutput['todo']['getTodos']

type ErrorOutput = TRPCClientError<AppRouter>

function useGetTodos() {
  const { $client } = useNuxtApp()
  return useAsyncData<GetTodosOutput, ErrorOutput>(() => $client.todo.getTodos.query({ allContext: input.value }))
}

function useMutationTodos() {
  const { $client } = useNuxtApp()
  return useAsyncData(() => $client.todo.createTodo.mutate({ title: "내가 디폴트 타이틀이다.", value: input.value }))
}

const { data, execute: todoExecute } = useGetTodos()
const { data: mutation, execute: mutateExecute } = useMutationTodos()

</script>

<template>
  <div>
    <input type="text" v-model="input">
    <p>{{ data?.todos }}</p>
    <p>{{ mutation }}</p>
    <button @click="todoExecute()">execute</button>
    -
    <button @click="mutateExecute()">mutateExecute</button>
  </div>
</template>
