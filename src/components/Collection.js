import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Collection({ collection }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`./collections/${collection._id}`}>
                <Card.Img src={collection.image} />
            </Link>

            <Card.Body>
                <Link to={`./collections/${collection._id}`}>
                    <Card.Title as="div">{collection.name}</Card.Title>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Collection
