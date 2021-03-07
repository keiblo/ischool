import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart, removeFromCart} from '../actions/cartActions'

const CartScreen = ({match, location, history}) => {
  const courseId = match.params.id

  const questionQty = location.search
    ? Number(location.search.split('=')[1])
    : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  useEffect(() => {
    if (courseId) {
      dispatch(addToCart(courseId, questionQty))
    }
  }, [dispatch, courseId, questionQty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart)
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <link to='/'>Go Back</link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.course}>
                <Row>
                  <Col md={2}>
                    <Image stc={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/course/${item.course}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    {' '}
                    <Form.Control
                      as='select'
                      value={item.questionQty}
                      onChange={(e) =>
                        dispatch(addToCart(item.course, Number(e.target.value)))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  <Col md={2}>
                    <Button
                      type='button'
                      varinat='light'
                      onClick={() => removeFromCartHandler(item.course)}
                    >
                      {' '}
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems.reduce(
                  (acc, item) => acc + item.questionQuantity,
                  0
                )}
                ) items
              </h2>
              ¥
              {cartItems
                .reduce((acc, item) => acc + item.questionQty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
