import { gql } from '@apollo/client/core';

export const GET_MENU = gql`
  query GetMenu(
    $currentPage: Int
    $pageSize: Int
    $category: String
    $tag: String
    $available: Boolean
  ) {
    getMenu(
      currentPage: $currentPage
      pageSize: $pageSize
      category: $category
      tag: $tag
      available: $available
    ) {
      header {
        responseCode
        responseMessage
      }
      body {
        content {
          id
          productId
          name
          price
          available
          imageUrl
          category
          tags
          description
        }
        totalPages
        totalElements
        size
        number
        first
        last
        empty
      }
    }
  }
`;

export const GET_MENU_ITEM = gql`
  query GetMenuItem($productId: String!) {
    getMenuItem(productId: $productId) {
      header {
        responseCode
        responseMessage
      }
      body {
        id
        productId
        name
        price
        available
        imageUrl
        category
        tags
        description
        recipe {
          name
          quantity
          unit
        }
      }
    }
  }
`;

export const GET_MENU_GROUPED_BY_CATEGORY = gql`
  query GetMenuGroupedByCategory {
    getMenuGroupedByCategory {
      header {
        responseCode
        responseMessage
      }
      body {
        category
        items {
          productId
          name
          price
          available
          imageUrl
          category
          tags
          description
        }
      }
    }
  }
`;

export const GET_MENU_GROUPED_BY_TAG = gql`
  query GetMenuGroupedByTag {
    getMenuGroupedByTag {
      header {
        responseCode
        responseMessage
      }
      body {
        tag
        items {
          productId
          name
          price
          available
          imageUrl
          category
          tags
          description
        }
      }
    }
  }
`;
