/* eslint-disable max-len */
const VisualTestQueriesType = `
  type Query {
      getVisualTestListByPageAndParams(offset: Int, limit: Int, searchText: String): [VisualTestType]
  }
`;

export default VisualTestQueriesType;
