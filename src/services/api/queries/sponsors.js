import { gql } from "@apollo/client"

export const SPONSORS = gql `
query Sponsors {
  sponsors {
    data {
      attributes {
        logo {
          data {
            attributes {
              url
              name
              caption
            }
          }
        }
        name
        createdAt
      }
    }
  }
}`;