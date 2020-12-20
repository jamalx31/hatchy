import { gql } from 'apollo-boost';


export const LOGIN = gql`
mutation Login($auth: JSON) {
   login(auth: $auth) {
     user {
       _id
       email
       team {
         _id
         name
         token
       }
     }
   }
 }
`;
