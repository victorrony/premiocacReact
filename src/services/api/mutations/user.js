import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        username
        confirmed
        blocked
      }
    }
  }
`;

export const REGISTER = gql`
mutation Register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    user {
      username
      id
      role {
        id
        name
      }
    }
    jwt
  }
}`;

export const UPDATE_LOCATION = gql`
  mutation UpdateUserLocation(
    $updateUserLocationId: ID!
    $data: UserLocationInput!
  ) {
    updateUserLocation(id: $updateUserLocationId, data: $data) {
      data {
        id
      }
    }
  }
`;
export const CREATE_LOCATION = gql`
  mutation CreateUserLocation($data: UserLocationInput!) {
    createUserLocation(data: $data) {
      data {
        id
      }
    }
  }
`;
export const DELETE_LOCATION = gql`
  mutation DeleteUserLocation($deleteUserLocationId: ID!) {
    deleteUserLocation(id: $deleteUserLocationId) {
      data {
        id
      }
    }
  }
`;
