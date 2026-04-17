import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type ApiHeader = {
  __typename?: 'ApiHeader';
  customerMessage?: Maybe<Scalars['String']['output']>;
  requestRefId?: Maybe<Scalars['String']['output']>;
  responseCode?: Maybe<Scalars['Int']['output']>;
  responseMessage?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type CancellationReason = {
  __typename?: 'CancellationReason';
  count?: Maybe<Scalars['Int']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

export type CancellationReport = {
  __typename?: 'CancellationReport';
  cancelledOrders?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  reasons?: Maybe<Array<Maybe<CancellationReason>>>;
};

export type CancellationReportResponse = {
  __typename?: 'CancellationReportResponse';
  body?: Maybe<CancellationReport>;
  header?: Maybe<ApiHeader>;
};

export type CategoryRevenue = {
  __typename?: 'CategoryRevenue';
  category?: Maybe<Scalars['String']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
};

export type CreateOrderItemInput = {
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type DailySalesReport = {
  __typename?: 'DailySalesReport';
  date?: Maybe<Scalars['String']['output']>;
  topSellingItems?: Maybe<Array<Maybe<TopSellingItem>>>;
  totalOrders?: Maybe<Scalars['Int']['output']>;
  totalRevenue?: Maybe<Scalars['Float']['output']>;
  vatCollected?: Maybe<Scalars['Float']['output']>;
};

export type DailySalesResponse = {
  __typename?: 'DailySalesResponse';
  body?: Maybe<DailySalesReport>;
  header?: Maybe<ApiHeader>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  ingredientId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type IngredientInput = {
  ingredientId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type KitchenOrder = {
  __typename?: 'KitchenOrder';
  createdAt?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  orderId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type KitchenOrderResponse = {
  __typename?: 'KitchenOrderResponse';
  body?: Maybe<KitchenOrder>;
  header?: Maybe<ApiHeader>;
};

export type KitchenOrdersResponse = {
  __typename?: 'KitchenOrdersResponse';
  body?: Maybe<Array<Maybe<KitchenOrder>>>;
  header?: Maybe<ApiHeader>;
};

export type KitchenPerformanceReport = {
  __typename?: 'KitchenPerformanceReport';
  avgPrepTimeMinutes?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  maxPrepTimeMinutes?: Maybe<Scalars['Float']['output']>;
  minPrepTimeMinutes?: Maybe<Scalars['Float']['output']>;
  slowItems?: Maybe<Array<Maybe<SlowItem>>>;
  totalKitchenOrders?: Maybe<Scalars['Int']['output']>;
};

export type KitchenPerformanceResponse = {
  __typename?: 'KitchenPerformanceResponse';
  body?: Maybe<KitchenPerformanceReport>;
  header?: Maybe<ApiHeader>;
};

export type MenuGroupCategory = {
  __typename?: 'MenuGroupCategory';
  category?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<MenuItem>>>;
};

export type MenuGroupTag = {
  __typename?: 'MenuGroupTag';
  items?: Maybe<Array<Maybe<MenuItem>>>;
  tag?: Maybe<Scalars['String']['output']>;
};

export type MenuGroupedByCategoryResponse = {
  __typename?: 'MenuGroupedByCategoryResponse';
  body?: Maybe<Array<Maybe<MenuGroupCategory>>>;
  header?: Maybe<ApiHeader>;
};

export type MenuGroupedByTagResponse = {
  __typename?: 'MenuGroupedByTagResponse';
  body?: Maybe<Array<Maybe<MenuGroupTag>>>;
  header?: Maybe<ApiHeader>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  available?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  recipe?: Maybe<Array<Maybe<Ingredient>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MenuItemInput = {
  available: Scalars['Boolean']['input'];
  category: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['String']['input'];
  recipe?: InputMaybe<Array<InputMaybe<IngredientInput>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuItemResponse = {
  __typename?: 'MenuItemResponse';
  body?: Maybe<MenuItem>;
  header?: Maybe<ApiHeader>;
};

export type MenuItemsResponse = {
  __typename?: 'MenuItemsResponse';
  body?: Maybe<MenuPage>;
  header?: Maybe<ApiHeader>;
};

export type MenuPage = {
  __typename?: 'MenuPage';
  data?: Maybe<Array<Maybe<MenuItem>>>;
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  pageNumber?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type MonthlySummaryReport = {
  __typename?: 'MonthlySummaryReport';
  grossSales?: Maybe<Scalars['Float']['output']>;
  netSales?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  vatCollected?: Maybe<Scalars['Float']['output']>;
};

export type MonthlySummaryResponse = {
  __typename?: 'MonthlySummaryResponse';
  body?: Maybe<MonthlySummaryReport>;
  header?: Maybe<ApiHeader>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelOrder?: Maybe<OrderResponse>;
  completeOrder?: Maybe<OrderResponse>;
  createMenuItem?: Maybe<MenuItemResponse>;
  createOrder?: Maybe<OrderResponse>;
  markReady?: Maybe<KitchenOrderResponse>;
  setItemAvailability?: Maybe<MenuItemResponse>;
  startPreparing?: Maybe<KitchenOrderResponse>;
  updateMenuItem?: Maybe<MenuItemResponse>;
};

export type MutationCancelOrderArgs = {
  orderId: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};

export type MutationCompleteOrderArgs = {
  orderId: Scalars['String']['input'];
};

export type MutationCreateMenuItemArgs = {
  item: MenuItemInput;
};

export type MutationCreateOrderArgs = {
  customerId: Scalars['String']['input'];
  items: Array<CreateOrderItemInput>;
};

export type MutationMarkReadyArgs = {
  orderId: Scalars['String']['input'];
};

export type MutationSetItemAvailabilityArgs = {
  available: Scalars['Boolean']['input'];
  productId: Scalars['String']['input'];
};

export type MutationStartPreparingArgs = {
  orderId: Scalars['String']['input'];
};

export type MutationUpdateMenuItemArgs = {
  item: MenuItemInput;
  productId: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  cancellationReason?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  serviceCharge?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<OrderStatus>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  vat?: Maybe<Scalars['Float']['output']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  category?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  productSnapshot?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type OrderItemsResponse = {
  __typename?: 'OrderItemsResponse';
  body?: Maybe<Array<Maybe<OrderItem>>>;
  header?: Maybe<ApiHeader>;
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  body?: Maybe<Order>;
  header?: Maybe<ApiHeader>;
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Created = 'CREATED',
  Failed = 'FAILED',
  InKitchen = 'IN_KITCHEN',
  PendingPayment = 'PENDING_PAYMENT',
  Ready = 'READY',
}

export type PaymentReport = {
  __typename?: 'PaymentReport';
  date?: Maybe<Scalars['String']['output']>;
  failedPayments?: Maybe<Scalars['Int']['output']>;
  failureRate?: Maybe<Scalars['Float']['output']>;
  successfulPayments?: Maybe<Scalars['Int']['output']>;
};

export type PaymentReportResponse = {
  __typename?: 'PaymentReportResponse';
  body?: Maybe<PaymentReport>;
  header?: Maybe<ApiHeader>;
};

export type ProcessingTimeReport = {
  __typename?: 'ProcessingTimeReport';
  avgInventoryReserveTimeMs?: Maybe<Scalars['Float']['output']>;
  avgKitchenPrepMinutes?: Maybe<Scalars['Float']['output']>;
  avgPaymentProcessingMs?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['String']['output']>;
};

export type ProcessingTimeResponse = {
  __typename?: 'ProcessingTimeResponse';
  body?: Maybe<ProcessingTimeReport>;
  header?: Maybe<ApiHeader>;
};

export type Query = {
  __typename?: 'Query';
  getCancellationReport?: Maybe<CancellationReportResponse>;
  getDailySales?: Maybe<DailySalesResponse>;
  getKitchenOrders?: Maybe<KitchenOrdersResponse>;
  getKitchenPerformance?: Maybe<KitchenPerformanceResponse>;
  getMenu?: Maybe<MenuItemsResponse>;
  getMenuGroupedByCategory?: Maybe<MenuGroupedByCategoryResponse>;
  getMenuGroupedByTag?: Maybe<MenuGroupedByTagResponse>;
  getMenuItem?: Maybe<MenuItemResponse>;
  getMonthlySummary?: Maybe<MonthlySummaryResponse>;
  getOrder?: Maybe<OrderResponse>;
  getOrderItems?: Maybe<OrderItemsResponse>;
  getPaymentReport?: Maybe<PaymentReportResponse>;
  getProcessingTimes?: Maybe<ProcessingTimeResponse>;
  getRevenueByCategory?: Maybe<RevenueByCategoryResponse>;
};

export type QueryGetCancellationReportArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetDailySalesArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetKitchenOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetKitchenPerformanceArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetMenuArgs = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetMenuItemArgs = {
  productId: Scalars['String']['input'];
};

export type QueryGetMonthlySummaryArgs = {
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetOrderArgs = {
  orderId: Scalars['String']['input'];
};

export type QueryGetOrderItemsArgs = {
  orderId: Scalars['String']['input'];
};

export type QueryGetPaymentReportArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetProcessingTimesArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetRevenueByCategoryArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
};

export type RevenueByCategoryResponse = {
  __typename?: 'RevenueByCategoryResponse';
  body?: Maybe<Array<Maybe<CategoryRevenue>>>;
  header?: Maybe<ApiHeader>;
};

export type SlowItem = {
  __typename?: 'SlowItem';
  orderId?: Maybe<Scalars['String']['output']>;
  prepTimeMinutes?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
};

export type TopSellingItem = {
  __typename?: 'TopSellingItem';
  productId?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  totalQuantity?: Maybe<Scalars['Int']['output']>;
  totalRevenue?: Maybe<Scalars['Float']['output']>;
};

export type StartPreparingMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;

export type StartPreparingMutation = {
  __typename?: 'Mutation';
  startPreparing?: {
    __typename?: 'KitchenOrderResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'KitchenOrder';
      orderId?: string | null;
      status?: string | null;
      updatedAt?: string | null;
    } | null;
  } | null;
};

export type MarkReadyMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;

export type MarkReadyMutation = {
  __typename?: 'Mutation';
  markReady?: {
    __typename?: 'KitchenOrderResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'KitchenOrder';
      orderId?: string | null;
      status?: string | null;
      updatedAt?: string | null;
    } | null;
  } | null;
};

export type CreateMenuItemMutationVariables = Exact<{
  item: MenuItemInput;
}>;

export type CreateMenuItemMutation = {
  __typename?: 'Mutation';
  createMenuItem?: {
    __typename?: 'MenuItemResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'MenuItem';
      productId?: string | null;
      name?: string | null;
      price?: number | null;
      available?: boolean | null;
      imageUrl?: string | null;
      category?: string | null;
      tags?: Array<string | null> | null;
      description?: string | null;
    } | null;
  } | null;
};

export type UpdateMenuItemMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  item: MenuItemInput;
}>;

export type UpdateMenuItemMutation = {
  __typename?: 'Mutation';
  updateMenuItem?: {
    __typename?: 'MenuItemResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'MenuItem';
      productId?: string | null;
      name?: string | null;
      price?: number | null;
      available?: boolean | null;
      imageUrl?: string | null;
      category?: string | null;
      tags?: Array<string | null> | null;
      description?: string | null;
    } | null;
  } | null;
};

export type SetItemAvailabilityMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  available: Scalars['Boolean']['input'];
}>;

export type SetItemAvailabilityMutation = {
  __typename?: 'Mutation';
  setItemAvailability?: {
    __typename?: 'MenuItemResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'MenuItem';
      productId?: string | null;
      name?: string | null;
      available?: boolean | null;
    } | null;
  } | null;
};

export type CreateOrderMutationVariables = Exact<{
  customerId: Scalars['String']['input'];
  items: Array<CreateOrderItemInput> | CreateOrderItemInput;
}>;

export type CreateOrderMutation = {
  __typename?: 'Mutation';
  createOrder?: {
    __typename?: 'OrderResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
      customerMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'Order';
      id?: number | null;
      orderId?: string | null;
      customerId?: string | null;
      status?: OrderStatus | null;
      createdAt?: string | null;
      subtotal?: number | null;
      vat?: number | null;
      serviceCharge?: number | null;
      discount?: number | null;
      totalAmount?: number | null;
    } | null;
  } | null;
};

export type CompleteOrderMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;

export type CompleteOrderMutation = {
  __typename?: 'Mutation';
  completeOrder?: {
    __typename?: 'OrderResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'Order';
      orderId?: string | null;
      status?: OrderStatus | null;
      updatedAt?: string | null;
      totalAmount?: number | null;
    } | null;
  } | null;
};

export type CancelOrderMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
  reason: Scalars['String']['input'];
}>;

export type CancelOrderMutation = {
  __typename?: 'Mutation';
  cancelOrder?: {
    __typename?: 'OrderResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
      customerMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'Order';
      orderId?: string | null;
      status?: OrderStatus | null;
      cancellationReason?: string | null;
      updatedAt?: string | null;
    } | null;
  } | null;
};

export type GetKitchenOrdersQueryVariables = Exact<{
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetKitchenOrdersQuery = {
  __typename?: 'Query';
  getKitchenOrders?: {
    __typename?: 'KitchenOrdersResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: Array<{
      __typename?: 'KitchenOrder';
      orderId?: string | null;
      status?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      items?: Array<{
        __typename?: 'OrderItem';
        productId?: string | null;
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetMenuQueryVariables = Exact<{
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  available?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetMenuQuery = {
  __typename?: 'Query';
  getMenu?: {
    __typename?: 'MenuItemsResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'MenuPage';
      pageNumber?: number | null;
      pageSize?: number | null;
      totalCount?: number | null;
      totalPages?: number | null;
      hasMore?: boolean | null;
      data?: Array<{
        __typename?: 'MenuItem';
        id?: string | null;
        productId?: string | null;
        name?: string | null;
        price?: number | null;
        available?: boolean | null;
        imageUrl?: string | null;
        category?: string | null;
        tags?: Array<string | null> | null;
        description?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetMenuItemQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;

export type GetMenuItemQuery = {
  __typename?: 'Query';
  getMenuItem?: {
    __typename?: 'MenuItemResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'MenuItem';
      id?: string | null;
      productId?: string | null;
      name?: string | null;
      price?: number | null;
      available?: boolean | null;
      imageUrl?: string | null;
      category?: string | null;
      tags?: Array<string | null> | null;
      description?: string | null;
      recipe?: Array<{
        __typename?: 'Ingredient';
        ingredientId?: string | null;
        quantity?: number | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetMenuGroupedByCategoryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetMenuGroupedByCategoryQuery = {
  __typename?: 'Query';
  getMenuGroupedByCategory?: {
    __typename?: 'MenuGroupedByCategoryResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: Array<{
      __typename?: 'MenuGroupCategory';
      category?: string | null;
      items?: Array<{
        __typename?: 'MenuItem';
        productId?: string | null;
        name?: string | null;
        price?: number | null;
        available?: boolean | null;
        imageUrl?: string | null;
        category?: string | null;
        tags?: Array<string | null> | null;
        description?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetMenuGroupedByTagQueryVariables = Exact<{ [key: string]: never }>;

export type GetMenuGroupedByTagQuery = {
  __typename?: 'Query';
  getMenuGroupedByTag?: {
    __typename?: 'MenuGroupedByTagResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: Array<{
      __typename?: 'MenuGroupTag';
      tag?: string | null;
      items?: Array<{
        __typename?: 'MenuItem';
        productId?: string | null;
        name?: string | null;
        price?: number | null;
        available?: boolean | null;
        imageUrl?: string | null;
        category?: string | null;
        tags?: Array<string | null> | null;
        description?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetOrderQueryVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;

export type GetOrderQuery = {
  __typename?: 'Query';
  getOrder?: {
    __typename?: 'OrderResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
      customerMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'Order';
      id?: number | null;
      orderId?: string | null;
      customerId?: string | null;
      status?: OrderStatus | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      subtotal?: number | null;
      vat?: number | null;
      serviceCharge?: number | null;
      discount?: number | null;
      totalAmount?: number | null;
      cancellationReason?: string | null;
    } | null;
  } | null;
};

export type GetOrderItemsQueryVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;

export type GetOrderItemsQuery = {
  __typename?: 'Query';
  getOrderItems?: {
    __typename?: 'OrderItemsResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: Array<{
      __typename?: 'OrderItem';
      id?: number | null;
      orderId?: string | null;
      productId?: string | null;
      productName?: string | null;
      quantity?: number | null;
      price?: number | null;
      category?: string | null;
      productSnapshot?: string | null;
    } | null> | null;
  } | null;
};

export type GetDailySalesQueryVariables = Exact<{
  date?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetDailySalesQuery = {
  __typename?: 'Query';
  getDailySales?: {
    __typename?: 'DailySalesResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'DailySalesReport';
      date?: string | null;
      totalOrders?: number | null;
      totalRevenue?: number | null;
      vatCollected?: number | null;
      topSellingItems?: Array<{
        __typename?: 'TopSellingItem';
        productId?: string | null;
        productName?: string | null;
        totalQuantity?: number | null;
        totalRevenue?: number | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetKitchenPerformanceQueryVariables = Exact<{
  date?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetKitchenPerformanceQuery = {
  __typename?: 'Query';
  getKitchenPerformance?: {
    __typename?: 'KitchenPerformanceResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'KitchenPerformanceReport';
      date?: string | null;
      totalKitchenOrders?: number | null;
      avgPrepTimeMinutes?: number | null;
      minPrepTimeMinutes?: number | null;
      maxPrepTimeMinutes?: number | null;
      slowItems?: Array<{
        __typename?: 'SlowItem';
        productId?: string | null;
        productName?: string | null;
        orderId?: string | null;
        prepTimeMinutes?: number | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetPaymentReportQueryVariables = Exact<{
  date?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetPaymentReportQuery = {
  __typename?: 'Query';
  getPaymentReport?: {
    __typename?: 'PaymentReportResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'PaymentReport';
      date?: string | null;
      successfulPayments?: number | null;
      failedPayments?: number | null;
      failureRate?: number | null;
    } | null;
  } | null;
};

export type GetCancellationReportQueryVariables = Exact<{
  date?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCancellationReportQuery = {
  __typename?: 'Query';
  getCancellationReport?: {
    __typename?: 'CancellationReportResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'CancellationReport';
      date?: string | null;
      cancelledOrders?: number | null;
      reasons?: Array<{
        __typename?: 'CancellationReason';
        reason?: string | null;
        count?: number | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetProcessingTimesQueryVariables = Exact<{
  date?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetProcessingTimesQuery = {
  __typename?: 'Query';
  getProcessingTimes?: {
    __typename?: 'ProcessingTimeResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'ProcessingTimeReport';
      date?: string | null;
      avgInventoryReserveTimeMs?: number | null;
      avgPaymentProcessingMs?: number | null;
      avgKitchenPrepMinutes?: number | null;
    } | null;
  } | null;
};

export type GetRevenueByCategoryQueryVariables = Exact<{
  date?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetRevenueByCategoryQuery = {
  __typename?: 'Query';
  getRevenueByCategory?: {
    __typename?: 'RevenueByCategoryResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: Array<{
      __typename?: 'CategoryRevenue';
      category?: string | null;
      revenue?: number | null;
    } | null> | null;
  } | null;
};

export type GetMonthlySummaryQueryVariables = Exact<{
  year?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetMonthlySummaryQuery = {
  __typename?: 'Query';
  getMonthlySummary?: {
    __typename?: 'MonthlySummaryResponse';
    header?: {
      __typename?: 'ApiHeader';
      responseCode?: number | null;
      responseMessage?: string | null;
    } | null;
    body?: {
      __typename?: 'MonthlySummaryReport';
      period?: string | null;
      grossSales?: number | null;
      netSales?: number | null;
      vatCollected?: number | null;
    } | null;
  } | null;
};

export const StartPreparingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'StartPreparing' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'startPreparing' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  StartPreparingMutation,
  StartPreparingMutationVariables
>;
export const MarkReadyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MarkReady' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'markReady' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarkReadyMutation, MarkReadyMutationVariables>;
export const CreateMenuItemDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateMenuItem' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'item' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MenuItemInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createMenuItem' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'item' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'item' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'available' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateMenuItemMutation,
  CreateMenuItemMutationVariables
>;
export const UpdateMenuItemDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateMenuItem' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'item' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MenuItemInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateMenuItem' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'productId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'productId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'item' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'item' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'available' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateMenuItemMutation,
  UpdateMenuItemMutationVariables
>;
export const SetItemAvailabilityDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetItemAvailability' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'available' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setItemAvailability' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'productId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'productId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'available' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'available' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'available' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SetItemAvailabilityMutation,
  SetItemAvailabilityMutationVariables
>;
export const CreateOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customerId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'items' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'CreateOrderItemInput' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customerId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customerId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'items' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'items' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customerMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subtotal' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'vat' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'serviceCharge' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalAmount' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const CompleteOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CompleteOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'completeOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalAmount' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CompleteOrderMutation,
  CompleteOrderMutationVariables
>;
export const CancelOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CancelOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reason' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cancelOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reason' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reason' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customerMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cancellationReason' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CancelOrderMutation, CancelOrderMutationVariables>;
export const GetKitchenOrdersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetKitchenOrders' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'currentPage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageSize' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'status' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getKitchenOrders' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'currentPage' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'currentPage' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pageSize' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pageSize' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'status' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quantity' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetKitchenOrdersQuery,
  GetKitchenOrdersQueryVariables
>;
export const GetMenuDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMenu' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'currentPage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageSize' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'category' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'tag' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'available' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMenu' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'currentPage' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'currentPage' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pageSize' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pageSize' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'category' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'category' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tag' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tag' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'available' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'available' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'data' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'available' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'imageUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'category' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tags' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageNumber' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSize' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalPages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasMore' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMenuQuery, GetMenuQueryVariables>;
export const GetMenuItemDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMenuItem' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMenuItem' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'productId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'productId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'available' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'recipe' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ingredientId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quantity' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMenuItemQuery, GetMenuItemQueryVariables>;
export const GetMenuGroupedByCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMenuGroupedByCategory' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMenuGroupedByCategory' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'available' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'imageUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'category' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tags' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMenuGroupedByCategoryQuery,
  GetMenuGroupedByCategoryQueryVariables
>;
export const GetMenuGroupedByTagDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMenuGroupedByTag' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMenuGroupedByTag' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'available' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'imageUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'category' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tags' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMenuGroupedByTagQuery,
  GetMenuGroupedByTagQueryVariables
>;
export const GetOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customerMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subtotal' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'vat' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'serviceCharge' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalAmount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cancellationReason' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOrderQuery, GetOrderQueryVariables>;
export const GetOrderItemsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetOrderItems' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getOrderItems' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'quantity' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productSnapshot' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOrderItemsQuery, GetOrderItemsQueryVariables>;
export const GetDailySalesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetDailySales' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getDailySales' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalOrders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalRevenue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vatCollected' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'topSellingItems' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalQuantity' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalRevenue' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDailySalesQuery, GetDailySalesQueryVariables>;
export const GetKitchenPerformanceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetKitchenPerformance' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getKitchenPerformance' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalKitchenOrders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avgPrepTimeMinutes' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'minPrepTimeMinutes' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'maxPrepTimeMinutes' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'slowItems' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'orderId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'prepTimeMinutes' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetKitchenPerformanceQuery,
  GetKitchenPerformanceQueryVariables
>;
export const GetPaymentReportDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPaymentReport' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getPaymentReport' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'successfulPayments' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'failedPayments' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'failureRate' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPaymentReportQuery,
  GetPaymentReportQueryVariables
>;
export const GetCancellationReportDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCancellationReport' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCancellationReport' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cancelledOrders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reasons' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reason' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCancellationReportQuery,
  GetCancellationReportQueryVariables
>;
export const GetProcessingTimesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProcessingTimes' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getProcessingTimes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'avgInventoryReserveTimeMs',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avgPaymentProcessingMs' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avgKitchenPrepMinutes' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProcessingTimesQuery,
  GetProcessingTimesQueryVariables
>;
export const GetRevenueByCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRevenueByCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getRevenueByCategory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'revenue' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRevenueByCategoryQuery,
  GetRevenueByCategoryQueryVariables
>;
export const GetMonthlySummaryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMonthlySummary' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'year' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'month' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMonthlySummary' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'year' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'year' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'month' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'month' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responseMessage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'body' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'period' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'grossSales' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'netSales' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vatCollected' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMonthlySummaryQuery,
  GetMonthlySummaryQueryVariables
>;
