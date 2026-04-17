import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import ContextValue from '@/graphql/api/apolloServer/context';
import schema from '@/graphql/api/apolloServer/schema';

const plugins = [
  process.env.NODE_ENV === 'production'
    ? ApolloServerPluginLandingPageDisabled()
    : ApolloServerPluginLandingPageLocalDefault({ embed: true }),
];

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: 'bounded',
  introspection: process.env.NODE_ENV !== 'production',
  plugins,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => new ContextValue({ req, res: null }),
});

export async function GET(req: NextRequest) {
  return handler(req);
}

export async function POST(req: NextRequest) {
  return handler(req);
}
