import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`./products/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`./product/${product._id}`}>
                    <Card.Title as="div">{product.name}</Card.Title>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Product
