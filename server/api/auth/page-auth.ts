
export default defineEventHandler( async event => {
  const session = await PageAuth.createSession(event)

  if(!session.id) throw createError(new ResHandler())

  const verification = await PageAuth.verification(session.id)
  
  // console.log(verification, '????')

  if (!verification) {
    throw createError(new ResHandler())
  }

  // 갱신
  await PageAuth.refreshSession(verification as any)

})