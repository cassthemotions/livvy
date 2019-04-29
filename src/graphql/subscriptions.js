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
  }
}
`;
export const onCreateConversation = `subscription OnCreateConversation {
  onCreateConversation {
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
export const onUpdateConversation = `subscription OnUpdateConversation {
  onUpdateConversation {
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
export const onDeleteConversation = `subscription OnDeleteConversation {
  onDeleteConversation {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
export const onCreateChannel = `subscription OnCreateChannel {
  onCreateChannel {
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
export const onUpdateChannel = `subscription OnUpdateChannel {
  onUpdateChannel {
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
export const onDeleteChannel = `subscription OnDeleteChannel {
  onDeleteChannel {
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
export const onCreateChannelMessage = `subscription OnCreateChannelMessage {
  onCreateChannelMessage {
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
export const onUpdateChannelMessage = `subscription OnUpdateChannelMessage {
  onUpdateChannelMessage {
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
export const onDeleteChannelMessage = `subscription OnDeleteChannelMessage {
  onDeleteChannelMessage {
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
