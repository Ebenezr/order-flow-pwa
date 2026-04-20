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
};

export default function MenuGrid({ category }: Props) {
  const { data, loading, fetchMore } = useQuery<GetMenuQuery>(GET_MENU, {
    variables: {
      currentPage: 0,
      pageSize: PAGE_SIZE,
      category: category || undefined,
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

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
              return {
                getMenu: {
                  ...fetchMoreResult.getMenu,
                  body: {
                    ...fetchMoreResult.getMenu?.body,
                    data: [
                      ...(prev.getMenu?.body?.data || []),
                      ...(fetchMoreResult.getMenu?.body?.data || []),
                    ],
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
        {loading && menuItems.length === 0
          ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <MenuCardSkeleton key={i} />
            ))
          : menuItems
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
          menuItems.length > 0 &&
          Array.from({ length: 3 }).map((_, i) => (
            <MenuCardSkeleton key={`loading-${i}`} />
          ))}
      </Box>
    </Box>
  );
}
