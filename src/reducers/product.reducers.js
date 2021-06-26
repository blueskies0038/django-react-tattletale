import { productListTypes, productDetailsTypes, productCreateTypes, productUpdateTypes, productDeleteTypes } from '../constants/product.constants'


export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case productListTypes.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        
        case productListTypes.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        
        case productListTypes.PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productDetailsReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case productDetailsTypes.PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        
        case productDetailsTypes.PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        
        case productDetailsTypes.PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case productCreateTypes.PRODUCT_CREATE_REQUEST:
            return { loading: true }

        case productCreateTypes.PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case productCreateTypes.PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case productCreateTypes.PRODUCT_CREATE_RESET:
            return {}

        default:
            return state
    }
}


export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case productUpdateTypes.PRODUCT_UPDATE_REQUEST:
            return { loading: true }

        case productUpdateTypes.PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case productUpdateTypes.PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case productUpdateTypes.PRODUCT_UPDATE_RESET:
            return { product: {} }

        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case productDeleteTypes.PRODUCT_DELETE_REQUEST:
            return { loading: true }

        case productDeleteTypes.PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }

        case productDeleteTypes.PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}