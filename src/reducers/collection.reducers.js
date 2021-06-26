import { collectionListTypes, collectionCreateTypes, collectionUpdateTypes, collectionDeleteTypes, collectionDetailsTypes } from '../constants/collection.constants'


export const collectionListReducer = (state = { collections: [] }, action) => {
    switch (action.type) {
        case collectionListTypes.COLLECTION_LIST_REQUEST:
            return { loading: true, collections: [] }
        
        case collectionListTypes.COLLECTION_LIST_SUCCESS:
            return { loading: false, collections: action.payload }
        
        case collectionListTypes.COLLECTION_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const collectionDetailsReducer = (state = { collection: [] }, action) => {
    switch (action.type) {
        case collectionDetailsTypes.COLLECTION_DETAILS_REQUEST:
            return { loading: true, ...state }
        
        case collectionDetailsTypes.COLLECTION_DETAILS_SUCCESS:
            return { loading: false, collection: action.payload }
        
        case collectionDetailsTypes.COLLECTION_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const collectionCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case collectionCreateTypes.COLLECTION_CREATE_REQUEST:
            return { loading: true }

        case collectionCreateTypes.COLLECTION_CREATE_SUCCESS:
            return { loading: false, success: true, collection: action.payload }

        case collectionCreateTypes.COLLECTION_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case collectionCreateTypes.COLLECTION_CREATE_RESET:
            return {}

        default:
            return state
    }
}


export const collectionUpdateReducer = (state = { collection: {} }, action) => {
    switch (action.type) {
        case collectionUpdateTypes.COLLECTION_UPDATE_REQUEST:
            return { loading: true }

        case collectionUpdateTypes.COLLECTION_UPDATE_SUCCESS:
            return { loading: false, success: true, collection: action.payload }

        case collectionUpdateTypes.COLLECTION_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case collectionUpdateTypes.COLLECTION_UPDATE_RESET:
            return { collection: {} }

        default:
            return state
    }
}

export const collectionDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case collectionDeleteTypes.COLLECTION_DELETE_REQUEST:
            return { loading: true }

        case collectionDeleteTypes.COLLECTION_DELETE_SUCCESS:
            return { loading: false, success: true }

        case collectionDeleteTypes.COLLECTION_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}