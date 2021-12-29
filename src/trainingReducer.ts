import { action, Context } from "./type"

export const trainingReducer = (conetxt: Context, dispatch: action):Context => {
  return {
    trainers:[],
    trainees:[],
    groups:[],
  }
}
