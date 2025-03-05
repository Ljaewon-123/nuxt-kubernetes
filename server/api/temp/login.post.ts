export default defineEventHandler( async(event) => {
  const body = await readBody(event)
  console.log(body)
  if(body.password !== '1234') throw createError({message: 'hi'})

  return { result: 'hi' }
})