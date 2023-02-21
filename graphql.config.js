module.exports = require('./.cache/typegen/graphql.config.json');
module.exports = {
  schema: ['src/__generated__/gatsby-introspection.json'],
  documents: ['src/__generated__/gatsby-plugin-documents.graphql'],
  extensions: {
    endpoints: {
      default: {
        url: 'http://localhost:8000/___graphql',
        headers: { 'user-agent': 'JS GraphQL' },
        introspect: false,
      },
    },
  },
};
