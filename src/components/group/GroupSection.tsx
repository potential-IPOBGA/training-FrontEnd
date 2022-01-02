import React, { FunctionComponent, useContext } from "react"
import { GroupContainer, GroupContent, GroupTitle, ShuffleButton } from "./style"
import { RetweetOutlined } from "@ant-design/icons"
import Title from "antd/es/typography/Title"
import { TrainingContext } from "../App"
import GroupItem from "./GroupItem"


const GroupSection: FunctionComponent = () => {
  const { dispatch } = useContext(TrainingContext)

  const handleShuffle = ():void => {
    return
  }

  return (
    <GroupContainer>
      <GroupTitle>
        <Title level={2}>分组列表</Title>
        <ShuffleButton type="primary" icon={<RetweetOutlined/>} size={"large"} onClick={handleShuffle}>
          分组学员
        </ShuffleButton>
      </GroupTitle>
      <GroupContent>
        <GroupItem/>
      </GroupContent>
    </GroupContainer>
  )
}
export default GroupSection
