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
    userConversations {
      items {
        id
      }
      nextToken
    }
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
      userConversations {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUserConversation = `query GetUserConversation($id: ID!) {
  getUserConversation(id: $id) {
    id
    user {
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
      userConversations {
        nextToken
      }
    }
    conversation {
      id
      conversationUsers {
        nextToken
      }
      archived
      messages {
        nextToken
      }
    }
  }
}
`;
export const listUserConversations = `query ListUserConversations(
  $filter: ModelUserConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
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
      conversation {
        id
        archived
      }
    }
    nextToken
  }
}
`;
export const getConversation = `query GetConversation($id: ID!) {
  getConversation(id: $id) {
    id
    conversationUsers {
      items {
        id
      }
      nextToken
    }
    archived
    messages {
      items {
        id
        users
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
      conversationUsers {
        nextToken
      }
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
    archived
    conversation {
      id
      conversationUsers {
        nextToken
      }
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
      archived
      conversation {
        id
        archived
      }
    }
    nextToken
  }
}
`;
