import axios from "axios"
const baseUrl = "http://0.0.0.0:5050"

export const doLogin = () => {
    return async (dispatch, getState) => {
        await dispatch({
            type: "LOADING"
        });
        const username = getState().user.username;
        const password = getState().user.password;
        localStorage.clear()
        await axios
            .get(baseUrl + "/auth", {
                params: {
                    username: username,
                    password: password
                }
            })
            .then(async (response) => {
                await dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
                localStorage.setItem("token", response.data.token)
            })
            .catch(function (error) {
            });
        const token = localStorage.getItem("token")
        const response = await axios
            .get(baseUrl + "/user", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        await
            dispatch({
                type: "GET_USER",
                payload: response.data
            })
    };
};

export const registrasiUser = () => {
    return async (dispatch, getState) => {
        const username = getState().user.username;
        const password = getState().user.password;
        const name = getState().user.name;
        const email = getState().user.email;
        const noTlp = getState().user.nomorTelephone;
        const alamat = getState().user.alamat;
        const avatar = getState().user.avatar;
        const bodyRequestUser = {
            username: username,
            password: password,
            name: name,
            email: email,
            no_hp: noTlp,
            alamat: alamat,
            avatar: avatar,
        }
        await axios
            .post(baseUrl + "/user", bodyRequestUser, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
        alert("Create account success")

    };
};



export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_USER",
        payload: el,
    };
};
export const doLogout = () => {
    localStorage.clear()
    return {
        type: "LOG_OUT",
    };
};