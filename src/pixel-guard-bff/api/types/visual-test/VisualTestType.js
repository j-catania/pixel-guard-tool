
const VisualTestType = `
  type VisualTestType {
    """ VisualTest Unique id """
    _id: String!
    
    """ App Related Infos """
    app: AppType!
    
    """ VisualTest Link """
    link: String!
    
    """ VisualTest Emulated Devices Status """
    devices: DeviceType!
    
    """ VisualTest Mock User """
    user: UserType       
  }
`;

export default VisualTestType;
