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
        localStorage.setItem("username", username)
        // alert("cek action")
        await axios
            .get(baseUrl + "/auth", {
                params: {
                    username: username,
                    password: password
                }
            })
            .then(async (response) => {
                console.log("masuk api", response.data.token)
                await dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
                localStorage.setItem("token", response.data.token)
                // console.log("cek storage2", localStorage)
            })
            .catch(function (error) {
            });
        const token = localStorage.getItem("token")
        console.log("cek response1", token)
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

// export const registrasiUser = () => {
//     return async (dispatch, getState) => {
//         alert("sdh msuk tws regis1")
//         const username = getState().register.username;
//         const password = getState().register.password;
//         const name = getState().register.name;
//         const email = getState().register.email;
//         const noTlp = getState().register.nomorTelephone;
//         const alamat = getState().register.alamat;
//         const avatar = getState().register.avatar;
//         const bodyRequestUser = {
//             username: username,
//             password: password,
//             name: name,
//             email: email,
//             no_hp: noTlp,
//             alamat: alamat,
//             avatar: avatar,
//         }
//         localStorage.clear()
//         localStorage.setItem("username", username)
//         await axios
//             .post(baseUrl + "/user", bodyRequestUser, {
//                 headers: {
//                     "Content-Type": "application/json; charset=utf-8",
//                 },
//             })
//         alert("Create account success")

//     };
// };



export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_USER",
        payload: el,
    };
};
export const doLogout = () => {
    localStorage.clear()
    console.log("cek storage2", localStorage)
    return {
        type: "LOG_OUT",
    };
};