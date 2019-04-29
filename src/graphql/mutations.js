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
  }
}
`;
export const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
export const updateConversation = `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
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
export const deleteConversation = `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
export const createChannel = `mutation CreateChannel($input: CreateChannelInput!) {
  createChannel(input: $input) {
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
export const updateChannel = `mutation UpdateChannel($input: UpdateChannelInput!) {
  updateChannel(input: $input) {
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
export const deleteChannel = `mutation DeleteChannel($input: DeleteChannelInput!) {
  deleteChannel(input: $input) {
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
export const createChannelMessage = `mutation CreateChannelMessage($input: CreateChannelMessageInput!) {
  createChannelMessage(input: $input) {
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
export const updateChannelMessage = `mutation UpdateChannelMessage($input: UpdateChannelMessageInput!) {
  updateChannelMessage(input: $input) {
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
export const deleteChannelMessage = `mutation DeleteChannelMessage($input: DeleteChannelMessageInput!) {
  deleteChannelMessage(input: $input) {
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
