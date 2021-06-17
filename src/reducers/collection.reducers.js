import { collectionListTypes, collectionDetailsTypes } from '../constants/collection.constants'


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

