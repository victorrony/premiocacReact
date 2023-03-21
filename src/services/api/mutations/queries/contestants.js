const { gql } = require("@apollo/client");

export const CONTESTANTS = gql `
query Attributes {
    contestants {
      data {
        attributes {
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
      }
    }
  }
  `;