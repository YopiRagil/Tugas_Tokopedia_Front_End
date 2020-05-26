import axios from "axios"
const orderUrl = "http://0.0.0.0:5050/order"
const token = localStorage.getItem('token')

export const getOrderList = () => {
    console.log("cek getOrder list")
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        const response = await axios.get(orderUrl + "/semua", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        console.log("response order list", response)
        dispatch({
            type: "GET_ORDER_ALL",
            payload: response.data
        })
    }
}

export const getOrderCategory = (statusOrder) => {
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        const response = await axios.get(orderUrl + "/semua", {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        dispatch({
            type: "GET_ORDER_ALL",
            payload: response.data.filter(item => item.status == statusOrder),
        })
    }
}

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_PRODUK",
        payload: el,
    };
};
