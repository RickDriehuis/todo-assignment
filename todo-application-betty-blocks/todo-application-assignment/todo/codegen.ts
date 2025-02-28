import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/schema.ts'],
  generates: {
    'src/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        namingConvention: {
          enumValues: 'change-case-all#upperCase',
        },
      },
    },
  },
  // ignoreNoDocuments: true,
};

export default config;
