import React, { FunctionComponent, useReducer } from 'react'
import { Context } from '../type'
import { trainingReducer } from "../trainingReducer"
import GroupSection from "./group/GroupSection"
import TrainerSection from "./Trainer/TrainerSection"
import TraineeSection from "./trainee/TraineeSection"
import { PageContent } from './style'

const TrainingContext = React.createContext({
  context: {},
  dispatchContext: {}
})

const App: FunctionComponent = () => {
  const initialContext: Context = {
    trainers: [],
    trainees: [],
    groups: [],
  }

  const [context, dispatchContext] = useReducer(trainingReducer, initialContext)

  return (
    <TrainingContext.Provider value={{ context, dispatchContext }}>
      <PageContent>
        <GroupSection/>
        <TrainerSection/>
        <TraineeSection/>
      </PageContent>
    </TrainingContext.Provider>
  )
}

export { App,TrainingContext }
