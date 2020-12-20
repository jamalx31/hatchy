import { gql } from "apollo-boost";

export const FEEDBACKS = gql`
  query {
    feedbacks {
      _id
      text
      image
      createdAt
      person {
        _id
        uuid
      }
    }
  }
`;

export const USER = gql`
  query {
    currentUser {
      _id
      email
      username
      displayName
      photo
      team {
        _id
        name
        token
      }
    }
  }
`;

export const TOKEN = gql`
  query {
    reverse
  }
`;

export const THREADS  = gql`
  query {
    threads {
      drafts {
        _id
        tweets {
          text
        }
        timeToPost
      }
      scheduled {
        _id
        tweets {
          text
        }
        timeToPost
      }
    }
  }
`;
