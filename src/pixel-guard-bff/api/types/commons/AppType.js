
const AppType = `
  """ A trigramme is an application identifier. """
  type TrigrammeType {
    """ trigramme value (exp: npe, gkb, wtr, ...) """
    value: String!
    
    """ trigramme identifier: (value + repoName) """
    identifier: String!
    
    """ Additional informations """
    description: String
  }
`;

export default AppType;
