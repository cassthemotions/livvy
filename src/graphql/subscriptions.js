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
        content
        archived
      }
      nextToken
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
export const onUpdateChannel = `subscription OnUpdateChannel {
  onUpdateChannel {
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
export const onDeleteChannel = `subscription OnDeleteChannel {
  onDeleteChannel {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
export const onCreateMarketplace = `subscription OnCreateMarketplace {
  onCreateMarketplace {
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
export const onUpdateMarketplace = `subscription OnUpdateMarketplace {
  onUpdateMarketplace {
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
export const onDeleteMarketplace = `subscription OnDeleteMarketplace {
  onDeleteMarketplace {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
