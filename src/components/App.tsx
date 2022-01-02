import React, { FunctionComponent, useEffect, useReducer } from 'react'
import { AppContextContainer, Context } from '../type'
import { trainingReducer } from "../trainingReducer"
import GroupSection from "./group/GroupSection"
import TrainerSection from "./Trainer/TrainerSection"
import TraineeSection from "./trainee/TraineeSection"
import { PageContent } from './style'
import { useQuery } from "@apollo/client"
import { QueryGroups } from "../graphql/Query"
import { initContextAction } from "./dispacthActions"
import data from "../MockData"

const initialContext: Context = {
  trainers: [],
  trainees: [],
  groups: [],
}

const TrainingContext = React.createContext<AppContextContainer>({
  context: initialContext,
  dispatch: () => {
    return
  },
})

const App: FunctionComponent = () => {

  //REAL Request
  // const { loading, error, data } = useQuery(QueryGroups)

  const [context, dispatch] = useReducer(trainingReducer, initialContext)

  useEffect(() => {
    dispatch(initContextAction({
      groups: data.groups,
      trainers: data.trainers,
      trainees: data.trainees,
    }))
  },[])

  return (
    <TrainingContext.Provider value={{ context, dispatch }}>
      <PageContent>
        <GroupSection/>
        <TrainerSection/>
        <TraineeSection/>
      </PageContent>
    </TrainingContext.Provider>
  )
}

export { App, TrainingContext }
