// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateUserConversation = `subscription OnCreateUserConversation {
  onCreateUserConversation {
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
export const onUpdateUserConversation = `subscription OnUpdateUserConversation {
  onUpdateUserConversation {
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
export const onDeleteUserConversation = `subscription OnDeleteUserConversation {
  onDeleteUserConversation {
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
export const onCreateConversation = `subscription OnCreateConversation {
  onCreateConversation {
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
export const onUpdateConversation = `subscription OnUpdateConversation {
  onUpdateConversation {
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
export const onDeleteConversation = `subscription OnDeleteConversation {
  onDeleteConversation {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
