import axios from "axios"
const orderUrl = "http://0.0.0.0:5050/order"


export const getOrderList = () => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
        const sort = getState().order.sort;
        const startDate = getState().order.startDate;
        const endDate = getState().order.endDate;
        await dispatch({
            type: "LOADING_ORDER"
        });
        const response = await axios.get(orderUrl + "/semua", {
            headers: {
                Authorization: 'Bearer ' + token
            },
            params: {
                sort: sort,
                orderby: "created_at",
                start_time: startDate,
                end_time: endDate,
            },
        });
        dispatch({
            type: "GET_ORDER_ALL",
            payload: response.data
        })
    }
}

export const getOrderCategory = (statusOrder) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
        const sort = getState().order.sort;
        const startDate = getState().order.startDate;
        const endDate = getState().order.endDate;
        await dispatch({
            type: "LOADING_ORDER"
        });
        if (statusOrder === undefined) {
            await dispatch({
                type: "LOADING_ORDER"
            });
        }
        await dispatch({
            type: "STATUS_ORDER",
            payload: statusOrder
        });
        const response = await axios.get(orderUrl + "/semua", {
            headers: {
                Authorization: "Bearer " + token
            }, params: {
                start_time: startDate,
                end_time: endDate,
                sort: sort,
                orderby: "created_at",
            },
        });
        dispatch({
            type: "GET_ORDER_ALL",
            payload: response.data.filter(item => item.status === statusOrder),
        })
    }
}

export const changeStatusOrder = (id, statusChange) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
        var resi = getState().order.resi;
        // console.log("resi", resi)
        if (statusChange === "dikirim" && resi == undefined) {
            alert("resi belum diisi")
        } else {
            await dispatch({
                type: "LOADING_ORDER"
            });
            var bodyRequestStatus = {
                status: statusChange,
                kode_resi: resi,
            }
            var bodyJson = JSON.stringify(bodyRequestStatus)
            // console.log("cek bodyrequest", bodyJson)
            await axios
                .put(orderUrl + "/" + id, bodyJson, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error.response)
                });
            alert("Success")

                ;
        }
    }
};
export const doClear = () => {
    localStorage.clear()
    return {
        type: "CLEAR",
    };
};

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_ORDER",
        payload: el,
    };
};

export const InputSearchOrder = (event) => {
    const value = event.target.value;
    return async (dispatch) => {
        await dispatch({
            type: "SEARCH_INPUT"
        });
        await dispatch(searchOrder(value));
    }
};
export const searchOrder = (keyword) => {
    const token = localStorage.getItem('token')
    return async (dispatch) => {
        if (keyword.length > 2) {
            await dispatch({
                type: "LOADING_ORDER"
            });
            try {
                const response = await axios.get(orderUrl + "/semua", {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }, params: {
                        keyword: keyword,
                    },
                });
                dispatch({
                    type: "SEARCH_ORDER",
                    payload: response.data,
                });
            } catch (error) {
                console.error(error);
            }
        }
    }

};