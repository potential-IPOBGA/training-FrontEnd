import { Action } from "./components/dispacthActions"
import { Dispatch } from "react"

export type Trainer = {
  id:number;
  name:string;
  grouped:boolean;
  groupNumber?:number;
}

export type Trainee = {
  id:number;
  name:string;
  grouped:boolean;
  groupNumber?:number;
}


export type Group = {
  id:number;
  name:string;
  trainers: Trainer[];
  trainees: Trainee[];
}

export type Context = {
  trainers: Trainer[];
  trainees: Trainee[];
  groups: Group[];
}

export type AppContextContainer = {
  context: Context,
  dispatch: Dispatch<Action<any>>
}
