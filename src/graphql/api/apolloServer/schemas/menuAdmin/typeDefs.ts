import { gql } from 'graphql-tag';

const typeDefs = gql`
  input IngredientInput {
    ingredientId: String
    quantity: Int
  }

  input MenuItemInput {
    productId: String!
    name: String!
    price: Float!
    available: Boolean!
    imageUrl: String
    category: String!
    tags: [String]
    description: String
    recipe: [IngredientInput]
  }

  extend type Mutation {
    createMenuItem(item: MenuItemInput!): MenuItemResponse
    updateMenuItem(productId: String!, item: MenuItemInput!): MenuItemResponse
    setItemAvailability(
      productId: String!
      available: Boolean!
    ): MenuItemResponse
  }
`;

export default typeDefs;
