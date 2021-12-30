import styled from "styled-components"
import { Button } from "antd"
import Title from "antd/es/typography/Title"
import Text from "antd/es/typography/Text"

export const GroupTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GroupContainer = styled.div`
  margin: 1rem 0 2rem 0;
`

export const ShuffleButton = styled(Button)`
  height: fit-content;
  padding: 1rem 4rem;
`

export const GroupContent = styled.div`
  margin: 2rem 0;
  overflow-y: auto;
  height: 80%;
`

export const GroupItemContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  height: 9rem;
  display: grid;
  grid-template-rows: 2fr 3fr;
`

export const GroupTitleContainer = styled.div`
  background-color: lightsteelblue;
  display: flex;
  justify-content: space-between;
`

export const GroupNumber = styled(Text)`
  align-self: center;
  font-size: x-large;
  color: azure;
`

export const TrainerInGroup = styled(Button)`
  margin: 0.5rem 0.8rem 0.5rem 0.3rem;
`

export const GroupMemberContainer = styled.div`
  align-self: center;
`

export const Trainee = styled(Button)`
  margin: 0 1rem;
  height: 3rem;
  background-color: lightgrey;
`
