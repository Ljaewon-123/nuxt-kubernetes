import { useGlobalDialog } from "~/stores/globalDialog"

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('global auth plugins middleware only client')
  if(to.name == 'login') return
  
  const { dialog } = storeToRefs(useGlobalDialog())

  const { error } = await useFetch("/api/auth/page-auth",{
    server: false,
  })
  
  if(!error.value) return
  
  console.log(error.value?.data, '@@@@@@@@@@@@@')
  // 워닝과 스크롤이벤트 에러 ( 아마 vue인스턴스가 제대로 안착하기 전에 작동해서 그런거같음 )
  // 맨처음켜질때 여전히 남아있다....
  if(error.value?.statusCode == 402) {
    setTimeout(() => dialog.value = true, 500)
    return
  }
})
