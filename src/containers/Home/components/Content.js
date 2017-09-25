import React, { Component } from 'react';
import { Container, Row, Col, Button, Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AlbumJSON from './Album.json';
import Product from './Product';
import Cart from './Cart';

export default class Content extends Component {
  state = {
    modal: false,
    cart: [],
    album: [],
  }

  // 呼叫API
  componentDidMount = async () => {
    const data = await fetch('https://demojson.herokuapp.com/cart').then(response => response.json());

    this.setState({
      album: data,
    });
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addToCart = (product) => {
    const newCart = this.state.cart;
    newCart.push(product);
    // update show
    this.setState({
      cart: newCart,
    });
  }

  checkout = (totalPrice) => {
    alert(`已从您的信用卡扣除${totalPrice}元`);
  }

  deleteCartItem = (index) => {
    const cart = this.state.cart;
    cart.splice(index, 1);

    this.setState({
      cart
    });
  }

  render() {
    const TotalPrice = this.state.cart.reduce((acc, item) => acc + item.price, 0);
    return (
      <Container>
        <Row>
          <Col md="12">
            <Jumbotron>
              <h1 className="display-3">美客唱片</h1>
              <p className="lead">
                美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源
              </p>
              <p className="lead">
                並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評
              </p>
              <p className="lead">
                不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動
              </p>
              <p className="lead">
                進一步擴大影響力，提昇流行音樂產業的動能
              </p>
              <hr className="my-2" />
              <p className="lead">
                <Button color="primary" onClick={this.toggle}>
                  購物車({ this.state.cart.length})
                </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          { this.state.album.map(product => (
            <Col xs="12" md="4">
              <Product
                product={product}
                cart={this.state.cart}
                addToCart={this.addToCart}
              />
            </Col>

          ))}
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>购物车</ModalHeader>
          <ModalBody>
            <Cart
              cart={this.state.cart}
              deleteCartItem={this.deleteCartItem}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              disabled={this.state.cart.length === 0}
              color="primary" onClick={() => this.checkout(TotalPrice)}>购买
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>取消</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
