import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/product.actions'


function ProductPage({ match, history }) {
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    console.log(productDetails)

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?quantity=${quantity}`)
    }

    return (
        <div>
            {loading ?
                <Loader /> : error ? <Message variant="danger">{error}</Message> : 
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span>${product.price}</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {product.description}
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs="auto" className="my-1">
                                            <Form.Control as="select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <Button
                                className="btn-lg my-4" 
                                block type="button" 
                                disabled={product.countInStock === 0}
                                onClick={addToCartHandler}>
                                Add to Cart
                            </Button>
                        </ListGroup>
                    </Col>
                </Row>
            }
            <Link to="/" className="btn btn-light my-3">Back</Link>
        </div>
    )
}

export default ProductPage
