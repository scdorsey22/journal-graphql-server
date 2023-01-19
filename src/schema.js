const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
  
  type Entry {
    id: ID!
    text: String!
  }

  type Mutation {
    createEntry(text: String!): Entry
  }


  type Query {
    entries: [Entry]
  }
`
