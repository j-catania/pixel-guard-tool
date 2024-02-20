import { gql, } from 'graphql-request';

const GET_VISUAL_TEST_LIST_PAGINATED = gql`
    query getVisualTestListByPageAndParams($offset: Int, $limit: Int, $searchText: String) {
      getVisualTestListByPageAndParams(offset: $offset, limit: $limit, searchText: $searchText) {
            trigramme {
              value
              identifier
              description
            }         
      }
    }
`;

export default GET_VISUAL_TEST_LIST_PAGINATED;
