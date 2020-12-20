const { gql } = require("apollo-server-express");

const typeDefs = gql`
  directive @auth on FIELD_DEFINITION
  directive @token on FIELD_DEFINITION
  directive @tokenOrAuth on FIELD_DEFINITION

  scalar Date
  scalar JSON

  type User {
    _id: ID
    email: String!
    username: String!
    displayName: String!
    photo: String!
    team: Team
  }

  type Person {
    _id: ID!
    uuid: String
  }

  type Feedback {
    _id: ID
    person: Person
    text: String!
    image: String
    createdAt: Date!
  }

  type AuthPayload {
    user: User
  }

  type Team {
    _id: ID!
    name: String!
    token: String!
  }

  input TweetInput {
    text: String
  }

  type Tweet {
    text: String
  }

  type Thread {
    _id: ID!
    tweets: [Tweet!]!
    timeToPost: Date
  }

  input ThreadInput {
    _id: ID
    tweets: [TweetInput!]!
    timeToPost: Date
  }

  type ThreadsPayload {
    drafts: [Thread!]!
    scheduled: [Thread!]!
  }

  type Query {
    currentUser: User
    feedbacks: [Feedback] @auth
    reverse: JSON

    widget: JSON! @tokenOrAuth

    threads: ThreadsPayload!
  }

  type Mutation {
    # feedback
    feedback(message: String!, image: String, email: String): Boolean! @token

    # user
    signup(
      companyName: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): AuthPayload
    login(auth: JSON!): AuthPayload
    logout: Boolean @auth

    # tweets
    postTweet(message: String!): Boolean
    updateOrCreateThread(threadInput: ThreadInput!): Thread
    deleteThread(_id: ID!): Boolean
  }
`;

module.exports = typeDefs;
