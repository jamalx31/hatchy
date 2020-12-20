import { gql } from "apollo-boost";

export const FEEDBACK_MUTATION = gql`
  mutation Feedback($message: String!) {
    feedback(message: $message)
  }
`;

export const LOGOUT = gql`
  mutation {
    logout
  }
`;

export const POST_TWEET = gql`
  mutation PostTweet($message: String!) {
    postTweet(message: $message)
  }
`;

export const SAVE_THREAD = gql`
  mutation SaveThread($threadInput: ThreadInput!) {
    saveThread(threadInput: $threadInput)
  }
`;

export const UPDATE_OR_CREATE_THREAD = gql`
  mutation UpdateOrCreateThread($threadInput: ThreadInput!) {
    updateOrCreateThread(threadInput: $threadInput) {
      _id
      tweets {
        text
      }
      timeToPost
    }
  }
`;

export const DELETE_THREAD = gql`
  mutation DeleteThread($_id: ID!) {
    deleteThread(_id: $_id) 
  }
`;
