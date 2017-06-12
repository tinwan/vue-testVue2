/**
 * Created by tianyun on 2017/6/6.
 */
export default {
    ["LOGIN_SUCCESS"](state, payload) {
        state.login = true;
    },
    ["LOGIN_FAILURE"](state, payload) {
        state.login = false;
    },
    ["LOGOUT_SUCCESS"](state, payload) {
        state.login = false;
    },
    ["LOGOUT_FAILURE"](state, payload) {
        state.login = false;
    }
}