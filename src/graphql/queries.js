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
        users
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
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    users
    content
    archived
    conversation {
      id
      users
      archived
      messages {
        nextToken
      }
    }
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      users
      content
      archived
      conversation {
        id
        users
        archived
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
    ChannelMessages {
      items {
        id
        users
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
      ChannelMessages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getChannelMessage = `query GetChannelMessage($id: ID!) {
  getChannelMessage(id: $id) {
    id
    users
    content
    archived
    channel {
      id
      description
      users
      archived
      ChannelMessages {
        nextToken
      }
    }
  }
}
`;
export const listChannelMessages = `query ListChannelMessages(
  $filter: ModelChannelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannelMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      users
      content
      archived
      channel {
        id
        description
        users
        archived
      }
    }
    nextToken
  }
}
`;
