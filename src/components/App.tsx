import React, { FunctionComponent, useReducer } from 'react'
import { action, Context } from '../type'
import { trainingReducer } from "../trainingReducer"

const App: FunctionComponent = () => {
  const initialContext: Context = {
    trainers: [],
    trainees: [],
    groups: [],
  }

  const [context, dispatchContext] = useReducer(trainingReducer, initialContext)

  const TrainingContext = React.createContext({})

  return (
    <TrainingContext.Provider value={{ context, dispatchContext }}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </TrainingContext.Provider>
  )
}

export default App
