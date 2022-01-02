import { Context } from "../type"

export interface Action<T> {
  type: string
  payload?: T
}

export const INIT_CONTEXT_ACTION = 'init-context'

export const initContextAction = (payload: Context): Action<Context> => {
  return { type: INIT_CONTEXT_ACTION, payload }
}

