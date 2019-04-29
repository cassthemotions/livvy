import React, { Component } from 'react';

import './TestApp.css';

import { Button } from 'semantic-ui-react'
import * as v1 from '../v1';


class TestApp extends Component {


  createUser = async () => {
    const user = await v1.createUser({ firstName: 'rawad' });
    console.log(user);
  }

  getUser = async () => {
    const user = await v1.getUser();
    console.log(user);
  }

  listUsers = async () => {
    const users = await v1.listUsers();
    console.log(users);
  }

  updateUser = async () => {
    const user = await v1.updateUser({ lastName: 'zzz' });
    console.log(user);
  }




  createConversation = async () => {
    const conversation = await v1.createConversation({ users: ['rawad', 'juan'] });
    console.log(conversation);
  }

  getConversation = async () => {
    const conversation = await v1.getConversation('juan;rawad');
    console.log(conversation);
  }

  listConversations = async () => {
    const conversations = await v1.listConversations();
    console.log(conversations);
  }

  updateConversation = async () => {
    const conversation = await v1.updateConversation({ id: 'juan;rawad', users: ['rawad', 'juan', 'rawad1'], archived: 'zzz', owner: null });
    console.log(conversation);
  }




  createChannel = async () => {
    const channel = await v1.createChannel({ id: 'neighbours' });
    console.log(channel);
  }

  getChannel = async () => {
    const channel = await v1.getChannel('neighbours')
    console.log(channel);
  }

  listChannels = async () => {
    const channels = await v1.listChannels();
    console.log(channels);
  }

  updateChannel = async () => {
    const channel = await v1.updateChannel({ id: 'neighbours', description: 'zzz' });
    console.log(channel);
  }






  render() {
    return (
      <div className="App">

        <br></br>
        <h2>Users</h2>
        <Button secondary onClick={this.createUser}>create user</Button>
        <Button secondary onClick={this.getUser}>get user</Button>
        <Button secondary onClick={this.listUsers}>get all users</Button>
        <Button secondary onClick={this.updateUser}>update user</Button>

        <br></br>
        <h2>Conversations</h2>
        <Button secondary onClick={this.createConversation}>create conversation</Button>
        <Button secondary onClick={this.getConversation}>get conversation</Button>
        <Button secondary onClick={this.listConversations}>list conversations</Button>
        <Button secondary onClick={this.updateConversation}>update conversation</Button>

        <br></br>
        <h2>Channels</h2>
        <Button secondary onClick={this.createChannel}>create channel</Button>
        <Button secondary onClick={this.getChannel}>get channel</Button>
        <Button secondary onClick={this.listChannels}>list channels</Button>
        <Button secondary onClick={this.updateChannel}>update channel</Button>

      </div>
    );
  }
}

export default (TestApp);
