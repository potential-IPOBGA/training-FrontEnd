export type Trainer = {
  id:number;
  name:string;
  grouped:boolean;
  group:Group;
}

export type Trainee = {
  id:number;
  name:string;
  grouped:boolean;
  group:Group;
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

export type action = {
  type?: ActionType,
  payload?: Context,
}

export enum ActionType {

}
