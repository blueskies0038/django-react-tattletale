import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/product.actions'


function ProductPage({ match }) {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

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
                            <Button className="btn-lg my-4" block type="button" disabled={product.countInStock == 0}>Add to Cart</Button>
                        </ListGroup>
                    </Col>
                </Row>
            }
            <Link to="/" className="btn btn-light my-3">Back</Link>
        </div>
    )
}

export default ProductPage
