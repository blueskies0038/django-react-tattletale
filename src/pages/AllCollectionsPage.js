import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Collection from '../components/Collection'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCollections } from '../actions/collection.actions'


function AllCollectionsPage() {
    const dispatch = useDispatch()
    const collectionList = useSelector(state => state.collectionList)
    const { error, loading, collections } = collectionList

    useEffect(() => {
        dispatch(listCollections())
    }, [dispatch])

    return (
        <div>
            {loading ?
                <Loader /> : error ? <Message variant="danger">{error}</Message> : 
                <Row>
                    {collections.map(collection => (
                        <Col key={collection._id} sm={12} md={6}>
                            <Collection collection={collection} />
                        </Col>
                    ))}
                </Row>
            }
        </div>
    )
}

export default AllCollectionsPage
