import sessionTtl from "~~/server/constant/session-ttl";
import UsersModel from "~~/server/models/Users";
import PageAuth from "~~/server/utils/PageAuth";

export default defineEventHandler( async(event) => {

  const body = await readBody(event)

  const user = await UsersModel.findOne({
    email: body.email,
  })

  if (!user) {
    throw createError({
      status: 404,
      message: 'User not found'
    })
  }
  
  const decryptedText = CryptoInfo.decryptStr(body.password)
  const mongoPassword = CryptoInfo.decryptStr(user.password)

  if(decryptedText != mongoPassword){
    throw createError({
      status: 401,
      message: 'Password miss match'
    })
  }

  const session = await PageAuth.createSession(event)
  const userInfo = {
    id: session.id,
    data:{
      email: user.email,
      userName: user.userName
    }
  }
  await session.update({
    userName: user.userName
  });

  const redis = useStorage('redis')
  await redis.setItem(session.id ?? 'null', userInfo, sessionTtl)

  console.log('Login Success')

  return true

})