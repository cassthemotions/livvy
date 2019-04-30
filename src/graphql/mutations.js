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
        content
        archived
      }
      nextToken
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
export const updateChannel = `mutation UpdateChannel($input: UpdateChannelInput!) {
  updateChannel(input: $input) {
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
export const deleteChannel = `mutation DeleteChannel($input: DeleteChannelInput!) {
  deleteChannel(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
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
    channel {
      id
      description
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
    channel {
      id
      description
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
    channel {
      id
      description
      users
      archived
      messages {
        nextToken
      }
    }
  }
}
`;
export const createMarketplace = `mutation CreateMarketplace($input: CreateMarketplaceInput!) {
  createMarketplace(input: $input) {
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
export const updateMarketplace = `mutation UpdateMarketplace($input: UpdateMarketplaceInput!) {
  updateMarketplace(input: $input) {
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
export const deleteMarketplace = `mutation DeleteMarketplace($input: DeleteMarketplaceInput!) {
  deleteMarketplace(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    subtitle
    description
    archived
    marketplace {
      id
      name
      description
      users
      archived
      posts {
        nextToken
      }
    }
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    title
    subtitle
    description
    archived
    marketplace {
      id
      name
      description
      users
      archived
      posts {
        nextToken
      }
    }
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    title
    subtitle
    description
    archived
    marketplace {
      id
      name
      description
      users
      archived
      posts {
        nextToken
      }
    }
  }
}
`;
