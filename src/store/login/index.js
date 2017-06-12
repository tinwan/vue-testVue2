/**
 * Created by tianyun on 2017/6/6.
 */
import mutations from "./mutations";
import actions from "./actions";

export default {
    namespaced: true,
    state: {
        login: false
    },
    actions,
    mutations
};
