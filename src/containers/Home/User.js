
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  static propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
  }
  render() {
    const name = this.props.name;
    const desc = this.props.desc;

    console.log(name, desc);
    return (
      <div>
        <p>{name}</p>
        <p>{desc}</p>
        <p>{1 + 1}</p>
      </div>
    );
  }
}

export default User;
