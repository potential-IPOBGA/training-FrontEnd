import { Context } from "./type"
import { Action, INIT_CONTEXT_ACTION } from "./components/dispacthActions"
import { Reducer } from "react"

export const trainingReducer: Reducer<Context, Action<any>> = (context: Context, action: Action<any>):Context => {
  switch (action.type) {
    case INIT_CONTEXT_ACTION:
      return action.payload
    default:
      return context
  }
}
