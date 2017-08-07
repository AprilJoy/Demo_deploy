import React, { Component } from 'react';
import User from './User';
import Header from './components/Header.js';
import Content from './components/Content.js';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <Header />
        <Content />
        <User name="Andy" desc="大家好1"/>
        <User name="Bob" desc="大家好2"/>
      </div>
    );
  }
}
