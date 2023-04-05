const { gql } = require("@apollo/client");

export const CONTESTANTS = gql `
query Attributes {
  contestants(pagination:{pageSize:20} sort:"totalVotes:desc") {
    data {
      attributes {
        totalVotes
        createdAt
          description
          name
          portrait {
            data {
              attributes {
                url
                name
                caption
              }
            }
          }
          updatedAt
        }
        id
      }
    }
  }
  `;