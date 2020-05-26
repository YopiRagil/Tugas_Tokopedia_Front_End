const initialState = {
    orderData: [],
    isLoading: true,
};

export default function orderReducer(orderState = initialState, action) {
    switch (action.type) {
        case "LOADING_ORDER":
            return {
                ...orderState,
                isLoading: true
            }
        case "GET_ORDER_ALL":
            return {
                ...orderState,
                orderData: action.payload,
                isLoading: false,
            }

        case "CHANGE_INPUT_ORDER":
            return {
                ...orderState,
                [action.payload.target.name]: action.payload.target.value,
            };
        default:
            return orderState
    }
}