import { z } from 'zod'
import { publicProcedure, router } from '~~/server/trpc/trpc'
import { todoRouter } from './example-todos'

export const appRouter = router({
  exampleTdos: todoRouter,
  hello: publicProcedure
    // This is the input schema of your procedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      // This is what you're returning to your client
      console.log(input)
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      }
    }),
    todo: router({
      getTodos: publicProcedure
      .input(
        z.object({
          allContext: z.string()
        })
      )
      .query(({ input }) => {
        const todos = [
          { title: 'Learn tRPC', value: 1, ref: input.allContext },
          { title: 'Build something great', value: 2, ref: input.allContext },
        ];
        return { todos };
      }),
      createTodo: publicProcedure
        .input(z.object({ title: z.string(), value: z.string() }))
        .mutation(({ input }) => {
          return { success: true, todo: input };
        }),
    }),
    greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => `Hello ${input.name}`),

})

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;