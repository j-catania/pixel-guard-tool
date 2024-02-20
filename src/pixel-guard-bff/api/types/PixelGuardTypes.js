import gql from 'graphql-tag';
import AppType from './commons/AppType.js';
import UserType from './commons/UserType.js';
import DeviceType from './commons/DeviceType.js';
import VisualTestType from './visual-test/VisualTestType.js';
import VisualTestQueriesType from './visual-test/VisualTestQueriesType.js';

const PixelGuardTypes = gql`
  # common schemas
  ${AppType}
  ${UserType}
  ${DeviceType}
  
  # outputted schemas
  ${VisualTestType}
  
  # the schemas allows the following queries
  ${VisualTestQueriesType}
 
  # this schemas allows the following mutations
`;

export default PixelGuardTypes;
