import axios from 'axios'
import { productListTypes, productDetailsTypes, productCreateTypes, productUpdateTypes, productDeleteTypes } from '../constants/product.constants'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: productListTypes.PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('/api/products/')

        dispatch({
            type: productListTypes.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: productListTypes.PRODUCT_LIST_FAIL,
            payload: (error.response && error.response.data.detail) ?
                error.response.data.detail : error.detail
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: productDetailsTypes.PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: productDetailsTypes.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: productDetailsTypes.PRODUCT_DETAILS_FAIL,
            payload: (error.response && error.response.data.detail) ?
                error.response.data.detail : error.detail
        })
    }
}

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: productCreateTypes.PRODUCT_CREATE_REQUEST
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
            `/api/products/create/`,
            {},
            config
        )
        dispatch({
            type: productCreateTypes.PRODUCT_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: productCreateTypes.PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: productUpdateTypes.PRODUCT_UPDATE_REQUEST
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
            `/api/products/update/${product._id}/`,
            product,
            config
        )
        dispatch({
            type: productUpdateTypes.PRODUCT_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: productDetailsTypes.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: productUpdateTypes.PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: productDeleteTypes.PRODUCT_DELETE_REQUEST
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
            `/api/products/delete/${id}/`,
            config
        )

        dispatch({
            type: productDeleteTypes.PRODUCT_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: productDeleteTypes.PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}