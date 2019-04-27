// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createUserConversation = `mutation CreateUserConversation($input: CreateUserConversationInput!) {
  createUserConversation(input: $input) {
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
export const updateUserConversation = `mutation UpdateUserConversation($input: UpdateUserConversationInput!) {
  updateUserConversation(input: $input) {
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
export const deleteUserConversation = `mutation DeleteUserConversation($input: DeleteUserConversationInput!) {
  deleteUserConversation(input: $input) {
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
export const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
export const updateConversation = `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
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
export const deleteConversation = `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
