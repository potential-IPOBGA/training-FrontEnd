import React, { FunctionComponent, useContext } from "react"
import { GroupItemContainer, GroupTitleContainer, GroupName, TrainerInGroup, GroupMemberContainer, Trainee } from "./style"
import { TrainingContext } from "../App"

const GroupItem:FunctionComponent = () => {
  const { context, dispatch } = useContext(TrainingContext)

  const { groups } = context

  return(
    <>
      {groups.map(({ id:groupId,name:groupName,trainers,trainees }) => {
        return(
          <GroupItemContainer key={groupId}>
            <GroupTitleContainer>
              <div />
              <GroupName strong={true}>{groupName}</GroupName>
              <div>
                {trainers.map(({ id:trainerId, name:trainerName }) =>
                  (<TrainerInGroup key={trainerId} size={"large"}>{trainerName}</TrainerInGroup>)
                )}
              </div>
            </GroupTitleContainer>
            <GroupMemberContainer>
              {trainees.map(({ id:traineeId, name:traineeName }) =>
                (<Trainee key={traineeId} size={"large"} >{traineeName}</Trainee>)
              )}
            </GroupMemberContainer>
          </GroupItemContainer>
        )
      })}
    </>
  )
}

export default GroupItem
