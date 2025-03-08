// @noErrors
import { it, expect, describe } from 'vitest'
// ---cut---
// LoginSignIn
// LoginSignUp
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { LoginSignIn, LoginSignUp } from '#components'

describe('Login components', () => {
  it('can mount some component', async () => {
    const component = await mountSuspended(LoginSignIn)
    expect(component.text()).toMatchInlineSnapshot(
      '"Sign InEmailEmailPasswordPassword Sign In"'
    )
  })

  it('can mount signup', async () => {
    const component = await mountSuspended(LoginSignUp)
    expect(component.text()).toMatchInlineSnapshot(
      '"Create AccountEmailEmailPasswordPasswordUser nameUser name Sign Up"'
    )
  })
})  
