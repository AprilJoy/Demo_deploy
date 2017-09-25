import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';

export default class Product extends Component {
  static propTypes = {
    product: PropTypes.object,
    cart: PropTypes.array,
    addToCart: PropTypes.func,
  }

  render() {
    const { product, cart, addToCart } = this.props;

    return (
      <Card>
        <CardImg top width="100%" src={product.img} alt="Card image cap" />
        <CardBlock>
          <CardTitle>{product.title}</CardTitle>
          <CardSubtitle>
            <h4>
              {
                product.discount
                  ? <Badge color="danger">特价:{product.price}</Badge>
                  : <Badge color="success">售价:{product.price}</Badge>
              }
            </h4>

          </CardSubtitle>
          <CardText>{product.desc}</CardText>
          <Button
            disabled={cart.find(item => item.id === product.id)}
            onClick={() => addToCart(product)}
            >
            购买
            </Button>
        </CardBlock>
      </Card>
    );
  }
}
