import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';


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

  console.log(userInfo)

  const authenticatedUser = await Auth.currentAuthenticatedUser();
  const username = authenticatedUser.username;

  let user = userInfo;
  user.id = username;

  const newUser = await API.graphql(graphqlOperation(mutations.createUser, { input: user }));
  return newUser;
}

// the user is auto detected
export const updateUser = async (userInfo) => {

  const authenticatedUser = await Auth.currentAuthenticatedUser();
  const username = authenticatedUser.username;

  let user = userInfo;
  user.id = username;

  const newUser = await API.graphql(graphqlOperation(mutations.updateUser, { input: user }));
  return newUser;
}


