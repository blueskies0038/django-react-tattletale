import axios from 'axios'
import { collectionListTypes, collectionDetailsTypes } from '../constants/collection.constants'

export const listCollections = () => async (dispatch) => {
    try {
        dispatch({ type: collectionListTypes.COLLECTION_LIST_REQUEST })
        const { data } = await axios.get('/api/collections/')

        dispatch({
            type: collectionListTypes.COLLECTION_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: collectionListTypes.COLLECTION_LIST_FAIL,
            payload: (error.response && error.response.data.message) ?
                error.response.data.message : error.message
        })
    }
}

export const listCollectionDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: collectionDetailsTypes.COLLECTION_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/collections/${id}`)

        dispatch({
            type: collectionDetailsTypes.COLLECTION_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: collectionDetailsTypes.COLLECTION_DETAILS_FAIL,
            payload: (error.response && error.response.data.message) ?
                error.response.data.message : error.message
        })
    }
}
