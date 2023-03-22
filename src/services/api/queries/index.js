const { gql } = require("@apollo/client");

export const SLIDERS = gql `
query Sliders {
    sliders {
      data {
        attributes {
          title
          pictures {
            data {
              attributes {
                url
                name
                caption
              }
            }
          }
        }
      }
    }
  }`;