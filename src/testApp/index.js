import React, { Component } from 'react';

import './TestApp.css';

import { Button } from 'semantic-ui-react'
import * as v1 from '../v1';


class TestApp extends Component {





  // Users



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




  // Conversations


  createConversation = async () => {
    const conversation = await v1.createConversation({ users: ['rawad1', 'rawad2'] });
    console.log(conversation);
  }

  getConversation = async () => {
    const conversation = await v1.getConversation('rawad1;rawad2');
    console.log(conversation);
  }

  listConversations = async () => {
    const conversations = await v1.listConversations();
    console.log(conversations);
  }

  updateConversation = async () => {
    const conversation = await v1.updateConversation({ id: 'rawad1;rawad2', users: ['rawad1', 'rawad2'], archived: 'zzz' });
    console.log(conversation);
  }




  // Messages


  createMessage = async () => {
    const message = await v1.createMessage({ content: 'hello', messageConversationId: 'rawad1;rawad2' });
    console.log(message);
  }

  updateMessage = async () => {
    const message = await v1.updateMessage({ id: 'rawad1;rawad2', content: 'world' });
    console.log(message);
  }





  // Channels

  createChannel = async () => {
    const channel = await v1.createChannel({ id: 'neighbors' });
    console.log(channel);
  }

  getChannel = async () => {
    const channel = await v1.getChannel('neighbors')
    console.log(channel);
  }

  listChannels = async () => {
    const channels = await v1.listChannels();
    console.log(channels);
  }

  updateChannel = async () => {
    const channel = await v1.updateChannel({ id: 'neighbors', description: 'zzz' });
    console.log(channel);
  }





  // Marketplaces

  createMarketplace = async () => {
    const marketplace = await v1.createMarketplace({ name: 'Shoes', description: 'buy and sell shoes' });
    console.log(marketplace);
  }

  getMarketplace = async () => {
    const marketplace = await v1.getMarketplace('pass id here')
    console.log(marketplace);
  }

  listMarketplaces = async () => {
    const marketplaces = await v1.listMarketplaces();
    console.log(marketplaces);
  }

  updateMarketplace = async () => {
    const marketplace = await v1.updateMarketplace({ id: 'pass id here', description: 'zzz' });
    console.log(marketplace);
  }




  // Posts

  createPost = async () => {
    const post = await v1.createPost({ title: 'OG shoes', description: 'brand new', postMarketplaceId: 'pass id here' });
    console.log(post);
  }

  updatePost = async () => {
    const post = await v1.updatePost({ id: 'pass post id here', description: 'zzz' });
    console.log(post);
  }



  // the render function


  render() {
    return (
      <div className="App">

        <br></br>
        <h2>Users</h2>
        <Button secondary onClick={this.createUser}>create user</Button>
        <Button secondary onClick={this.getUser}>get user</Button>
        <Button secondary onClick={this.listUsers}>list users</Button>
        <Button secondary onClick={this.updateUser}>update user</Button>

        <br></br>
        <h2>Conversations</h2>
        <Button secondary onClick={this.createConversation}>create conversation</Button>
        <Button secondary onClick={this.getConversation}>get conversation</Button>
        <Button secondary onClick={this.listConversations}>list conversations</Button>
        <Button secondary onClick={this.updateConversation}>update conversation</Button>

        <br></br>
        <h2>Messages</h2>
        <Button secondary onClick={this.createMessage}>create message</Button>
        <Button secondary onClick={this.updateMessage}>update message</Button>

        <br></br>
        <h2>Channels</h2>
        <Button secondary onClick={this.createChannel}>create channel</Button>
        <Button secondary onClick={this.getChannel}>get channel</Button>
        <Button secondary onClick={this.listChannels}>list channels</Button>
        <Button secondary onClick={this.updateChannel}>update channel</Button>



        <br></br>
        <h2>Marketplaces</h2>
        <Button secondary onClick={this.createMarketplace}>create Marketplace</Button>
        <Button secondary onClick={this.getMarketplace}>get Marketplace</Button>
        <Button secondary onClick={this.listMarketplaces}>list Marketplaces</Button>
        <Button secondary onClick={this.updateMarketplace}>update Marketplace</Button>

        <br></br>
        <h2>Posts</h2>
        <Button secondary onClick={this.createPost}>create Post</Button>
        <Button secondary onClick={this.updatePost}>update Post</Button>

      </div>
    );
  }
}

export default (TestApp);
