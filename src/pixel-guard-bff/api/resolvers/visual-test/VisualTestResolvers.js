import VisualTestQueries from './VisualTestQueries.js';

/**
 * Un resolver graphql est formé par la composition des queries et mutations
 */
const VisualTestResolvers = {
  Query: {
    ...VisualTestQueries,
  },
};

export default VisualTestResolvers;
