import { DocumentNode } from "graphql"
import { gql } from "@apollo/client"

export const typeDefs: DocumentNode = gql`
    type Trainer {
        id: ID!
        name:String!
        grouped:Boolean!
        group:Int
    }

    type Trainee {
        id: ID!
        name:String!
        grouped:Boolean!
        group:Int
    }

    type Group {
        id: ID!
        name:String!
        trainers: [Trainer]!
        trainees: [Trainee]!
    }

`
