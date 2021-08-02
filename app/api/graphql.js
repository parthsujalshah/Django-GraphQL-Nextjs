import { gql } from "@apollo/client";

export const loginMutation = gql`
mutation tokenAuth($username: String!, $password: String!){
    tokenAuth(username: $username, password: $password){
        token
        payload
    }
}
`;