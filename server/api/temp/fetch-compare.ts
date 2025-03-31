import { createStorage, prefixStorage } from "unstorage";

export default defineEventHandler( async(event) => {
  const { page, otherParam } = getQuery(event)

  // test some storage functions
  // const redis = useStorage("redis")
  // const redisPrefix = useStorage("redis:greet")
  // redis.set('hi', 'redis')
  // redisPrefix.set('hi', "Who is greet?")
  // redis.set('foo:hi', 'best for gretting is hi')
  // redisPrefix.set("foo:hi", "what you needs?")
  
  // This not work because reference nuxt.config.ts storage
  // const storage = useStorage()
  // const db = useStorage("db")
  // storage.set('hi', 'default storage')
  // db.set('hi', 'db')
  // storage.set('foo:hi', 'best for gretting is hi')
  // db.set('foo:hi', 'best for gretting is hi')

  return { 
    text: 'This is the example endpoint',
    page,
    otherParam,
    method: event.method
  }
})