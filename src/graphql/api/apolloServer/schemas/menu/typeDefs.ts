import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Ingredient {
    ingredientId: String
    quantity: Int
  }

  type MenuItem {
    id: String
    productId: String
    name: String
    price: Float
    available: Boolean
    imageUrl: String
    category: String
    tags: [String]
    description: String
    recipe: [Ingredient]
  }

  type MenuItemResponse {
    header: ApiHeader
    body: MenuItem
  }

  type MenuPage {
    data: [MenuItem]
    pageNumber: Int
    pageSize: Int
    totalCount: Int
    totalPages: Int
    hasMore: Boolean
  }

  type MenuItemsResponse {
    header: ApiHeader
    body: MenuPage
  }

  type MenuGroupCategory {
    category: String
    items: [MenuItem]
  }

  type MenuGroupTag {
    tag: String
    items: [MenuItem]
  }

  type MenuGroupedByCategoryResponse {
    header: ApiHeader
    body: [MenuGroupCategory]
  }

  type MenuGroupedByTagResponse {
    header: ApiHeader
    body: [MenuGroupTag]
  }

  extend type Query {
    getMenu(
      currentPage: Int
      pageSize: Int
      category: String
      tag: String
      available: Boolean
    ): MenuItemsResponse
    getMenuItem(productId: String!): MenuItemResponse
    getMenuGroupedByCategory: MenuGroupedByCategoryResponse
    getMenuGroupedByTag: MenuGroupedByTagResponse
  }
`;

export default typeDefs;
