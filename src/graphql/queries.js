// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    lastName
    dobMonth
    dobDay
    dobYear
    address1
    address2
    country
    region
    city
    postalCode
    email
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      dobMonth
      dobDay
      dobYear
      address1
      address2
      country
      region
      city
      postalCode
      email
    }
    nextToken
  }
}
`;
export const getConversation = `query GetConversation($id: ID!) {
  getConversation(id: $id) {
    id
    users
    archived
    messages {
      items {
        id
        content
        archived
      }
      nextToken
    }
  }
}
`;
export const listConversations = `query ListConversations(
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      users
      archived
      messages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getChannel = `query GetChannel($id: ID!) {
  getChannel(id: $id) {
    id
    description
    users
    archived
    messages {
      items {
        id
        content
        archived
      }
      nextToken
    }
  }
}
`;
export const listChannels = `query ListChannels(
  $filter: ModelChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      users
      archived
      messages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMarketplace = `query GetMarketplace($id: ID!) {
  getMarketplace(id: $id) {
    id
    name
    description
    users
    archived
    posts {
      items {
        id
        title
        subtitle
        description
        archived
      }
      nextToken
    }
  }
}
`;
export const listMarketplaces = `query ListMarketplaces(
  $filter: ModelMarketplaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listMarketplaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      users
      archived
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
