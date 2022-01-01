import React, { FunctionComponent } from "react"
import { AddTrainerButton, Trainer, TrainerMembers } from "./style"
import { PlusOutlined } from "@ant-design/icons"

const TrainerSection: FunctionComponent = () => {
  return(
    <div>
      <h2>TrainerSection 🚀</h2>
      <TrainerMembers>
        <Trainer size={"large"} >Trainer 01</Trainer>
        <Trainer size={"large"} >Trainer 02</Trainer>
        <Trainer size={"large"} >Trainer 03</Trainer>
        <AddTrainerButton type="dashed" size={"large"}><PlusOutlined />添加讲师</AddTrainerButton>
      </TrainerMembers>
    </div>
  )
}
export default TrainerSection
