import { gql } from "@apollo/client";

export const VOTE = gql `
mutation CreateVote($data: VoteInput!) {
    createVote(data: $data) {
      data {
        id
      }
    }
  }`;