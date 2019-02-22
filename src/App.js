import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { Button } from 'semantic-ui-react'

Amplify.configure(awsmobile);

class App extends Component {


  getUser = async () => {
    const response = await API.get('livvyAPI', '/users');
    console.log(JSON.stringify(response, null, 2));
  }

  getAllUsers = async () => {

    const response = await API.get('livvyAPI', '/users/all');
    console.log(JSON.stringify(response, null, 2));
  }

  updateUser = async () => {

    const body = {
      firstName: "rawad",
      lastName: "rifai"
    };

    let init = {
      body: body
    }
    const response = await API.post('livvyAPI', '/users', init);
    console.log(JSON.stringify(response, null, 2));
  }


  getMessage = async () => {
    const id = "rawad;us-west-2:2abc67d6-1f53-4637-b5a7-dd671ee0e704;";
    const timestamp = "1548404603473"
    const response = await API.get('livvyAPI', '/messages/' + id + "/" + timestamp);
    console.log(JSON.stringify(response, null, 2));
  }

  getMessagesWithDate = async () => {

    let init = {
      queryStringParameters: {
        "FROM": 1548404603473
      }
    }

    const id = "rawad;us-west-2:2abc67d6-1f53-4637-b5a7-dd671ee0e704;";
    const response = await API.get('livvyAPI', '/messages/' + id, init);

    console.log(JSON.stringify(response, null, 2));
  }

  putMessage = async () => {

    let init = {
      body: {
        "to": ["rawad"],
        "message": "hello"
      }
    }
    const response = await API.put('livvyAPI', '/messages', init);
    console.log(JSON.stringify(response, null, 2));
  }

  updateMessage = async () => {

    const body = {
      ETH: "999",
      BTC: "456",
      XRP: "123"
    };

    let init = {
      body: body
    }
    const response = await API.post('livvyAPI', '/messages', init);
    console.log(JSON.stringify(response, null, 2));
  }





  render() {
    return (
      <div className="App">

        <br></br>
        <h2>Users</h2>
        <Button secondary onClick={this.getUser}>get user</Button>
        <Button secondary onClick={this.getAllUsers}>get all users</Button>
        <Button secondary onClick={this.updateUser}>update user</Button>

        <br></br>
        <h2>Messages</h2>
        <Button secondary onClick={this.putMessage}>put message</Button>
        <Button secondary onClick={this.getMessage}>get message</Button>
        <Button secondary onClick={this.getAllMessages}>get all messages</Button>
        <Button secondary onClick={this.updateMessage}>update message</Button>

      </div>
    );
  }
}

export default withAuthenticator(App, true);
