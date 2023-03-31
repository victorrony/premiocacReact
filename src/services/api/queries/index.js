const { gql } = require("@apollo/client");

export const PROMOTIONS = gql`
  query Promotions {
    promotions {
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
  }
`;


export const SLIDERS = gql`
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
  }
`;





