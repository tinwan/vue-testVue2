/**
 * Created by tianyun on 2017/6/6.
 */
import axios from "axios";

export default {
    login ({ commit, state, rootState }, params) {
        axios.post("/login", params, {
            timeout: 20000
        }).then(
            (response) => {
                let login_role = response.data.role,
                    login_token = response.data.token;
                axios.defaults.headers.common["Authorization"] = "Bearer " + login_token;
                sessionStorage.clear();
                sessionStorage.setItem("loginId", params.username);
                sessionStorage.setItem("loginRole", login_role);
                sessionStorage.setItem("accessToken", login_token);
                commit("LOGIN_SUCCESS", {
                    response
                });
            },
            (error) => {
                commit("LOGIN_FAILURE", {
                    error
                });
            }
        );
    },
    logout({ commit, state, rootState }, params) {
        axios.delete("/logout").then(
            (response) => {
                axios.defaults.headers.common["Authorization"] = "";
                sessionStorage.clear();
                commit("LOGOUT_SUCCESS", {
                    response
                });
            },
            (error) => {
                axios.defaults.headers.common["Authorization"] = "";
                sessionStorage.clear();
                commit("LOGOUT_FAILURE", {
                    error
                });
            }
        );

    }
};
