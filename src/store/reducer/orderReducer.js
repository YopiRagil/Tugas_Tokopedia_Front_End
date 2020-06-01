const initialState = {
    orderData: [],
    isLoading: true,
    name: '',
    search: '',
    update: false,
    statusOrder: '',
};

export default function orderReducer(orderState = initialState, action) {
    switch (action.type) {
        case "LOADING_ORDER":
            return {
                ...orderState,
                isLoading: true
            }
        case "STATUS_ORDER":
            return {
                ...orderState,
                statusOrder: action.payload
            }
        case "GET_ORDER_ALL":
            return {
                ...orderState,
                orderData: action.payload,
                isLoading: false,
                update: false,
            }

        case "CHANGE_INPUT_ORDER":
            return {
                ...orderState,
                update: true,
                [action.payload.target.name]: action.payload.target.value,
            }
        case "CLEAR":
            return initialState
        case "SEARCH_ORDER":
            return {
                ...orderState,
                orderData: action.payload,
                isLoading: false
            }
        case "SEARCH_INPUT":
            return {
                ...orderState,
                search: action.payload
            }
        default:
            return orderState
    }
}