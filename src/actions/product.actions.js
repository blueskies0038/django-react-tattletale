import axios from 'axios'
import { productListTypes, productDetailsTypes } from '../constants/product.constants'

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
            payload: (error.response && error.response.data.message) ?
                error.response.data.message : error.message
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
            payload: (error.response && error.response.data.message) ?
                error.response.data.message : error.message
        })
    }
}