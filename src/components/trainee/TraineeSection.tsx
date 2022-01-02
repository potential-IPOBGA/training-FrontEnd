import React, { FunctionComponent, useContext } from "react"
import { AddTraineeButton, Trainee, TraineeMembers } from "./style"
import { PlusOutlined } from "@ant-design/icons"
import { Trainer } from "../Trainer/style"
import { TrainingContext } from "../App"
import Title from "antd/es/typography/Title"

const TraineeSection:FunctionComponent = () => {
  const { context } = useContext(TrainingContext)
  const { trainees } = context
  return(
    <div>
      <Title level={2}>学员列表</Title>
      <TraineeMembers>
        {trainees.filter(trainee => !trainee.grouped).map(
          ({ id,name }) =>
            (<Trainer key={id} size={"large"} >{name}</Trainer>)
        )}
        <AddTraineeButton type="dashed" size={"large"}><PlusOutlined />添加学员</AddTraineeButton>
      </TraineeMembers>
    </div>
  )
}
export default TraineeSection
