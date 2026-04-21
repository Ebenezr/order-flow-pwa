'use client';

import { useCallback } from 'react';
import { Box } from '@mui/material';
import MenuCard from './MenuCard';
import { GET_MENU } from '@/graphql/api/apolloClient/Queries/Menu';
import { useQuery } from '@apollo/client/react';
import { GetMenuQuery } from '@/graphql/generated/graphql';
import MenuCardSkeleton from './MenuCardSkeleton';

const PAGE_SIZE = 6;

type Props = {
  category?: string | null;
  search?: string;
};

function MenuError({
  message,
  onRetry,
}: {
  message?: string;
  onRetry: () => void;
}) {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          p: 4,
          borderRadius: 4,
          backgroundColor: '#fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          maxWidth: 320,
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            backgroundColor: '#fdecea',
            color: '#d32f2f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          !
        </Box>

        <Box sx={{ fontWeight: 600, mb: 1 }}>Something went wrong</Box>

        <Box sx={{ fontSize: 14, color: '#777', mb: 3 }}>
          {message || 'Server is unavailable. Please try again.'}
        </Box>

        <Box
          onClick={onRetry}
          sx={{
            backgroundColor: '#d32f2f',
            color: '#fff',
            py: 1.5,
            borderRadius: 3,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Retry
        </Box>
      </Box>
    </Box>
  );
}

export default function MenuGrid({ category, search }: Props) {
  const { data, loading, fetchMore, error, refetch } = useQuery<GetMenuQuery>(
    GET_MENU,
    {
      variables: {
        currentPage: 0,
        pageSize: PAGE_SIZE,
        category: category || undefined,
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    },
  );

  const menuItems = data?.getMenu?.body?.data || [];
  const hasMore = data?.getMenu?.body?.hasMore ?? false;
  const currentPage = data?.getMenu?.body?.pageNumber ?? 1;

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const target = e.currentTarget;
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 50) {
        if (!loading && hasMore) {
          fetchMore({
            variables: {
              currentPage: currentPage + 1,
              pageSize: PAGE_SIZE,
              category: category || undefined,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;

              const prevItems = prev.getMenu?.body?.data || [];
              const newItems = fetchMoreResult.getMenu?.body?.data || [];

              const merged = [...prevItems, ...newItems];

              const uniqueItems = Array.from(
                new Map(merged.map((item) => [item?.id, item])).values(),
              );

              return {
                getMenu: {
                  ...fetchMoreResult.getMenu,
                  body: {
                    ...fetchMoreResult.getMenu?.body,
                    data: uniqueItems,
                  },
                },
              };
            },
          });
        }
      }
    },
    [loading, hasMore, currentPage, category, fetchMore],
  );

  if (error && menuItems.length === 0) {
    const message = 'Unable to load menu. Check connection.';
    return <MenuError message={message} onRetry={() => refetch()} />;
  }

  if (!loading && menuItems.length === 0) {
    return (
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#777',
        }}
      >
        No items found
      </Box>
    );
  }

  const filteredItems = menuItems.filter((item) => {
    if (!item) return false;

    const terms = search?.toLowerCase().split(' ').filter(Boolean) || [];

    if (terms.length === 0) return true;

    const name = item.name?.toLowerCase() || '';
    const desc = item.description?.toLowerCase() || '';
    const category = item.category?.toLowerCase() || '';
    const tags = item.tags?.map((t) => t?.toLowerCase() || '') || [];

    return terms.every(
      (term) =>
        name.includes(term) ||
        desc.includes(term) ||
        category.includes(term) ||
        tags.some((tag) => tag.includes(term)),
    );
  });

  return (
    <Box
      sx={{
        height: '100%',
        minHeight: 0,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          'height': '100%',
          'overflowY': 'auto',
          'pr': 1,

          'display': 'grid',
          'gridTemplateColumns': 'repeat(3, 1fr)',
          'gridAutoRows': 'max-content',
          'gap': 2,

          '&::-webkit-scrollbar': {
            width: 6,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ddd',
            borderRadius: 3,
          },
        }}
        onScroll={handleScroll}
      >
        {loading && filteredItems.length === 0
          ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <MenuCardSkeleton key={i} />
            ))
          : filteredItems
              .filter(
                (item): item is NonNullable<typeof item> =>
                  item != null &&
                  !!item.id &&
                  !!item.name &&
                  item.price != null &&
                  !!item.imageUrl,
              )
              .map((item) => (
                <MenuCard
                  key={item.id!}
                  id={item.id!}
                  name={item.name!}
                  price={item.price!}
                  imageUrl={item.imageUrl!}
                  description={item.description ?? undefined}
                  available={item.available ?? undefined}
                  tags={item.tags?.filter((t): t is string => t != null)}
                />
              ))}
        {loading &&
          filteredItems.length > 0 &&
          Array.from({ length: 3 }).map((_, i) => (
            <MenuCardSkeleton key={`loading-${i}`} />
          ))}
      </Box>
    </Box>
  );
}
