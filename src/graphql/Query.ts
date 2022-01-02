import { gql } from "@apollo/client"

export const QueryGroups = gql`
    query getAllGroups {
        Group {
            id,
            name,
            trainers{
                id,
                name,
                grouped,
                group,
            },
            trainees{
                id,
                name,
                grouped,
                group,
            }
        }
    }
`
