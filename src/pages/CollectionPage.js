import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCollectionDetails } from '../actions/collection.actions'


function CollectionPage({ match }) {
    const dispatch = useDispatch()
    const collectionDetails = useSelector(state => state.collectionDetails)
    const { loading, error, collection } = collectionDetails

    useEffect(() => {
        console.log(match.params.id)
        dispatch(listCollectionDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            {loading ?
                <Loader /> : error ? <Message variant="danger">{error}</Message> : collection.products ?  
                <Row>
                    {collection.products.map(product => (
                        <Col key={product._id} sm={12} md={6}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
                : <></>
            }
        </div>
    )
}

export default CollectionPage
