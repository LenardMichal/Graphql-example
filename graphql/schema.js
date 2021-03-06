const { buildSchema } = require('graphql');

module.exports = buildSchema(`
 

  input MessageInput {
    content: String!
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query{
    getMessage(id: ID!): Message
    getMessages: [Message]
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }

`);