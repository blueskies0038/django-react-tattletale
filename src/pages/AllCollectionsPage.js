import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Collection from '../components/Collection'
import axios from 'axios'

function AllCollectionsPage() {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        async function fetchCollections() {
            const { data } = await axios.get('/api/collections/')
            setCollections(data)
        }
        fetchCollections()
    }, [])

    return (
        <div>
            <Row>
                {collections.map(collection => (
                    <Col key={collection._id} sm={12} md={6}>
                        <Collection collection={collection} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default AllCollectionsPage
