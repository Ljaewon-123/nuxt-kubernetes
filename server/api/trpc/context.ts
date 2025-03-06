import { inferAsyncReturnType } from '@trpc/server'
import { H3Event } from 'h3';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export function createContext (event: H3Event) {
  console.log('cookies', parseCookies(event))

  return {}
}

export type Context = inferAsyncReturnType<typeof createContext>;