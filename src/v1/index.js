import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

const addUserName = async (obj) => {
  const authenticatedUser = await Auth.currentAuthenticatedUser();
  const username = authenticatedUser.username;

  const newObj = obj;
  newObj.id = username;

  return newObj;
}

/**
 * Users
 */
export const listUsers = async () => {

  const users = await API.graphql(graphqlOperation(queries.listUsers));
  return users.data.listUsers.items;
}

export const getUser = async () => {

  const authenticatedUser = await Auth.currentAuthenticatedUser();
  const username = authenticatedUser.username;

  const user = await API.graphql(graphqlOperation(queries.getUser, { id: username }));

  return user.data.getUser;
}

export const createUser = async (userInfo) => {

  const user = await addUserName(userInfo);

  const newUser = await API.graphql(graphqlOperation(mutations.createUser, { input: user }));
  return newUser;
}

export const updateUser = async (userInfo) => {

  const user = await addUserName(userInfo);

  const newUser = await API.graphql(graphqlOperation(mutations.updateUser, { input: user }));
  return newUser;
}


const conversationWithId = (obj) => {

  let conversation = obj;
  conversation.users.sort();
  conversation.id = conversation.users.reduce((list, user) => list + ';' + user);
  return conversation;
}


/**
 * Conversations
 */
export const listConversations = async () => {

  const conversations = await API.graphql(graphqlOperation(queries.listConversations));
  return conversations.data.listConversations.items;
}

export const getConversation = async (id) => {

  const conversation = await API.graphql(graphqlOperation(queries.getConversation, { id: id }));
  return conversation.data.getConversation;
}

export const createConversation = async (conversationInfo) => {

  const conversation = conversationWithId(conversationInfo);
  console.log(conversation)

  const newConversation = await API.graphql(graphqlOperation(mutations.createConversation, { input: conversation }));
  return newConversation;
}

export const updateConversation = async (conversationInfo) => {

  const newConversation = await API.graphql(graphqlOperation(mutations.updateConversation, { input: conversationInfo }));
  return newConversation;
}


/**
 * Messages
 */

export const createMessage = async (messageInfo) => {

  const newMessage = await API.graphql(graphqlOperation(mutations.createMessage, { input: messageInfo }));
  return newMessage;
}

export const updateMessage = async (messageInfo) => {

  const newMessage = await API.graphql(graphqlOperation(mutations.updateMessage, { input: messageInfo }));
  return newMessage;
}


/**
 * Channels
 */
export const listChannels = async () => {

  const channels = await API.graphql(graphqlOperation(queries.listChannels));
  return channels.data.listChannels.items;
}

export const getChannel = async (id) => {

  const channel = await API.graphql(graphqlOperation(queries.getChannel, { id: id }));
  return channel.data.getChannel;
}

export const createChannel = async (channelInfo) => {

  const newChannel = await API.graphql(graphqlOperation(mutations.createChannel, { input: channelInfo }));
  return newChannel;
}

export const updateChannel = async (channelInfo) => {

  const newChannel = await API.graphql(graphqlOperation(mutations.updateChannel, { input: channelInfo }));
  return newChannel;
}




/**
 * Marketplaces
 */
export const listMarketplaces = async () => {

  const marketplaces = await API.graphql(graphqlOperation(queries.listMarketplaces));
  return marketplaces.data.listMarketplaces.items;
}

export const getMarketplace = async (id) => {

  const marketplace = await API.graphql(graphqlOperation(queries.getMarketplace, { id: id }));
  return marketplace.data.getMarketplace;
}

export const createMarketplace = async (marketplaceInfo) => {

  const newMarketplace = await API.graphql(graphqlOperation(mutations.createMarketplace, { input: marketplaceInfo }));
  return newMarketplace;
}

export const updateMarketplace = async (marketplaceInfo) => {

  const newMarketplace = await API.graphql(graphqlOperation(mutations.updateMarketplace, { input: marketplaceInfo }));
  return newMarketplace;
}




/**
 * Posts
 */

export const createPost = async (postInfo) => {

  const newPost = await API.graphql(graphqlOperation(mutations.createPost, { input: postInfo }));
  return newPost;
}

export const updatePost = async (postInfo) => {

  const newPost = await API.graphql(graphqlOperation(mutations.updatePost, { input: postInfo }));
  return newPost;
}
