import { gql } from '@apollo/client/core';

export const CREATE_MENU_ITEM = gql`
  mutation CreateMenuItem($item: MenuItemInput!) {
    createMenuItem(item: $item) {
      header {
        responseCode
        responseMessage
      }
      body {
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
`;

export const UPDATE_MENU_ITEM = gql`
  mutation UpdateMenuItem($productId: String!, $item: MenuItemInput!) {
    updateMenuItem(productId: $productId, item: $item) {
      header {
        responseCode
        responseMessage
      }
      body {
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
`;

export const SET_ITEM_AVAILABILITY = gql`
  mutation SetItemAvailability($productId: String!, $available: Boolean!) {
    setItemAvailability(productId: $productId, available: $available) {
      header {
        responseCode
        responseMessage
      }
      body {
        productId
        name
        available
      }
    }
  }
`;
