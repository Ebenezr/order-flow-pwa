import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/graphql/api/apolloServer/schemas/**/typeDefs.ts',
  documents: ['src/graphql/api/apolloClient/**/*.ts'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
    },
  },
};

export default config;
