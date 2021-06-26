import axios from 'axios'
import { collectionListTypes, collectionDetailsTypes, collectionCreateTypes, collectionUpdateTypes, collectionDeleteTypes } from '../constants/collection.constants'

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

export const createCollection = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: collectionCreateTypes.COLLECTION_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/collections/create/`,
            {},
            config
        )
        dispatch({
            type: collectionCreateTypes.COLLECTION_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: collectionCreateTypes.COLLECTION_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateCollection = (collection) => async (dispatch, getState) => {
    try {
        dispatch({
            type: collectionUpdateTypes.COLLECTION_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/collections/update/${collection._id}/`,
            collection,
            config
        )
        dispatch({
            type: collectionUpdateTypes.COLLECTION_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: collectionDetailsTypes.COLLECTION_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: collectionUpdateTypes.COLLECTION_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteCollection = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: collectionDeleteTypes.COLLECTION_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/collections/delete/${id}/`,
            config
        )

        dispatch({
            type: collectionDeleteTypes.COLLECTION_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: collectionDeleteTypes.COLLECTION_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}