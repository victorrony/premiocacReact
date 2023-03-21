const { gql } = require("@apollo/client");

export const CONTESTANTS = gql `
query Contestants {
    contestants {
      data {
        attributes {
          description
          name
          portrait {
            data {
              attributes {
                url
                caption
              }
              id
            }
          }
        }
        id
      }
    }
  }
  `;