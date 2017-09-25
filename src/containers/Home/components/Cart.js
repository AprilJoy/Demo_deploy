import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Alert, Button } from 'reactstrap';

export default class Cart extends Component {
  static propTypes = {
    cart: PropTypes.array,
    deleteCartItem: PropTypes.func,
  }

  render() {
    const { cart, deleteCartItem } = this.props;
    const totalPrice = cart.reduce((acc, item) => (acc += item.price), 0);
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>品项</th>
              <th>价格</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td><Button color="danger" onClick={() => deleteCartItem(index)}>X</Button></td>
                </tr>

              ))
            }
          </tbody>
        </Table>
        <Alert color="success" className="text-right">
          <p>总价:{totalPrice}</p>
        </Alert>
      </div>
    );
  }
 }
