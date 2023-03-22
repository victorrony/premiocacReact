const { gql } = require("@apollo/client");

export const FAGS = gql `
query Faqs {
    faqs {
      data {
        attributes {
          createdAt
          description
          title
          updatedAt
        }
        id
      }
    }
  }`