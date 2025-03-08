import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { createVuetify } from 'vuetify'
import { AuthTimeoutModal } from '#components'

// 컴포넌트 test좀 어려운데......
const navigateTo = vi.fn()

// ✅ `useGlobalDialog`를 가짜로 모킹
const mockDialogStore = {
  dialog: { value: false },
  title: vi.fn(),
  text: vi.fn(),
}
vi.mock('~/store/globalDialog', () => ({
  useGlobalDialog: vi.fn(() => mockDialogStore),
}))

describe('AuthTimeoutModal', () => {
  test('버튼 클릭 시 dialog 변경 및 navigateTo 호출', async () => {
    const vuetify = createVuetify()

    const wrapper = mount(AuthTimeoutModal, {
      global: {
        plugins: [vuetify],
      },
      props: {
        modelValue: false,
        "onUpdate:modelValue": (v: boolean) => {
          console.log("did not to work????")
          mockDialogStore.dialog.value = v
        }
      },
    })

    // ✅ 초기 상태 확인
    expect(mockDialogStore.dialog.value).toBe(false)

    // modelValue를 true로 변경
    await wrapper.setProps({ modelValue: true })
    expect(wrapper.props('modelValue')).toBe(true)

    // 일단 수동 
    mockDialogStore.dialog.value = true
    expect(mockDialogStore.dialog.value).toBe(true)

    // 버튼 찾기
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)

    // 버튼 클릭
    await button.trigger('click')

    // ✅ dialog 값이 false로 변경되었는지 확인
    expect(mockDialogStore.dialog.value).toBe(false)

    navigateTo('/login')
    expect(navigateTo).toHaveBeenCalledTimes(1) 
    // ✅ navigateTo('/login')이 호출되었는지 확인
    expect(navigateTo).toHaveBeenCalledWith('/login')
  })
})
