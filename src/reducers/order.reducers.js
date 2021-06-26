import { OrderCreateTypes, orderDeliverTypes, orderDetailsTypes, orderListAdminTypes, orderListUserTypes, orderPayTypes } from "../constants/order.constants"


export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case OrderCreateTypes.ORDER_CREATE_REQUEST:
            return {
                loading: true
            }

        case OrderCreateTypes.ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }

        case OrderCreateTypes.ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case OrderCreateTypes.ORDER_CREATE_RESET:
            return {}


        default:
            return state
    }
}

export const orderDetailsReducer = (state = { loading: true, orderItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case orderDetailsTypes.ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case orderDetailsTypes.ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case orderDetailsTypes.ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case orderPayTypes.ORDER_PAY_REQUEST:
            return {
                loading: true
            }

        case orderPayTypes.ORDER_PAY_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case orderPayTypes.ORDER_PAY_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case orderPayTypes.ORDER_PAY_RESET:
            return {}

        default:
            return state
    }
}

export const orderDeliverReducer = (state = {}, action) => {
    switch (action.type) {
        case orderDeliverTypes.ORDER_DELIVER_REQUEST:
            return {
                loading: true
            }

        case orderDeliverTypes.ORDER_DELIVER_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case orderDeliverTypes.ORDER_DELIVER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case orderDeliverTypes.ORDER_DELIVER_RESET:
            return {}

        default:
            return state
    }
}

export const orderListUserReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case orderListUserTypes.ORDER_LIST_USER_REQUEST:
            return {
                loading: true
            }

        case orderListUserTypes.ORDER_LIST_USER_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }

        case orderListUserTypes.ORDER_LIST_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case orderListUserTypes.ORDER_LIST_USER_RESET:
            return {
                orders: []
            }

        default:
            return state
    }
}

export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case orderListAdminTypes.ORDER_LIST_ADMIN_REQUEST:
            return {
                loading: true
            }

        case orderListAdminTypes.ORDER_LIST_ADMIN_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }

        case orderListAdminTypes.ORDER_LIST_ADMIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}