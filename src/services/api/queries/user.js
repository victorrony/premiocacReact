const { gql } = require("@apollo/client");

export const VOTED = gql `
query Voted($usersPermissionsUserId: ID) {
    usersPermissionsUser(id: $usersPermissionsUserId) {
      data {
        attributes {
          vote {
            data {
              attributes {
                contestant {
                  data {
                    id
                  }
                }
              }
            }
          }
          voted
        }
      }
    }
  }`;