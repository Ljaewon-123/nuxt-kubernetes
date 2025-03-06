import { appRouter } from "./trpc/routers"

export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event)
  // const caller = appRouter.createCaller({})

  // const greeting = await caller.greeting({ name })

  throw new Error(
    'createCaller function is deprecated'
  )

  // return {
  //   greeting: 'createCaller function is deprecated'
  // }
})
