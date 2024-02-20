
const DeviceType = `
  type DeviceType {
    """ Device Name """
    name: String!
    
    """ Device Visual Test Status (error, success, empty) """
    status: String!
    
    """ Device Visual Test Snapshot """
    snapshot: String
  }
`;

export default DeviceType;
