import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Collection from '../components/Collection'
import axios from 'axios'

function CollectionPage({ match }) {
    const [collection, setCollection] = useState([])
    const [collectionProducts, setCollectionProducts] = useState([])

    useEffect(() => {
        async function fetchCollection() {
            const { data } = await axios.get(`/api/collections/${match.params.id}`)
            setCollection(data)
            setCollectionProducts(data['products'])
        }
        fetchCollection()
    }, [])

    return (
        <div>
            <Row>
                {collectionProducts.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xL={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CollectionPage
