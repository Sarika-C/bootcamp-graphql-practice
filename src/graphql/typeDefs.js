const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    Authors: [Author!]!
    Author(id: ID!): Author!
    Author(firstName: String!): [Author!]!
    Author(lastName: String!): [Author!]!
  

    Books: [Book!]!
    Book(id: ID!): Book!
    Book(title: String!): [Book!]!
    Book(language: String!): [Book!]!
    Book(authorId: ID!): [Book!]!

    Publishers: [Publisher!]!
    Publisher(id: ID!): Publisher!
    Publisher(company: String!): [Publisher!]!

    Addresses: [Address!]!
    Address(id: ID!): Address!
    Address(street: String!): [Address!]!
    Address(city: String!): [Address!]!
    Address(state: String!): [Address!]!
    Address(zip: String!): [Address!]!
  }

  type Mutation {
    addAuthor(input: AuthorInput!): Author!
    addBook(authorId: ID!, publisherId: ID!, input: BookInput!): Book!
    addPublisher(input: PublisherInput!): publisher!
    addAddress(input: AddressInput!): Address! 
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    createdAt: String!
    updatedAt: String!
  }

  input AuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: Date
    bestseller: Boolean
    createdAt: String!
    updatedAt: String!
  }

  input BookInput {
    title: String!
    language: String!
    numPages: Int
    datePublished: Date
    bestseller: Boolean
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    createdAt: String!
    updatedAt: String!
  }

  input PublisherInput {
    company: String!
    phoneNumber: String
    numBooksPublished: Int
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
    createdAt: String!
    updatedAt: String!
  }

  input AddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }
`
