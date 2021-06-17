import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listCollectionDetails } from '../actions/collection.actions'


function CollectionPage({ match }) {
    const dispatch = useDispatch()
    const collectionDetails = useSelector(state => state.collectionDetails)
    const { loading, error, collection } = collectionDetails

    useEffect(() => {
        dispatch(listCollectionDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            <h1>{collection.name}</h1>
            {/*
            <Row>
                {collectionProducts.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xL={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            */}
        </div>
    )
}

export default CollectionPage
