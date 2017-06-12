/**
 * Created by tianyun on 2017/6/1.
 */
import Vue from "vue";
import Vuex from "vuex";
import loginModule from "./login/index";
import userModule from "./user/index";

// install vuex
Vue.use(Vuex);

//用sessionStorage来保存状态，防止刷新
const persistPlugin = (store) => {
    let st = sessionStorage.getItem("persistent_state");
    if (st) {
        store.replaceState(JSON.parse(st));
    }
    store.subscribe((mutation, state) => {
        sessionStorage.setItem("persistent_state", JSON.stringify(state));
    });
};

export default new Vuex.Store({
    modules: {
        login: loginModule,
        user: userModule
    },
    plugins: [persistPlugin]
});
