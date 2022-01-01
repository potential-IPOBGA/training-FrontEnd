import React, { FunctionComponent } from "react"
import { AddTraineeButton, Trainee, TraineeMembers } from "./style"
import { PlusOutlined } from "@ant-design/icons"

const TraineeSection:FunctionComponent = () => {
  return(
    <div>
      <h2>TraineeSection 🚀</h2>
      <TraineeMembers>
        <Trainee size={"large"} >Trainee 01</Trainee>
        <Trainee size={"large"} >Trainee 0</Trainee>
        <Trainee size={"large"} >Trainee 02</Trainee>
        <AddTraineeButton type="dashed" size={"large"}><PlusOutlined />添加学员</AddTraineeButton>
      </TraineeMembers>
    </div>
  )
}
export default TraineeSection
