import React,{ FunctionComponent } from "react"
import { GroupItemContainer, GroupTitleContainer, GroupNumber, TrainerInGroup, GroupMemberContainer, Trainee } from "./style"

const GroupItem:FunctionComponent = () => {
  return(
    <GroupItemContainer  >
      <GroupTitleContainer>
        <div />
        <GroupNumber strong={true}>1组</GroupNumber>
        <div>
          <TrainerInGroup size={"large"}>Trainer No1</TrainerInGroup>
          <TrainerInGroup size={"large"}>Trainer No2</TrainerInGroup>
        </div>
      </GroupTitleContainer>
      <GroupMemberContainer>
        <Trainee size={"large"} >Trainee 01</Trainee>
        <Trainee size={"large"} >Trainee 02</Trainee>
        <Trainee size={"large"} >Trainee 03</Trainee>
        <Trainee size={"large"} >Trainee 04</Trainee>
      </GroupMemberContainer>
    </GroupItemContainer>
  )
}

export default GroupItem
