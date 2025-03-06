import { z } from 'zod'
import { $fetch } from 'ofetch'
import { publicProcedure, router } from '~~/server/trpc/trpc'

const baseURL = 'https://jsonplaceholder.typicode.com'

const TodoShape = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean()
})

export type Todo = z.infer<typeof TodoShape>

export const todoRouter = router({
  getTodos: publicProcedure
    .query(() => {
      return $fetch<Todo[]>(`${baseURL}/todos?_limit=5`)
    }),
  getTodo: publicProcedure
    .input(z.number())
    .query((req) => {
      return $fetch<Todo>(`${baseURL}/todos/${req.input}`)
    }),
  addTodo: publicProcedure
    .input(TodoShape)
    .mutation((req) => {
      return $fetch<Todo>(`${baseURL}/todos`, {
        method: 'POST',
        body: req.input
      })
    })
})