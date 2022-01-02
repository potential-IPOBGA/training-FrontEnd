import React, { FunctionComponent, useContext } from "react"
import { AddTrainerButton, Trainer, TrainerMembers } from "./style"
import { PlusOutlined } from "@ant-design/icons"
import { TrainingContext } from "../App"
import Title from "antd/es/typography/Title"

const TrainerSection: FunctionComponent = () => {
  const { context, dispatch } = useContext(TrainingContext)
  const { trainers } = context

  return(
    <div>
      <Title level={2}>讲师列表</Title>
      <TrainerMembers>
        {trainers.filter(trainer => !trainer.grouped).map(
          ({ id,name }) =>
            (<Trainer key={id} size={"large"} >{name}</Trainer>)
        )}
        <AddTrainerButton type="dashed" size={"large"}><PlusOutlined />添加讲师</AddTrainerButton>
      </TrainerMembers>
    </div>
  )
}
export default TrainerSection
