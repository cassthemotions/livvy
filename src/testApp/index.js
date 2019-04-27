import React, { Component } from 'react';

import './TestApp.css';
import { API } from 'aws-amplify';

import { Button } from 'semantic-ui-react'
import * as v1 from '../v1';


class TestApp extends Component {


  createUser = async () => {
    const user = await v1.createUser({ firstName: 'juan' });
    console.log(user);
  }

  getUser = async () => {
    const user = await v1.getUser();
    console.log(user);
  }

  getAllUsers = async () => {

  }

  updateUser = async () => {


  }


  getMessage = async () => {

  }

  getMessagesWithDate = async () => {


  }

  putMessage = async () => {


  }

  updateMessage = async () => {


  }




  render() {
    return (
      <div className="App">

        <br></br>
        <h2>Users</h2>
        <Button secondary onClick={this.createUser}>create user</Button>
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

export default (TestApp);
